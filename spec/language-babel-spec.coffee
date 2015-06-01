# use chai expect assertions
expect = require('../node_modules/chai').expect
path = require 'path'
DEFAULT_CONFIG = require './default-config'

LB = 'language-babel'

describe 'language-babel', ->
  beforeEach ->
    waitsForPromise ->
      atom.packages.activatePackage(LB)

  # ----------------------------------------------------------------------------
  describe 'Reading real config', ->
    it 'should read all possible configuration keys', ->
      lb = atom.packages.getActivePackage(LB).mainModule
      config = lb.getConfig()
      expect(config).to.contain.all.keys key for key, value of DEFAULT_CONFIG
  # ----------------------------------------------------------------------------
  describe ':getPaths', ->
    if not process.platform.match /^win/
      it 'returns paths for a named sourcefile with default config', ->
        atom.project.addPath('/root/Project1')
        atom.project.addPath('/root/Project2')
        lb = atom.packages.getActivePackage(LB).mainModule
        ret = lb.getPaths('/root/Project1/source/dira/fauxfile.js',DEFAULT_CONFIG)

        expect(ret.sourceFile).to.equal('/root/Project1/source/dira/fauxfile.js')
        expect(ret.sourceFileDir).to.equal('/root/Project1/source/dira')
        expect(ret.mapFile).to.equal('/root/Project1/source/dira/fauxfile.js.map')
        expect(ret.transpiledFile).to.equal('/root/Project1/source/dira/fauxfile.js')
        expect(ret.sourceRoot).to.equal('/root/Project1')
        expect(ret.projectPath).to.equal('/root/Project1')

      it 'returns paths config with target & source paths set', ->
        atom.project.addPath('/root/Project1')
        atom.project.addPath('/root/Project2')
        config = DEFAULT_CONFIG
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


    if process.platform.match /^win/
      it 'returns paths for a named sourcefile with default config', ->
        atom.project.addPath('c:\\root\\Project1')
        atom.project.addPath('c:\\root\\Project2')
        lb = atom.packages.getActivePackage(LB).mainModule
        ret = lb.getPaths('c:\\root\\Project1\\source\\dira\\fauxfile.js',DEFAULT_CONFIG)

        expect(ret.sourceFile).to.equal('c:\\root\\Project1\\source\\dira\\fauxfile.js')
        expect(ret.sourceFileDir).to.equal('c:\\root\\Project1\\source\\dira')
        expect(ret.mapFile).to.equal('c:\\root\\Project1\\source\\dira\\fauxfile.js.map')
        expect(ret.transpiledFile).to.equal('c:\\root\\Project1\\source\\dira\\fauxfile.js')
        expect(ret.sourceRoot).to.equal('c:\\root\\Project1')
        expect(ret.projectPath).to.equal('c:\\root\\Project1')

      it 'returns paths config with target & source paths set', ->
        #atom.project.setPaths(['c:\\root\\Project1', 'c:\\root\\Project2'])
        atom.project.addPath('c:\\root\\Project1')
        atom.project.addPath('c:\\root\\Project2')
        config = DEFAULT_CONFIG
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

  # ----------------------------------------------------------------------------
  describe ':getBabelOpts', ->
    it 'reads all babel options from babelrc files using internal scanner', ->
      fromDir = path.resolve(__dirname, 'fixtures/dira/dira.1/dira.2')
      toDir = path.resolve(__dirname, 'fixtures')
      sourceFile = path.resolve(fromDir, 'faux.js')
      config = DEFAULT_CONFIG
      config.babelSourcePath = toDir
      config.babelMapsPath = toDir
      config.babelTranspilePath = toDir
      config.useInternalScanner = true
      atom.project.addPath(__dirname)
      lb = atom.packages.getActivePackage(LB).mainModule
      # get paths to projects etc
      pathsTo = lb.getPaths(sourceFile, config)
      opts = lb.getBabelOptions(config, pathsTo)
      expect(opts.stage).to.equal(0)

  # ----------------------------------------------------------------------------
  describe ':getBabelrc', ->
    specDir = __dirname
    toDir = path.resolve(specDir, 'fixtures')
    fromDir = path.resolve(specDir, 'fixtures/dira/dira.1/dira.2')
    opts = {}

    it 'reads all babelrc files in chosen directories', ->
      lb = atom.packages.getActivePackage(LB).mainModule
      lb.getBabelrc(fromDir, toDir, opts)
      expect(opts.babelrc.length).to.equal(3)

    it 'merges babelrc files together', ->
      lb = atom.packages.getActivePackage(LB).mainModule
      lb.getBabelrc(fromDir, toDir, opts)
      expect(opts.stage).to.equal(0)
      expect(opts.blacklist).to.have.members(['first','second','third'])

    it 'stops traversing at a breakConfig option', ->
      lb = atom.packages.getActivePackage(LB).mainModule
      lb.getBabelrc(fromDir, path.resolve('/'), opts )
      expect(opts.breakConfig).to.be.true
