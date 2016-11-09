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
    },
    order: 150
  },

  autoIndentJSX: {
    title: "Auto Indent JSX",
    description: "Auto Indent JSX using default or eslintrc rules",
    type: "boolean",
    default: false,
    order: 160
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiYWxsb3dMb2NhbE92ZXJyaWRlIiwiZGVzY3JpcHRpb24iLCJ0eXBlIiwiZGVmYXVsdCIsIm9yZGVyIiwidHJhbnNwaWxlT25TYXZlIiwiY3JlYXRlVHJhbnNwaWxlZENvZGUiLCJkaXNhYmxlV2hlbk5vQmFiZWxyY0ZpbGVJblBhdGgiLCJzdXBwcmVzc1RyYW5zcGlsZU9uU2F2ZU1lc3NhZ2VzIiwic3VwcHJlc3NTb3VyY2VQYXRoTWVzc2FnZXMiLCJjcmVhdGVNYXAiLCJiYWJlbE1hcHNBZGRVcmwiLCJiYWJlbFNvdXJjZVBhdGgiLCJiYWJlbFRyYW5zcGlsZVBhdGgiLCJiYWJlbE1hcHNQYXRoIiwiY3JlYXRlVGFyZ2V0RGlyZWN0b3JpZXMiLCJ0YWdnZWRUZW1wbGF0ZUdyYW1tYXIiLCJ0aXRsZSIsIml0ZW1zIiwiYXV0b0luZGVudEpTWCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyxzQkFBb0I7QUFDbEJDLGlCQUFhLG9HQURLO0FBRWxCQyxVQUFNLFNBRlk7QUFHbEJDLGFBQVMsS0FIUztBQUlsQkMsV0FBTztBQUpXLEdBREw7O0FBUWZDLG1CQUFpQjtBQUNmSixpQkFBYSxvR0FERTtBQUVmQyxVQUFNLFNBRlM7QUFHZkMsYUFBUyxLQUhNO0FBSWZDLFdBQU87QUFKUSxHQVJGOztBQWVmRSx3QkFBc0I7QUFDcEJMLGlCQUFhLHFEQURPO0FBRXBCQyxVQUFNLFNBRmM7QUFHcEJDLGFBQVMsS0FIVztBQUlwQkMsV0FBTztBQUphLEdBZlA7O0FBc0JmRyxrQ0FBZ0M7QUFDOUJOLGlCQUFhLGtFQURpQjtBQUU5QkMsVUFBTSxTQUZ3QjtBQUc5QkMsYUFBUyxJQUhxQjtBQUk5QkMsV0FBTztBQUp1QixHQXRCakI7O0FBNkJmSSxtQ0FBaUM7QUFDL0JQLGlCQUFhLHdEQURrQjtBQUUvQkMsVUFBTSxTQUZ5QjtBQUcvQkMsYUFBUyxJQUhzQjtBQUkvQkMsV0FBTztBQUp3QixHQTdCbEI7O0FBb0NmSyw4QkFBNEI7QUFDMUJSLGlCQUFhLGtFQURhO0FBRTFCQyxVQUFNLFNBRm9CO0FBRzFCQyxhQUFTLElBSGlCO0FBSTFCQyxXQUFPO0FBSm1CLEdBcENiOztBQTJDZk0sYUFBVztBQUNUVCxpQkFBYSwyQkFESjtBQUVUQyxVQUFNLFNBRkc7QUFHVEMsYUFBUyxLQUhBO0FBSVRDLFdBQU87QUFKRSxHQTNDSTs7QUFrRGZPLG1CQUFpQjtBQUNmVixpQkFBYSxtRkFERTtBQUVmQyxVQUFNLFNBRlM7QUFHZkMsYUFBUyxJQUhNO0FBSWZDLFdBQU87QUFKUSxHQWxERjs7QUF5RGZRLG1CQUFpQjtBQUNmWCxpQkFBYSwwQ0FERTtBQUVmQyxVQUFNLFFBRlM7QUFHZkMsYUFBUyxFQUhNO0FBSWZDLFdBQU87QUFKUSxHQXpERjs7QUFnRWZTLHNCQUFvQjtBQUNsQlosaUJBQWEsNkNBREs7QUFFbEJDLFVBQU0sUUFGWTtBQUdsQkMsYUFBUyxFQUhTO0FBSWxCQyxXQUFPO0FBSlcsR0FoRUw7O0FBdUVmVSxpQkFBZTtBQUNiYixpQkFBYSx3Q0FEQTtBQUViQyxVQUFNLFFBRk87QUFHYkMsYUFBUyxFQUhJO0FBSWJDLFdBQU87QUFKTSxHQXZFQTs7QUE4RWZXLDJCQUF5QjtBQUN2QmQsaUJBQWEsNkNBRFU7QUFFdkJDLFVBQU0sU0FGaUI7QUFHdkJDLGFBQVMsSUFIYztBQUl2QkMsV0FBTztBQUpnQixHQTlFVjs7QUFxRmZZLHlCQUF1QjtBQUNyQkMsV0FBTyx1REFEYztBQUVyQmhCLGlCQUFhLG9HQUZRO0FBR3JCQyxVQUFNLE9BSGU7QUFJckJDLGFBQVMsRUFKWTtBQUtyQmUsV0FBTztBQUNMaEIsWUFBTTtBQURELEtBTGM7QUFRckJFLFdBQU87QUFSYyxHQXJGUjs7QUFnR2ZlLGlCQUFlO0FBQ2JGLFdBQU8saUJBRE07QUFFYmhCLGlCQUFhLGlEQUZBO0FBR2JDLFVBQU0sU0FITztBQUliQyxhQUFTLEtBSkk7QUFLYkMsV0FBTztBQUxNO0FBaEdBLENBQWpCIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGFsbG93TG9jYWxPdmVycmlkZToge1xyXG4gICAgZGVzY3JpcHRpb246IFwiQWxsb3cgLmxhbmd1YWdlYmFiZWwgZmlsZXMgdG8gb3ZlcmlkZSB0aGUgc2V0dGluZ3MgYmVsb3cuIFVzZWZ1bCBmb3IgcHJvamVjdCBiYXNlZCBjb25maWd1cmF0aW9ucy5cIixcclxuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxyXG4gICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICBvcmRlcjogMzBcclxuICB9LFxyXG5cclxuICB0cmFuc3BpbGVPblNhdmU6IHtcclxuICAgIGRlc2NyaXB0aW9uOiBcIkNoZWNrIHNvdXJjZSBjb2RlIHZhbGlkaXR5IG9uIGZpbGUgc2F2ZS4gVXNlIFxcXCJDcmVhdGUgVHJhbnNwaWxlZCBDb2RlXFxcIiBvcHRpb24gYmVsb3cgdG8gc2F2ZSBmaWxlLlwiLFxyXG4gICAgdHlwZTogXCJib29sZWFuXCIsXHJcbiAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgIG9yZGVyOiA0MFxyXG4gIH0sXHJcblxyXG4gIGNyZWF0ZVRyYW5zcGlsZWRDb2RlOiB7XHJcbiAgICBkZXNjcmlwdGlvbjogXCJTYXZlIHRyYW5zcGlsZWQgY29kZSB0byBCYWJlbCBUcmFuc3BpbGUgUGF0aCBiZWxvdy5cIixcclxuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxyXG4gICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICBvcmRlcjogNTBcclxuICB9LFxyXG5cclxuICBkaXNhYmxlV2hlbk5vQmFiZWxyY0ZpbGVJblBhdGg6IHtcclxuICAgIGRlc2NyaXB0aW9uOiBcIlN1cHByZXNzIHRyYW5zcGlsZSB3aGVuIG5vIC5iYWJlbHJjIGZpbGUgaXMgaW4gc291cmNlIGZpbGUgcGF0aC5cIixcclxuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxyXG4gICAgZGVmYXVsdDogdHJ1ZSxcclxuICAgIG9yZGVyOiA2MFxyXG4gIH0sXHJcblxyXG4gIHN1cHByZXNzVHJhbnNwaWxlT25TYXZlTWVzc2FnZXM6IHtcclxuICAgIGRlc2NyaXB0aW9uOiBcIlN1cHByZXNzIG5vbi1lcnJvciBub3RpZmljYXRpb24gbWVzc2FnZXMgb24gZWFjaCBzYXZlLlwiLFxyXG4gICAgdHlwZTogXCJib29sZWFuXCIsXHJcbiAgICBkZWZhdWx0OiB0cnVlLFxyXG4gICAgb3JkZXI6IDcwXHJcbiAgfSxcclxuXHJcbiAgc3VwcHJlc3NTb3VyY2VQYXRoTWVzc2FnZXM6IHtcclxuICAgIGRlc2NyaXB0aW9uOiBcIlN1cHByZXNzIG1lc3NhZ2VzIGFib3V0IGZpbGUgbm90IGJlaW5nIGluc2lkZSBCYWJlbCBTb3VyY2UgUGF0aC5cIixcclxuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxyXG4gICAgZGVmYXVsdDogdHJ1ZSxcclxuICAgIG9yZGVyOiA3NVxyXG4gIH0sXHJcblxyXG4gIGNyZWF0ZU1hcDoge1xyXG4gICAgZGVzY3JpcHRpb246IFwiQ3JlYXRlIHNlcGFyYXRlIG1hcCBmaWxlLlwiLFxyXG4gICAgdHlwZTogXCJib29sZWFuXCIsXHJcbiAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgIG9yZGVyOiA4MFxyXG4gIH0sXHJcblxyXG4gIGJhYmVsTWFwc0FkZFVybDoge1xyXG4gICAgZGVzY3JpcHRpb246IFwiQXBwZW5kIG1hcCBmaWxlIG5hbWUgdG8gdHJhbnNwaWxlZCBvdXRwdXQgaWYgXFxcIkNyZWF0ZSBzZXBhcmF0ZSBtYXAgZmlsZVxcXCIgaXMgc2V0LlwiLFxyXG4gICAgdHlwZTogXCJib29sZWFuXCIsXHJcbiAgICBkZWZhdWx0OiB0cnVlLFxyXG4gICAgb3JkZXI6IDkwXHJcbiAgfSxcclxuXHJcbiAgYmFiZWxTb3VyY2VQYXRoOiB7XHJcbiAgICBkZXNjcmlwdGlvbjogXCJCYWJlbCBTb3VyY2UgUm9vdCBiYXNlZCBvbiBQcm9qZWN0IHJvb3QuXCIsXHJcbiAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgZGVmYXVsdDogXCJcIixcclxuICAgIG9yZGVyOiAxMDBcclxuICB9LFxyXG5cclxuICBiYWJlbFRyYW5zcGlsZVBhdGg6IHtcclxuICAgIGRlc2NyaXB0aW9uOiBcIkJhYmVsIFRyYW5zcGlsZSBSb290IGJhc2VkIG9uIFByb2plY3Qgcm9vdC5cIixcclxuICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICBkZWZhdWx0OiBcIlwiLFxyXG4gICAgb3JkZXI6IDEyMFxyXG4gIH0sXHJcblxyXG4gIGJhYmVsTWFwc1BhdGg6IHtcclxuICAgIGRlc2NyaXB0aW9uOiBcIkJhYmVsIE1hcHMgUm9vdCBiYXNlZCBvbiBQcm9qZWN0IHJvb3QuXCIsXHJcbiAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgZGVmYXVsdDogXCJcIixcclxuICAgIG9yZGVyOiAxMzBcclxuICB9LFxyXG5cclxuICBjcmVhdGVUYXJnZXREaXJlY3Rvcmllczoge1xyXG4gICAgZGVzY3JpcHRpb246IFwiQ3JlYXRlIHRyYW5zcGlsZSBvdXRwdXQgdGFyZ2V0IGRpcmVjdG9yaWVzLlwiLFxyXG4gICAgdHlwZTogXCJib29sZWFuXCIsXHJcbiAgICBkZWZhdWx0OiB0cnVlLFxyXG4gICAgb3JkZXI6IDE0MFxyXG4gIH0sXHJcblxyXG4gIHRhZ2dlZFRlbXBsYXRlR3JhbW1hcjoge1xyXG4gICAgdGl0bGU6IFwiSmF2YVNjcmlwdCBUYWdnZWQgVGVtcGxhdGUgTGl0ZXJhbCBHcmFtbWFyIEV4dGVuc2lvbnNcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkVudGVyIGEgbGlzdCBvZiBjb21tYSBzZXBhcmF0ZWQgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxzIGluIHRoZSBmb3JtIHRhZ25hbWU6c2NvcGUubmFtZS5vZi5ncmFtbWFyXCIsXHJcbiAgICB0eXBlOiBcImFycmF5XCIsXHJcbiAgICBkZWZhdWx0OiBbXSxcclxuICAgIGl0ZW1zOiB7XHJcbiAgICAgIHR5cGU6IFwic3RyaW5nXCJcclxuICAgIH0sXHJcbiAgICBvcmRlcjogMTUwXHJcbiAgfSxcclxuXHJcbiAgYXV0b0luZGVudEpTWDoge1xyXG4gICAgdGl0bGU6IFwiQXV0byBJbmRlbnQgSlNYXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBdXRvIEluZGVudCBKU1ggdXNpbmcgZGVmYXVsdCBvciBlc2xpbnRyYyBydWxlc1wiLFxyXG4gICAgdHlwZTogXCJib29sZWFuXCIsXHJcbiAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgIG9yZGVyOiAxNjBcclxuICB9XHJcbn07XHJcbiJdfQ==