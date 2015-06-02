# use chai expect assertions
# use sinon for stubs with sinon-chai as a plugin
chai = require '../node_modules/chai'
expect = chai.expect
sinon = require '../node_modules/sinon'
fs = require 'fs-plus'
path = require 'path'
_ = require '../node_modules/lodash'
defaultConfig = require './default-config'

LB = 'language-babel'

describe 'language-babel', ->
  config =  {}
  beforeEach ->
    waitsForPromise ->
      atom.packages.activatePackage(LB)
    config = _.clone defaultConfig
  # ----------------------------------------------------------------------------
  describe 'Reading real config', ->
    it 'should read all possible configuration keys', ->
      lb = atom.packages.getActivePackage(LB).mainModule
      realConfig = lb.getConfig()
      expect(realConfig).to.contain.all.keys key for key, value of config
#   # ----------------------------------------------------------------------------
  describe ':getPaths', ->

    if not process.platform.match /^win/
      it 'returns paths for a named sourcefile with default config', ->
        atom.project.setPaths(['/root/Project1', '/root/Project2'])
        lb = atom.packages.getActivePackage(LB).mainModule
        ret = lb.getPaths('/root/Project1/source/dira/fauxfile.js',config)

        expect(ret.sourceFile).to.equal('/root/Project1/source/dira/fauxfile.js')
        expect(ret.sourceFileDir).to.equal('/root/Project1/source/dira')
        expect(ret.mapFile).to.equal('/root/Project1/source/dira/fauxfile.js.map')
        expect(ret.transpiledFile).to.equal('/root/Project1/source/dira/fauxfile.js')
        expect(ret.sourceRoot).to.equal('/root/Project1')
        expect(ret.projectPath).to.equal('/root/Project1')

      it 'returns paths config with target & source paths set', ->
        atom.project.setPaths(['/root/Project1', '/root/Project2'])
        config.babelSourcePath = '/source' # with dir prefix
        config.babelMapsPath ='mapspath' # and without
        config.babelTranspilePath = '/transpath'
        lb = atom.packages.getActivePackage(LB).mainModule
        ret = lb.getPaths('/root/Project1/source/dira/fauxfile.js',config)

        expect(ret.sourceFile).to.equal('/root/Project1/source/dira/fauxfile.js')
        expect(ret.sourceFileDir).to.equal('/root/Project1/source/dira')
        expect(ret.mapFile).to.equal('/root/Project1/mapspath/dira/fauxfile.js.map')
        expect(ret.transpiledFile).to.equal('/root/Project1/transpath/dira/fauxfile.js')
        expect(ret.sourceRoot).to.equal('/root/Project1/source')
        expect(ret.projectPath).to.equal('/root/Project1')

        atom.project.removePath('/root/Project1')
        atom.project.removePath('/root/Project2')

    if process.platform.match /^win/
      it 'returns paths for a named sourcefile with default config', ->
        atom.project.setPaths(['c:\\root\\Project1', 'c:\\root\\Project2'])

        lb = atom.packages.getActivePackage(LB).mainModule
        ret = lb.getPaths('c:\\root\\Project1\\source\\dira\\fauxfile.js',config)
        expect(ret.sourceFile).to.equal('c:\\root\\Project1\\source\\dira\\fauxfile.js')
        expect(ret.sourceFileDir).to.equal('c:\\root\\Project1\\source\\dira')
        expect(ret.mapFile).to.equal('c:\\root\\Project1\\source\\dira\\fauxfile.js.map')
        expect(ret.transpiledFile).to.equal('c:\\root\\Project1\\source\\dira\\fauxfile.js')
        expect(ret.sourceRoot).to.equal('c:\\root\\Project1')
        expect(ret.projectPath).to.equal('c:\\root\\Project1')

      it 'returns paths config with target & source paths set', ->
        atom.project.setPaths(['c:\\root\\Project1', 'c:\\root\\Project2'])
        config.babelSourcePath = '\\source' # with dir prefix
        config.babelMapsPath ='mapspath' # and without
        config.babelTranspilePath = '\\transpath'
        lb = atom.packages.getActivePackage(LB).mainModule
        ret = lb.getPaths('c:\\root\\Project1\\source\\dira\\fauxfile.js',config)

        expect(ret.sourceFile).to.equal('c:\\root\\Project1\\source\\dira\\fauxfile.js')
        expect(ret.sourceFileDir).to.equal('c:\\root\\Project1\\source\\dira')
        expect(ret.mapFile).to.equal('c:\\root\\Project1\\mapspath\\dira\\fauxfile.js.map')
        expect(ret.transpiledFile).to.equal('c:\\root\\Project1\\transpath\\dira\\fauxfile.js')
        expect(ret.sourceRoot).to.equal('c:\\root\\Project1\\source')
        expect(ret.projectPath).to.equal('c:\\root\\Project1')

#   # ----------------------------------------------------------------------------
  describe ':getBabelOpts', ->
    it 'reads all babel options from babelrc files using internal scanner', ->
      fromDir = path.resolve(__dirname, 'fixtures/dira/dira.1/dira.2')
      toDir = path.resolve(__dirname, 'fixtures')
      sourceFile = path.resolve(fromDir, 'faux.js')
      config.babelSourcePath = toDir
      config.babelMapsPath = toDir
      config.babelTranspilePath = toDir
      config.useInternalScanner = true
      atom.project.setPaths([__dirname])
      lb = atom.packages.getActivePackage(LB).mainModule
      # get paths to projects etc
      pathsTo = lb.getPaths(sourceFile, config)
      opts = lb.getBabelOptions(config, pathsTo)
      expect(opts.stage).to.equal(0)
#
#   # ----------------------------------------------------------------------------
  describe ':getBabelrc', ->
    toDir = path.resolve(__dirname, 'fixtures')
    fromDir = path.resolve(__dirname, 'fixtures/dira/dira.1/dira.2')
    opts = {}

    it 'reads all babelrc files in chosen directories', ->
      lb = atom.packages.getActivePackage(LB).mainModule
      lb.getBabelrc(fromDir, toDir, opts)
      expect(opts.babelrc.length).to.equal(3)

    it 'merges babelrc files together', ->
      lb = atom.packages.getActivePackage(LB).mainModule
      lb.getBabelrc(fromDir, toDir, opts)
      expect(opts.stage).to.equal(0)

    it 'stops traversing at a breakConfig option', ->
      lb = atom.packages.getActivePackage(LB).mainModule
      lb.getBabelrc(fromDir, path.resolve('/'), opts )
      expect(opts.breakConfig).to.be.true
#   # ----------------------------------------------------------------------------
  describe ':transpile', ->
    stubGetConfig = null

    afterEach ->
      stubGetConfig?.restore()

    it 'does nothing when not transpileOnSave', ->
      notificationSpy = sinon.spy()
      disposable = atom.notifications.onDidAddNotification notificationSpy
      config.transpileOnSave = false
      lb = atom.packages.getActivePackage(LB).mainModule
      stubGetConfig = sinon.stub(lb, 'getConfig').returns(config)
      lb.transpile('somefilename')
      expect(notificationSpy.spyCallCount).to.be.undefined

    it 'traps js files outside of the "babelSourcePath"', ->
      notificationSpy = sinon.spy()
      disposable = atom.notifications.onDidAddNotification notificationSpy
      atom.project.setPaths([__dirname])
      config.babelSourcePath = path.resolve(__dirname, 'fixtures')
      config.babelTranspilePath = path.resolve(__dirname, 'fixtures')
      config.babelMapsPath = path.resolve(__dirname, 'fixtures')
      lb = atom.packages.getActivePackage(LB).mainModule
      stubGetConfig = sinon.stub(lb, 'getConfig').returns(config)
      lb.transpile('/fake.js')
      expect(notificationSpy.callCount).to.equal(1)
      msg = notificationSpy.args[0][0].message # first call, first arg
      type = notificationSpy.args[0][0].type
      expect(msg).to.match(/^Babel file is not inside/)

    it 'calls the transpiler but gets an transpile error', ->
      notificationSpy = sinon.spy()
      disposable = atom.notifications.onDidAddNotification notificationSpy
      atom.project.setPaths([__dirname])
      config.babelSourcePath = 'fixtures'
      config.babelTranspilePath = 'fixtures'
      config.babelMapsPath = 'fixtures'
      config.stopAtProjectDirectory = true # avoid the breakConfig
      lb = atom.packages.getActivePackage(LB).mainModule
      stubGetConfig = sinon.stub(lb, 'getConfig').returns(config)
      lb.transpile(path.resolve(__dirname, 'fixtures/dira/dira.1/dira.2/bad.js'))
      #may take a while for the transpiler to run and call home
      waitForNotify = () -> notificationSpy.called
      waitsFor waitForNotify, ' ', 3000
      runs ->
        expect(notificationSpy.callCount).to.equal(1)
        msg = notificationSpy.args[0][0].message # first call, first arg
        expect(msg).to.match(/^Babel.*Transpiler Error/)

    it 'calls the transpiler and transpiles OK with no output configured', ->
      notificationSpy = sinon.spy()
      disposable = atom.notifications.onDidAddNotification notificationSpy
      atom.project.setPaths([__dirname])
      config.babelSourcePath = 'fixtures'
      config.babelTranspilePath = 'fixtures'
      config.babelMapsPath = 'fixtures'
      config.stopAtProjectDirectory = true # avoid the breakConfig
      config.createTranspiledCode = false
      lb = atom.packages.getActivePackage(LB).mainModule
      stubGetConfig = sinon.stub(lb, 'getConfig').returns(config)
      lb.transpile(path.resolve(__dirname, 'fixtures/dira/dira.1/dira.2/react.jsx'))
      #may take a while for the transpiler to run and call home
      waitForNotify = () -> notificationSpy.called
      waitsFor waitForNotify, ' ', 3000
      runs ->
        expect(notificationSpy.callCount).to.equal(2)
        msg = notificationSpy.args[0][0].message # first call, first arg
        expect(msg).to.match(/^Babel.*Transpiler Success/)
        msg = notificationSpy.args[1][0].message
        expect(msg).to.match(/^No transpiled output configured/)

    it 'calls the transpiler and transpiles OK but would overwrite itself', ->
      notificationSpy = sinon.spy()
      disposable = atom.notifications.onDidAddNotification notificationSpy
      atom.project.setPaths([__dirname])
      config.babelSourcePath = 'fixtures'
      config.babelTranspilePath = 'fixtures'
      config.babelMapsPath = 'fixtures'
      config.stopAtProjectDirectory = true # avoid the breakConfig
      lb = atom.packages.getActivePackage(LB).mainModule
      stubGetConfig = sinon.stub(lb, 'getConfig').returns(config)
      lb.transpile(path.resolve(__dirname, 'fixtures/dira/dira.1/dira.2/good.js'))
      #may take a while for the transpiler to run and call home
      waitForNotify = () -> notificationSpy.called
      waitsFor waitForNotify, ' ', 3000
      runs ->
        expect(notificationSpy.callCount).to.equal(2)
        msg = notificationSpy.args[0][0].message # first call, first arg
        expect(msg).to.match(/^Babel.*Transpiler Success/)
        msg = notificationSpy.args[1][0].message
        expect(msg).to.match(/^Transpiled file would overwrite source file/)
