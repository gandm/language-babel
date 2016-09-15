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
    title: "JavaScript tagged template grammar extensions",
    description: "Enter a list of comma separated tagged template literals in the form tagname:scope.name.of.grammar",
    type: "array",
    default: ["Relay.QL:source.graphql", "gql:source.graphql"],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sT0FBUCxHQUFpQjtBQUNmLHNCQUFvQjtBQUNsQixpQkFBYSxvR0FESztBQUVsQixVQUFNLFNBRlk7QUFHbEIsYUFBUyxLQUhTO0FBSWxCLFdBQU87QUFKVyxHQURMOztBQVFmLG1CQUFpQjtBQUNmLGlCQUFhLG9HQURFO0FBRWYsVUFBTSxTQUZTO0FBR2YsYUFBUyxLQUhNO0FBSWYsV0FBTztBQUpRLEdBUkY7O0FBZWYsd0JBQXNCO0FBQ3BCLGlCQUFhLHFEQURPO0FBRXBCLFVBQU0sU0FGYztBQUdwQixhQUFTLEtBSFc7QUFJcEIsV0FBTztBQUphLEdBZlA7O0FBc0JmLGtDQUFnQztBQUM5QixpQkFBYSxrRUFEaUI7QUFFOUIsVUFBTSxTQUZ3QjtBQUc5QixhQUFTLElBSHFCO0FBSTlCLFdBQU87QUFKdUIsR0F0QmpCOztBQTZCZixtQ0FBaUM7QUFDL0IsaUJBQWEsd0RBRGtCO0FBRS9CLFVBQU0sU0FGeUI7QUFHL0IsYUFBUyxJQUhzQjtBQUkvQixXQUFPO0FBSndCLEdBN0JsQjs7QUFvQ2YsOEJBQTRCO0FBQzFCLGlCQUFhLGtFQURhO0FBRTFCLFVBQU0sU0FGb0I7QUFHMUIsYUFBUyxJQUhpQjtBQUkxQixXQUFPO0FBSm1CLEdBcENiOztBQTJDZixhQUFXO0FBQ1QsaUJBQWEsMkJBREo7QUFFVCxVQUFNLFNBRkc7QUFHVCxhQUFTLEtBSEE7QUFJVCxXQUFPO0FBSkUsR0EzQ0k7O0FBa0RmLG1CQUFpQjtBQUNmLGlCQUFhLG1GQURFO0FBRWYsVUFBTSxTQUZTO0FBR2YsYUFBUyxJQUhNO0FBSWYsV0FBTztBQUpRLEdBbERGOztBQXlEZixtQkFBaUI7QUFDZixpQkFBYSwwQ0FERTtBQUVmLFVBQU0sUUFGUztBQUdmLGFBQVMsRUFITTtBQUlmLFdBQU87QUFKUSxHQXpERjs7QUFnRWYsc0JBQW9CO0FBQ2xCLGlCQUFhLDZDQURLO0FBRWxCLFVBQU0sUUFGWTtBQUdsQixhQUFTLEVBSFM7QUFJbEIsV0FBTztBQUpXLEdBaEVMOztBQXVFZixpQkFBZTtBQUNiLGlCQUFhLHdDQURBO0FBRWIsVUFBTSxRQUZPO0FBR2IsYUFBUyxFQUhJO0FBSWIsV0FBTztBQUpNLEdBdkVBOztBQThFZiwyQkFBeUI7QUFDdkIsaUJBQWEsNkNBRFU7QUFFdkIsVUFBTSxTQUZpQjtBQUd2QixhQUFTLElBSGM7QUFJdkIsV0FBTztBQUpnQixHQTlFVjs7QUFxRmYsMEJBQXdCO0FBQ3RCLFdBQU8sb0RBRGU7QUFFdEIsaUJBQWEsb0dBRlM7QUFHdEIsVUFBTSxPQUhnQjtBQUl0QixhQUFTLENBQUMseUJBQUQsRUFBNEIsb0JBQTVCLENBSmE7QUFLdEIsV0FBTztBQUNMLFlBQU07QUFERDtBQUxlLEdBckZUOztBQStGZixpQkFBZTtBQUNiLFdBQU8saUJBRE07QUFFYixpQkFBYSxpREFGQTtBQUdiLFVBQU0sU0FITztBQUliLGFBQVMsS0FKSTtBQUtiLFdBQU87QUFMTTtBQS9GQSxDQUFqQiIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBhbGxvd0xvY2FsT3ZlcnJpZGU6IHtcclxuICAgIGRlc2NyaXB0aW9uOiBcIkFsbG93IC5sYW5ndWFnZWJhYmVsIGZpbGVzIHRvIG92ZXJpZGUgdGhlIHNldHRpbmdzIGJlbG93LiBVc2VmdWwgZm9yIHByb2plY3QgYmFzZWQgY29uZmlndXJhdGlvbnMuXCIsXHJcbiAgICB0eXBlOiBcImJvb2xlYW5cIixcclxuICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgb3JkZXI6IDMwXHJcbiAgfSxcclxuXHJcbiAgdHJhbnNwaWxlT25TYXZlOiB7XHJcbiAgICBkZXNjcmlwdGlvbjogXCJDaGVjayBzb3VyY2UgY29kZSB2YWxpZGl0eSBvbiBmaWxlIHNhdmUuIFVzZSBcXFwiQ3JlYXRlIFRyYW5zcGlsZWQgQ29kZVxcXCIgb3B0aW9uIGJlbG93IHRvIHNhdmUgZmlsZS5cIixcclxuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxyXG4gICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICBvcmRlcjogNDBcclxuICB9LFxyXG5cclxuICBjcmVhdGVUcmFuc3BpbGVkQ29kZToge1xyXG4gICAgZGVzY3JpcHRpb246IFwiU2F2ZSB0cmFuc3BpbGVkIGNvZGUgdG8gQmFiZWwgVHJhbnNwaWxlIFBhdGggYmVsb3cuXCIsXHJcbiAgICB0eXBlOiBcImJvb2xlYW5cIixcclxuICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgb3JkZXI6IDUwXHJcbiAgfSxcclxuXHJcbiAgZGlzYWJsZVdoZW5Ob0JhYmVscmNGaWxlSW5QYXRoOiB7XHJcbiAgICBkZXNjcmlwdGlvbjogXCJTdXBwcmVzcyB0cmFuc3BpbGUgd2hlbiBubyAuYmFiZWxyYyBmaWxlIGlzIGluIHNvdXJjZSBmaWxlIHBhdGguXCIsXHJcbiAgICB0eXBlOiBcImJvb2xlYW5cIixcclxuICAgIGRlZmF1bHQ6IHRydWUsXHJcbiAgICBvcmRlcjogNjBcclxuICB9LFxyXG5cclxuICBzdXBwcmVzc1RyYW5zcGlsZU9uU2F2ZU1lc3NhZ2VzOiB7XHJcbiAgICBkZXNjcmlwdGlvbjogXCJTdXBwcmVzcyBub24tZXJyb3Igbm90aWZpY2F0aW9uIG1lc3NhZ2VzIG9uIGVhY2ggc2F2ZS5cIixcclxuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxyXG4gICAgZGVmYXVsdDogdHJ1ZSxcclxuICAgIG9yZGVyOiA3MFxyXG4gIH0sXHJcblxyXG4gIHN1cHByZXNzU291cmNlUGF0aE1lc3NhZ2VzOiB7XHJcbiAgICBkZXNjcmlwdGlvbjogXCJTdXBwcmVzcyBtZXNzYWdlcyBhYm91dCBmaWxlIG5vdCBiZWluZyBpbnNpZGUgQmFiZWwgU291cmNlIFBhdGguXCIsXHJcbiAgICB0eXBlOiBcImJvb2xlYW5cIixcclxuICAgIGRlZmF1bHQ6IHRydWUsXHJcbiAgICBvcmRlcjogNzVcclxuICB9LFxyXG5cclxuICBjcmVhdGVNYXA6IHtcclxuICAgIGRlc2NyaXB0aW9uOiBcIkNyZWF0ZSBzZXBhcmF0ZSBtYXAgZmlsZS5cIixcclxuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxyXG4gICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICBvcmRlcjogODBcclxuICB9LFxyXG5cclxuICBiYWJlbE1hcHNBZGRVcmw6IHtcclxuICAgIGRlc2NyaXB0aW9uOiBcIkFwcGVuZCBtYXAgZmlsZSBuYW1lIHRvIHRyYW5zcGlsZWQgb3V0cHV0IGlmIFxcXCJDcmVhdGUgc2VwYXJhdGUgbWFwIGZpbGVcXFwiIGlzIHNldC5cIixcclxuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxyXG4gICAgZGVmYXVsdDogdHJ1ZSxcclxuICAgIG9yZGVyOiA5MFxyXG4gIH0sXHJcblxyXG4gIGJhYmVsU291cmNlUGF0aDoge1xyXG4gICAgZGVzY3JpcHRpb246IFwiQmFiZWwgU291cmNlIFJvb3QgYmFzZWQgb24gUHJvamVjdCByb290LlwiLFxyXG4gICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgIGRlZmF1bHQ6IFwiXCIsXHJcbiAgICBvcmRlcjogMTAwXHJcbiAgfSxcclxuXHJcbiAgYmFiZWxUcmFuc3BpbGVQYXRoOiB7XHJcbiAgICBkZXNjcmlwdGlvbjogXCJCYWJlbCBUcmFuc3BpbGUgUm9vdCBiYXNlZCBvbiBQcm9qZWN0IHJvb3QuXCIsXHJcbiAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgZGVmYXVsdDogXCJcIixcclxuICAgIG9yZGVyOiAxMjBcclxuICB9LFxyXG5cclxuICBiYWJlbE1hcHNQYXRoOiB7XHJcbiAgICBkZXNjcmlwdGlvbjogXCJCYWJlbCBNYXBzIFJvb3QgYmFzZWQgb24gUHJvamVjdCByb290LlwiLFxyXG4gICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgIGRlZmF1bHQ6IFwiXCIsXHJcbiAgICBvcmRlcjogMTMwXHJcbiAgfSxcclxuXHJcbiAgY3JlYXRlVGFyZ2V0RGlyZWN0b3JpZXM6IHtcclxuICAgIGRlc2NyaXB0aW9uOiBcIkNyZWF0ZSB0cmFuc3BpbGUgb3V0cHV0IHRhcmdldCBkaXJlY3Rvcmllcy5cIixcclxuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxyXG4gICAgZGVmYXVsdDogdHJ1ZSxcclxuICAgIG9yZGVyOiAxNDBcclxuICB9LFxyXG5cclxuICB0YWdnZWRlVGVtcGxhdGVMaXRlcmFsOiB7XHJcbiAgICB0aXRsZTogXCJKYXZhU2NyaXB0IHRhZyB0ZW1wbGF0ZSBsaXRlcmFsIGdyYW1tYXIgZXh0ZW5zaW9uc1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiRW50ZXIgYSBsaXN0IG9mIGNvbW1hIHNlcGFyYXRlZCB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbHMgaW4gdGhlIGZvcm0gdGFnbmFtZTpzY29wZS5uYW1lLm9mLmdyYW1tYXJcIixcclxuICAgIHR5cGU6IFwiYXJyYXlcIixcclxuICAgIGRlZmF1bHQ6IFtcIlJlbGF5LlFMOnNvdXJjZS5ncmFwaHFsXCIsIFwiZ3FsOnNvdXJjZS5ncmFwaHFsXCJdLFxyXG4gICAgaXRlbXM6IHtcclxuICAgICAgdHlwZTogXCJzdHJpbmdcIlxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGF1dG9JbmRlbnRKU1g6IHtcclxuICAgIHRpdGxlOiBcIkF1dG8gSW5kZW50IEpTWFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQXV0byBJbmRlbnQgSlNYIHVzaW5nIGRlZmF1bHQgb3IgZXNsaW50cmMgcnVsZXNcIixcclxuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxyXG4gICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICBvcmRlcjogMTYwXHJcbiAgfVxyXG59O1xyXG4iXX0=
