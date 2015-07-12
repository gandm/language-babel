module.exports =
  transpileOnSave:
    type: 'boolean'
    default: true
    order: 10
  disableWhenNoBabelrcFileInPath:
    description: 'Suppress transpile when no .babelrc file is in source file path'
    type: 'boolean'
    default: false
    order: 11
  suppressTranspileOnSaveMessages:
    description: 'Suppress notification messages on each save'
    type: 'boolean'
    default: false
    order: 12
  createTranspiledCode:
    type: 'boolean'
    default: false
    order: 20
  createMap:
    type: 'boolean'
    default: false
    order: 30
  babelMapsAddUrl:
    type: 'boolean'
    default: true
    order: 40
  babelSourcePath:
    description: 'Babel Source Root based on Project root'
    type: 'string'
    default: ''
    order: 50
  suppressSourcePathMessages:
    description: 'Suppress messages about file not inside Babel Source Path'
    type: 'boolean'
    default: false
    order: 55
  babelTranspilePath:
    description: 'Babel Transpile Root based on Project root'
    type: 'string'
    default: ''
    order: 60
  babelMapsPath:
    description: 'Babel Maps Root based on Project root'
    type: 'string'
    default: ''
    order: 70
  createTargetDirectories:
    type: 'boolean'
    default: true
    order: 80
  babelStage:
    description: 'Stage 0 - Strawman
                  Stage 1 - Proposal
                  Stage 2 - Draft
                  Stage 3 - Candidate
                  Stage 4 - Finished'
    type: 'integer'
    default: 2
    minimum: 0
    maximium: 4
    order: 90
  externalHelpers:
    type: 'boolean'
    default: false
    order: 100
  moduleLoader:
    description: 'Module system used in output. The non-strict variants support a legacy CommonJS pattern but will not always work with standard ES6 modules'
    type: 'string'
    default: 'common'
    enum: ['amd', 'amdStrict', 'common', 'commonStrict', 'ignore', 'system', 'umd', 'umdStrict']
    order: 120
  blacklistTransformers:
    description: 'Comma seperated list of excluded transformers'
    type: 'array'
    default: []
    order: 130
    items:
      type: 'string'
  whitelistTransformers:
    description: 'Comma seperated list of transformers'
    type: 'array'
    default: []
    order: 140
    items:
      type: 'string'
  looseTransformers:
    description: 'Comma seperated list of "loose" transformers - or "all"'
    type: 'array'
    default: []
    order: 150
    items:
      type: 'string'
  optionalTransformers:
    description: 'Comma seperated list of optional transformers. You can use "runtime" here'
    type: 'array'
    default: []
    order: 160
    items:
      type: 'string'
