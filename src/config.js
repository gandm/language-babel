module.exports = {
  allowLocalOverride: {
    description: "Allow .languagebabel files to overide the settings below. Useful for project based configurations.",
    type: "boolean",
    default: false,
    order: 30
  },

  transpileOnSave: {
    description: "Check source code validity on file save. Use \"Create Transpiled Code\" option below to save file.",
    type: "boolean",
    default: false,
    order: 40
  },

  createTranspiledCode: {
    description: "Save transpiled code to Babel Transpile Path below.",
    type: "boolean",
    default: false,
    order: 50
  },

  disableWhenNoBabelrcFileInPath: {
    description: "Suppress transpile when no .babelrc file is in source file path.",
    type: "boolean",
    default: true,
    order: 60
  },

  suppressTranspileOnSaveMessages: {
    description: "Suppress non-error notification messages on each save.",
    type: "boolean",
    default: true,
    order: 70
  },

  suppressSourcePathMessages: {
    description: "Suppress messages about file not being inside Babel Source Path.",
    type: "boolean",
    default: true,
    order: 75
  },

  createMap: {
    description: "Create separate map file.",
    type: "boolean",
    default: false,
    order: 80
  },

  babelMapsAddUrl: {
    description: "Append map file name to transpiled output if \"Create separate map file\" is set.",
    type: "boolean",
    default: true,
    order: 90
  },

  babelSourcePath: {
    description: "Babel Source Root based on Project root.",
    type: "string",
    default: "",
    order: 100
  },

  babelTranspilePath: {
    description: "Babel Transpile Root based on Project root.",
    type: "string",
    default: "",
    order: 120
  },

  babelMapsPath: {
    description: "Babel Maps Root based on Project root.",
    type: "string",
    default: "",
    order: 130
  },

  createTargetDirectories: {
    description: "Create transpile output target directories.",
    type: "boolean",
    default: true,
    order: 140
  },

  taggedTemplateGrammar: {
    title: "JavaScript Tagged Template Literal Grammar Extensions",
    description: "Enter a list of comma separated tagged template literals in the form tagname:scope.name.of.grammar",
    type: "array",
    default: [],
    items: {
      type: "string"
    }
  },

  autoIndentJSX: {
    title: "Auto Indent JSX",
    description: "Auto Indent JSX using default or eslintrc rules",
    type: "boolean",
    default: false,
    order: 160
  }
};
