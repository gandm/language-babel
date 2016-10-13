chai = require '../node_modules/chai'
expect = chai.expect
fs = require 'fs-plus'
path = require 'path'
defaultConfig = require './default-config'
grammarTest = require 'atom-grammar-test'
temp = require('temp');

LB = 'language-babel'
# we use atom setPaths in this spec. setPaths checks if directories exist
# thus:- setPaths(['/root/Project1']) may find /root but not /root/Project1
# and sets the proj dir as /root rather than /root/Project1. If /root/Project1
# were no found, atom sets the directory to the full name.
# We need some prefix directory faux names for posix and windows to ensure
# we always get a project name we set

describe 'language-babel', ->
  lb = null
  config =  {}
  beforeEach ->
    temp.cleanup()
    waitsForPromise ->
      atom.packages.activatePackage(LB)
    config = JSON.parse JSON.stringify defaultConfig

    runs ->
      lb = atom.packages.getActivePackage(LB).mainModule.transpiler
  # ----------------------------------------------------------------------------
  describe 'Reading real config', ->
    it 'should read all possible configuration keys', ->
      realConfig = lb.getConfig()
      expect(realConfig).to.contain.all.keys key for key, value of config
  # ----------------------------------------------------------------------------
  describe ':getPaths', ->

    if not process.platform.match /^win/
      it 'returns paths for a named sourcefile with default config', ->
        tempProj1 = temp.mkdirSync()
        tempProj2 = temp.mkdirSync()
        atom.project.setPaths([tempProj1,tempProj2])

        ret = lb.getPaths(tempProj1+'/source/dira/fauxfile.js',config)

        expect(ret.sourceFile).to.equal(tempProj1+'/source/dira/fauxfile.js')
        expect(ret.sourceFileDir).to.equal(tempProj1+'/source/dira')
        expect(ret.mapFile).to.equal(tempProj1+'/source/dira/fauxfile.js.map')
        expect(ret.transpiledFile).to.equal(tempProj1+'/source/dira/fauxfile.js')
        expect(ret.sourceRoot).to.equal(tempProj1)
        expect(ret.projectPath).to.equal(tempProj1)

      it 'returns paths config with target & source paths set', ->
        tempProj1 = temp.mkdirSync()
        tempProj2 = temp.mkdirSync()
        atom.project.setPaths([tempProj1,tempProj2])
        config.babelSourcePath = '/source' # with dir prefix
        config.babelMapsPath ='mapspath' # and without
        config.babelTranspilePath = '/transpath'

        ret = lb.getPaths(tempProj1+'/source/dira/fauxfile.js',config)

        expect(ret.sourceFile).to.equal(tempProj1+'/source/dira/fauxfile.js')
        expect(ret.sourceFileDir).to.equal(tempProj1+'/source/dira')
        expect(ret.mapFile).to.equal(tempProj1+'/mapspath/dira/fauxfile.js.map')
        expect(ret.transpiledFile).to.equal(tempProj1+'/transpath/dira/fauxfile.js')
        expect(ret.sourceRoot).to.equal(tempProj1+'/source')
        expect(ret.projectPath).to.equal(tempProj1)

      it 'returns correct paths with project in root directory', ->
        tempProj1 = temp.mkdirSync()
        tempProj2 = temp.mkdirSync()
        atom.project.setPaths(['/'])
        config.babelSourcePath = 'source'
        config.babelMapsPath ='mapspath'
        config.babelTranspilePath = 'transpath'

        ret = lb.getPaths('/source/dira/fauxfile.js',config)

        expect(ret.sourceFile).to.equal('/source/dira/fauxfile.js')
        expect(ret.sourceFileDir).to.equal('/source/dira')
        expect(ret.mapFile).to.equal('/mapspath/dira/fauxfile.js.map')
        expect(ret.transpiledFile).to.equal('/transpath/dira/fauxfile.js')
        expect(ret.sourceRoot).to.equal('/source')
        expect(ret.projectPath).to.equal('/')

    if process.platform.match /^win/
      it 'returns paths for a named sourcefile with default config', ->
        tempProj1 = temp.mkdirSync()
        tempProj2 = temp.mkdirSync()
        atom.project.setPaths([tempProj1,tempProj2])

        ret = lb.getPaths(tempProj1+'\\source\\dira\\fauxfile.js',config)

        expect(ret.sourceFile).to.equal(tempProj1+'\\source\\dira\\fauxfile.js')
        expect(ret.sourceFileDir).to.equal(tempProj1+'\\source\\dira')
        expect(ret.mapFile).to.equal(tempProj1+'\\source\\dira\\fauxfile.js.map')
        expect(ret.transpiledFile).to.equal(tempProj1+'\\source\\dira\\fauxfile.js')
        expect(ret.sourceRoot).to.equal(tempProj1)
        expect(ret.projectPath).to.equal(tempProj1)

      it 'returns paths config with target & source paths set', ->
        tempProj1 = temp.mkdirSync()
        tempProj2 = temp.mkdirSync()
        atom.project.setPaths([tempProj1, tempProj2])
        config.babelSourcePath = '\\source' # with dir prefix
        config.babelMapsPath ='mapspath' # and without
        config.babelTranspilePath = '\\transpath'

        ret = lb.getPaths(tempProj1+'\\source\\dira\\fauxfile.js',config)

        expect(ret.sourceFile).to.equal(tempProj1+'\\source\\dira\\fauxfile.js')
        expect(ret.sourceFileDir).to.equal(tempProj1+'\\source\\dira')
        expect(ret.mapFile).to.equal(tempProj1+'\\mapspath\\dira\\fauxfile.js.map')
        expect(ret.transpiledFile).to.equal(tempProj1+'\\transpath\\dira\\fauxfile.js')
        expect(ret.sourceRoot).to.equal(tempProj1+'\\source')
        expect(ret.projectPath).to.equal(tempProj1)

      it 'returns correct paths with project in root directory', ->
        atom.project.setPaths(['C:\\'])
        config.babelSourcePath = 'source'
        config.babelMapsPath ='mapspath'
        config.babelTranspilePath = 'transpath'

        ret = lb.getPaths('C:\\source\\dira\\fauxfile.js',config)

        expect(ret.sourceFile).to.equal('C:\\source\\dira\\fauxfile.js')
        expect(ret.sourceFileDir).to.equal('C:\\source\\dira')
        expect(ret.mapFile).to.equal('C:\\mapspath\\dira\\fauxfile.js.map')
        expect(ret.transpiledFile).to.equal('C:\\transpath\\dira\\fauxfile.js')
        expect(ret.sourceRoot).to.equal('C:\\source')
        expect(ret.projectPath).to.equal('C:\\')
  # ----------------------------------------------------------------------------
  describe ':transpile', ->
    notificationSpy = null
    notification = null
    writeFileStub = null
    writeFileName = null

    beforeEach ->
      notificationSpy = jasmine.createSpy 'notificationSpy'
      notification = atom.notifications.onDidAddNotification notificationSpy
      writeFileName = null
      writeFileStub = spyOn(fs,'writeFileSync').andCallFake (path)->
        writeFileName = path
    afterEach ->
      notification.dispose()

    describe 'when transpileOnSave is false', ->
      it 'does nothing', ->
        config.transpileOnSave = false

        spyOn(lb, 'getConfig').andCallFake -> config
        lb.transpile('somefilename')
        expect(notificationSpy.callCount).to.equal(0)
        expect(writeFileStub.callCount).to.equal(0)

    describe 'When a source file is outside the "babelSourcePath" & suppress msgs false', ->
      it 'notifies sourcefile is not inside sourcepath', ->
        atom.project.setPaths([__dirname])
        config.babelSourcePath = 'fixtures'
        config.babelTranspilePath = 'fixtures'
        config.babelMapsPath = 'fixtures'

        spyOn(lb, 'getConfig').andCallFake -> config
        lb.transpile(__dirname+'/fake.js')
        expect(notificationSpy.callCount).to.equal(1)
        msg = notificationSpy.calls[0].args[0].message # first call, first arg
        type = notificationSpy.calls[0].args[0].type
        expect(msg).to.match(/^LB: Babel file is not inside/)
        expect(writeFileStub.callCount).to.equal(0)

    describe 'When a source file is outside the "babelSourcePath" & suppress msgs true', ->
      it 'exects no notifications', ->
        atom.project.setPaths([__dirname])
        config.babelSourcePath = 'fixtures'
        config.babelTranspilePath = 'fixtures'
        config.babelMapsPath = 'fixtures'
        config.suppressSourcePathMessages = true

        spyOn(lb, 'getConfig').andCallFake -> config
        lb.transpile(__dirname+'/fake.js')
        expect(notificationSpy.callCount).to.equal(0)
        expect(writeFileStub.callCount).to.equal(0)

    describe 'When a js files is transpiled and gets an error', ->
      it 'it issues a notification error message', ->
        atom.project.setPaths([__dirname])
        config.babelSourcePath = 'fixtures'
        config.babelTranspilePath = 'fixtures'
        config.babelMapsPath = 'fixtures'

        spyOn(lb, 'getConfig').andCallFake ->config
        lb.transpile(path.resolve(__dirname, 'fixtures/dira/dira.1/dira.2/bad.js'))
        #may take a while for the transpiler to run and call home
        waitsFor ->
          notificationSpy.callCount
        runs ->
          expect(notificationSpy.callCount).to.equal(1)
          msg = notificationSpy.calls[0].args[0].message
          expect(msg).to.match(/^LB: Babel.*Transpiler Error/)
          expect(writeFileStub.callCount).to.equal(0)

    describe 'When a js file saved but no output is set', ->
      it 'calls the transpiler but doesnt save output', ->
        atom.project.setPaths([__dirname])
        config.babelSourcePath = 'fixtures'
        config.babelTranspilePath = 'fixtures'
        config.babelMapsPath = 'fixtures'
        config.createTranspiledCode = false

        spyOn(lb, 'getConfig').andCallFake ->config
        lb.transpile(path.resolve(__dirname, 'fixtures/dira/dira.1/dira.2/react.jsx'))
        #may take a while for the transpiler to run and call home
        waitsFor ->
          notificationSpy.callCount > 1
        runs ->
          expect(notificationSpy.callCount).to.equal(2)
          msg = notificationSpy.calls[0].args[0].message
          expect(msg).to.match(/^LB: Babel.*Transpiler Success/)
          msg = notificationSpy.calls[1].args[0].message
          expect(msg).to.match(/^LB: No transpiled output configured/)
          expect(writeFileStub.callCount).to.equal(0)


    describe 'When a js file saved but no transpile path is set', ->
      it 'calls the transpiler and transpiles OK but doesnt save and issues msg', ->
        atom.project.setPaths([__dirname])
        config.babelSourcePath = 'fixtures'
        config.babelTranspilePath = 'fixtures'
        config.babelMapsPath = 'fixtures'

        spyOn(lb, 'getConfig').andCallFake ->config
        lb.transpile(path.resolve(__dirname, 'fixtures/dira/dira.1/dira.2/good.js'))
        #may take a while for the transpiler to run and call home
        waitsFor ->
          notificationSpy.callCount > 1
        runs ->
          expect(notificationSpy.callCount).to.equal(2)
          msg = notificationSpy.calls[0].args[0].message # first call, first arg
          expect(msg).to.match(/^LB: Babel.*Transpiler Success/)
          msg = notificationSpy.calls[1].args[0].message
          expect(msg).to.match(/^LB: Transpiled file would overwrite source file/)
          expect(writeFileStub.callCount).to.equal(0)

    describe 'When a jsx file saved,transpile path is set, source maps enabled', ->
      it 'calls the transpiler and transpiles OK, saves as .js and issues msg', ->
        atom.project.setPaths([__dirname])
        config.babelSourcePath = 'fixtures'
        config.babelTranspilePath = 'fixtures-transpiled'
        config.babelMapsPath = 'fixtures-maps'
        config.createMap = true

        spyOn(lb, 'getConfig').andCallFake ->config
        lb.transpile(path.resolve(__dirname, 'fixtures/dira/dira.1/dira.2/react.jsx'))
        #may take a while for the transpiler to run and call home
        waitsFor ->
          writeFileStub.callCount
        runs ->
          expect(notificationSpy.callCount).to.equal(1)
          msg = notificationSpy.calls[0].args[0].message # first call, first arg
          expect(msg).to.match(/^LB: Babel.*Transpiler Success/)
          expect(writeFileStub.callCount).to.equal(2)
          savedFilename = writeFileStub.calls[0].args[0]
          expectedFileName = path.resolve(__dirname, 'fixtures-transpiled/dira/dira.1/dira.2/react.js')
          expect(savedFilename).to.equal(expectedFileName)
          savedFilename = writeFileStub.calls[1].args[0]
          expectedFileName = path.resolve(__dirname, 'fixtures-maps/dira/dira.1/dira.2/react.js.map')
          expect(savedFilename).to.equal(expectedFileName)

    describe 'When a jsx file saved,transpile path is set, source maps enabled, success suppressed', ->
      it 'calls the transpiler and transpiles OK, saves as .js and issues msg', ->
        atom.project.setPaths([__dirname])
        config.babelSourcePath = 'fixtures'
        config.babelTranspilePath = 'fixtures-transpiled'
        config.babelMapsPath = 'fixtures-maps'
        config.createMap = true
        config.suppressTranspileOnSaveMessages = true

        spyOn(lb, 'getConfig').andCallFake ->config
        lb.transpile(path.resolve(__dirname, 'fixtures/dira/dira.1/dira.2/react.jsx'))
        #may take a while for the transpiler to run and call home
        waitsFor ->
          writeFileStub.callCount
        runs ->
          expect(notificationSpy.callCount).to.equal(0)
          expect(writeFileStub.callCount).to.equal(2)
          savedFilename = writeFileStub.calls[0].args[0]
          expectedFileName = path.resolve(__dirname, 'fixtures-transpiled/dira/dira.1/dira.2/react.js')
          expect(savedFilename).to.equal(expectedFileName)
          savedFilename = writeFileStub.calls[1].args[0]
          expectedFileName = path.resolve(__dirname, 'fixtures-maps/dira/dira.1/dira.2/react.js.map')
          expect(savedFilename).to.equal(expectedFileName)

    describe 'When a js file saved , babelrc in path and flag disableWhenNoBabelrcFileInPath is set', ->
      it 'calls the transpiler', ->
        atom.project.setPaths([__dirname])
        config.babelSourcePath = 'fixtures'
        config.babelTranspilePath = 'fixtures'
        config.babelMapsPath = 'fixtures'
        config.createTranspiledCode = false
        config.disableWhenNoBabelrcFileInPath = true

        spyOn(lb, 'getConfig').andCallFake ->config
        lb.transpile(path.resolve(__dirname, 'fixtures/dira/dira.1/dira.2/good.js'))
        #may take a while for the transpiler to run and call home
        waitsFor ->
          notificationSpy.callCount
        runs ->
          expect(notificationSpy.callCount).to.equal(2)
          msg = notificationSpy.calls[0].args[0].message
          expect(msg).to.match(/^LB: Babel.*Transpiler Success/)
          msg = notificationSpy.calls[1].args[0].message
          expect(msg).to.match(/^LB: No transpiled output configured/)
          expect(writeFileStub.callCount).to.equal(0)

    describe 'When a js file saved , babelrc in not in path and flag disableWhenNoBabelrcFileInPath is set', ->
      it 'does nothing', ->
        atom.project.setPaths([__dirname])
        config.babelSourcePath = 'fixtures'
        config.babelTranspilePath = 'fixtures'
        config.babelMapsPath = 'fixtures'
        config.createTranspiledCode = false
        config.disableWhenNoBabelrcFileInPath = true

        spyOn(lb, 'getConfig').andCallFake ->config
        lb.transpile(path.resolve(__dirname, 'fixtures/dirb/good.js'))
        expect(notificationSpy.callCount).to.equal(0)
        expect(writeFileStub.callCount).to.equal(0)

    describe 'When a js file saved in a nested project', ->
      it 'creates a file in the correct location based upon .languagebabel', ->
        atom.project.setPaths([__dirname])
        config.allowLocalOverride = true

        spyOn(lb, 'getConfig').andCallFake -> config
        sourceFile = path.resolve(__dirname, 'fixtures/projectRoot/src/test.js')
        targetFile =  path.resolve(__dirname, 'fixtures/projectRoot/test.js')
        lb.transpile(sourceFile)
        waitsFor ->
          writeFileStub.callCount
        runs ->
          expect(writeFileName).to.equal(targetFile)

    describe 'When a directory is compiled', ->
      it 'transpiles the js,jsx,es,es6,babel files but ignores minified files', ->
        atom.project.setPaths([__dirname])
        config.allowLocalOverride = true

        spyOn(lb, 'getConfig').andCallFake -> config
        sourceDir = path.resolve(__dirname, 'fixtures/projectRoot/src/')
        lb.transpileDirectory({directory: sourceDir})
        waitsFor ->
          writeFileStub.callCount >= 5
        runs ->
          expect(writeFileStub.callCount).to.equal(5)
