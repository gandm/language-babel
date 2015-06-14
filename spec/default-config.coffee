# these are defaults for the spec tests not necessarily the package defaults
module.exports =
  # package control settings
  babelMapsAddUrl: true
  babelMapsPath: ''
  babelSourcePath: ''
  babelStage: 2
  babelTranspilePath: ''
  createMap: false
  createTargetDirectories: false
  createTranspiledCode: true
  supressSourcePathMessages: false
  supressTranspileOnSaveMessages: false
  transpileOnSave: true
  # babel options in package settings
  blacklistTransformers: []
  externalHelpers: false
  looseTransformers: []
  moduleLoader: 'common'
  optionalTransformers: []
  whitelistTransformers: []
