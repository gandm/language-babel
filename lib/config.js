"use strict";

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sT0FBUCxHQUFpQjtBQUNmLHNCQUFvQjtBQUNsQixpQkFBYSxvR0FESztBQUVsQixVQUFNLFNBRlk7QUFHbEIsYUFBUyxLQUhTO0FBSWxCLFdBQU87QUFKVyxHQURMOztBQVFmLG1CQUFpQjtBQUNmLGlCQUFhLG9HQURFO0FBRWYsVUFBTSxTQUZTO0FBR2YsYUFBUyxLQUhNO0FBSWYsV0FBTztBQUpRLEdBUkY7O0FBZWYsd0JBQXNCO0FBQ3BCLGlCQUFhLHFEQURPO0FBRXBCLFVBQU0sU0FGYztBQUdwQixhQUFTLEtBSFc7QUFJcEIsV0FBTztBQUphLEdBZlA7O0FBc0JmLGtDQUFnQztBQUM5QixpQkFBYSxrRUFEaUI7QUFFOUIsVUFBTSxTQUZ3QjtBQUc5QixhQUFTLElBSHFCO0FBSTlCLFdBQU87QUFKdUIsR0F0QmpCOztBQTZCZixtQ0FBaUM7QUFDL0IsaUJBQWEsd0RBRGtCO0FBRS9CLFVBQU0sU0FGeUI7QUFHL0IsYUFBUyxJQUhzQjtBQUkvQixXQUFPO0FBSndCLEdBN0JsQjs7QUFvQ2YsOEJBQTRCO0FBQzFCLGlCQUFhLGtFQURhO0FBRTFCLFVBQU0sU0FGb0I7QUFHMUIsYUFBUyxJQUhpQjtBQUkxQixXQUFPO0FBSm1CLEdBcENiOztBQTJDZixhQUFXO0FBQ1QsaUJBQWEsMkJBREo7QUFFVCxVQUFNLFNBRkc7QUFHVCxhQUFTLEtBSEE7QUFJVCxXQUFPO0FBSkUsR0EzQ0k7O0FBa0RmLG1CQUFpQjtBQUNmLGlCQUFhLG1GQURFO0FBRWYsVUFBTSxTQUZTO0FBR2YsYUFBUyxJQUhNO0FBSWYsV0FBTztBQUpRLEdBbERGOztBQXlEZixtQkFBaUI7QUFDZixpQkFBYSwwQ0FERTtBQUVmLFVBQU0sUUFGUztBQUdmLGFBQVMsRUFITTtBQUlmLFdBQU87QUFKUSxHQXpERjs7QUFnRWYsc0JBQW9CO0FBQ2xCLGlCQUFhLDZDQURLO0FBRWxCLFVBQU0sUUFGWTtBQUdsQixhQUFTLEVBSFM7QUFJbEIsV0FBTztBQUpXLEdBaEVMOztBQXVFZixpQkFBZTtBQUNiLGlCQUFhLHdDQURBO0FBRWIsVUFBTSxRQUZPO0FBR2IsYUFBUyxFQUhJO0FBSWIsV0FBTztBQUpNLEdBdkVBOztBQThFZiwyQkFBeUI7QUFDdkIsaUJBQWEsNkNBRFU7QUFFdkIsVUFBTSxTQUZpQjtBQUd2QixhQUFTLElBSGM7QUFJdkIsV0FBTztBQUpnQixHQTlFVjs7QUFxRmYseUJBQXVCO0FBQ3JCLFdBQU8sdURBRGM7QUFFckIsaUJBQWEsb0dBRlE7QUFHckIsVUFBTSxPQUhlO0FBSXJCLGFBQVMsRUFKWTtBQUtyQixXQUFPO0FBQ0wsWUFBTTtBQUREO0FBTGMsR0FyRlI7O0FBK0ZmLGlCQUFlO0FBQ2IsV0FBTyxpQkFETTtBQUViLGlCQUFhLGlEQUZBO0FBR2IsVUFBTSxTQUhPO0FBSWIsYUFBUyxLQUpJO0FBS2IsV0FBTztBQUxNO0FBL0ZBLENBQWpCIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGFsbG93TG9jYWxPdmVycmlkZToge1xyXG4gICAgZGVzY3JpcHRpb246IFwiQWxsb3cgLmxhbmd1YWdlYmFiZWwgZmlsZXMgdG8gb3ZlcmlkZSB0aGUgc2V0dGluZ3MgYmVsb3cuIFVzZWZ1bCBmb3IgcHJvamVjdCBiYXNlZCBjb25maWd1cmF0aW9ucy5cIixcclxuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxyXG4gICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICBvcmRlcjogMzBcclxuICB9LFxyXG5cclxuICB0cmFuc3BpbGVPblNhdmU6IHtcclxuICAgIGRlc2NyaXB0aW9uOiBcIkNoZWNrIHNvdXJjZSBjb2RlIHZhbGlkaXR5IG9uIGZpbGUgc2F2ZS4gVXNlIFxcXCJDcmVhdGUgVHJhbnNwaWxlZCBDb2RlXFxcIiBvcHRpb24gYmVsb3cgdG8gc2F2ZSBmaWxlLlwiLFxyXG4gICAgdHlwZTogXCJib29sZWFuXCIsXHJcbiAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgIG9yZGVyOiA0MFxyXG4gIH0sXHJcblxyXG4gIGNyZWF0ZVRyYW5zcGlsZWRDb2RlOiB7XHJcbiAgICBkZXNjcmlwdGlvbjogXCJTYXZlIHRyYW5zcGlsZWQgY29kZSB0byBCYWJlbCBUcmFuc3BpbGUgUGF0aCBiZWxvdy5cIixcclxuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxyXG4gICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICBvcmRlcjogNTBcclxuICB9LFxyXG5cclxuICBkaXNhYmxlV2hlbk5vQmFiZWxyY0ZpbGVJblBhdGg6IHtcclxuICAgIGRlc2NyaXB0aW9uOiBcIlN1cHByZXNzIHRyYW5zcGlsZSB3aGVuIG5vIC5iYWJlbHJjIGZpbGUgaXMgaW4gc291cmNlIGZpbGUgcGF0aC5cIixcclxuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxyXG4gICAgZGVmYXVsdDogdHJ1ZSxcclxuICAgIG9yZGVyOiA2MFxyXG4gIH0sXHJcblxyXG4gIHN1cHByZXNzVHJhbnNwaWxlT25TYXZlTWVzc2FnZXM6IHtcclxuICAgIGRlc2NyaXB0aW9uOiBcIlN1cHByZXNzIG5vbi1lcnJvciBub3RpZmljYXRpb24gbWVzc2FnZXMgb24gZWFjaCBzYXZlLlwiLFxyXG4gICAgdHlwZTogXCJib29sZWFuXCIsXHJcbiAgICBkZWZhdWx0OiB0cnVlLFxyXG4gICAgb3JkZXI6IDcwXHJcbiAgfSxcclxuXHJcbiAgc3VwcHJlc3NTb3VyY2VQYXRoTWVzc2FnZXM6IHtcclxuICAgIGRlc2NyaXB0aW9uOiBcIlN1cHByZXNzIG1lc3NhZ2VzIGFib3V0IGZpbGUgbm90IGJlaW5nIGluc2lkZSBCYWJlbCBTb3VyY2UgUGF0aC5cIixcclxuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxyXG4gICAgZGVmYXVsdDogdHJ1ZSxcclxuICAgIG9yZGVyOiA3NVxyXG4gIH0sXHJcblxyXG4gIGNyZWF0ZU1hcDoge1xyXG4gICAgZGVzY3JpcHRpb246IFwiQ3JlYXRlIHNlcGFyYXRlIG1hcCBmaWxlLlwiLFxyXG4gICAgdHlwZTogXCJib29sZWFuXCIsXHJcbiAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgIG9yZGVyOiA4MFxyXG4gIH0sXHJcblxyXG4gIGJhYmVsTWFwc0FkZFVybDoge1xyXG4gICAgZGVzY3JpcHRpb246IFwiQXBwZW5kIG1hcCBmaWxlIG5hbWUgdG8gdHJhbnNwaWxlZCBvdXRwdXQgaWYgXFxcIkNyZWF0ZSBzZXBhcmF0ZSBtYXAgZmlsZVxcXCIgaXMgc2V0LlwiLFxyXG4gICAgdHlwZTogXCJib29sZWFuXCIsXHJcbiAgICBkZWZhdWx0OiB0cnVlLFxyXG4gICAgb3JkZXI6IDkwXHJcbiAgfSxcclxuXHJcbiAgYmFiZWxTb3VyY2VQYXRoOiB7XHJcbiAgICBkZXNjcmlwdGlvbjogXCJCYWJlbCBTb3VyY2UgUm9vdCBiYXNlZCBvbiBQcm9qZWN0IHJvb3QuXCIsXHJcbiAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgZGVmYXVsdDogXCJcIixcclxuICAgIG9yZGVyOiAxMDBcclxuICB9LFxyXG5cclxuICBiYWJlbFRyYW5zcGlsZVBhdGg6IHtcclxuICAgIGRlc2NyaXB0aW9uOiBcIkJhYmVsIFRyYW5zcGlsZSBSb290IGJhc2VkIG9uIFByb2plY3Qgcm9vdC5cIixcclxuICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICBkZWZhdWx0OiBcIlwiLFxyXG4gICAgb3JkZXI6IDEyMFxyXG4gIH0sXHJcblxyXG4gIGJhYmVsTWFwc1BhdGg6IHtcclxuICAgIGRlc2NyaXB0aW9uOiBcIkJhYmVsIE1hcHMgUm9vdCBiYXNlZCBvbiBQcm9qZWN0IHJvb3QuXCIsXHJcbiAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgZGVmYXVsdDogXCJcIixcclxuICAgIG9yZGVyOiAxMzBcclxuICB9LFxyXG5cclxuICBjcmVhdGVUYXJnZXREaXJlY3Rvcmllczoge1xyXG4gICAgZGVzY3JpcHRpb246IFwiQ3JlYXRlIHRyYW5zcGlsZSBvdXRwdXQgdGFyZ2V0IGRpcmVjdG9yaWVzLlwiLFxyXG4gICAgdHlwZTogXCJib29sZWFuXCIsXHJcbiAgICBkZWZhdWx0OiB0cnVlLFxyXG4gICAgb3JkZXI6IDE0MFxyXG4gIH0sXHJcblxyXG4gIHRhZ2dlZFRlbXBsYXRlR3JhbW1hcjoge1xyXG4gICAgdGl0bGU6IFwiSmF2YVNjcmlwdCBUYWdnZWQgVGVtcGxhdGUgTGl0ZXJhbCBHcmFtbWFyIEV4dGVuc2lvbnNcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkVudGVyIGEgbGlzdCBvZiBjb21tYSBzZXBhcmF0ZWQgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxzIGluIHRoZSBmb3JtIHRhZ25hbWU6c2NvcGUubmFtZS5vZi5ncmFtbWFyXCIsXHJcbiAgICB0eXBlOiBcImFycmF5XCIsXHJcbiAgICBkZWZhdWx0OiBbXSxcclxuICAgIGl0ZW1zOiB7XHJcbiAgICAgIHR5cGU6IFwic3RyaW5nXCJcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhdXRvSW5kZW50SlNYOiB7XHJcbiAgICB0aXRsZTogXCJBdXRvIEluZGVudCBKU1hcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkF1dG8gSW5kZW50IEpTWCB1c2luZyBkZWZhdWx0IG9yIGVzbGludHJjIHJ1bGVzXCIsXHJcbiAgICB0eXBlOiBcImJvb2xlYW5cIixcclxuICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgb3JkZXI6IDE2MFxyXG4gIH1cclxufTtcclxuIl19