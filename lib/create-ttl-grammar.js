'use strict';

let crypto = require('crypto');
let fs = require('fs-plus');
let path = require('path');
let CompositeDisposable = require('atom').CompositeDisposable;

// This Class is repsonsible for creating a new Tagged Template grammar
// on detection of a changed Tagged Template Configuration in the package settings
module.exports = class CreateTtlGrammar {

  constructor() {
    this.disposable = new CompositeDisposable();
    this.observeTtlConfigCreated = false;
  }

  destroy() {
    this.disposable.dispose();
  }

  // create a new tagged template grammar file
  createTtlGrammarFile(ttlFileName) {
    var ttlFilenameAbsoulte;
    return ttlFilenameAbsoulte = this.grammarFileAbsolute()(ttlFileName);
  }

  // current tagged template filename based on a SHA256
  generateTtlGrammarFilename() {
    return "ttl-" + this.generateTtlSHA256();
  }

  // get full path to the language-babel grammar file dir
  getGrammarPath() {
    return path.normalize(path.resolve(atom.packages.loadedPackages["language-babel"].path, "./grammars"));
  }

  // get an array of all language-babel grammar files
  getGrammarFiles() {
    return new Promise((resolve, reject) => {
      fs.readdir(this.getGrammarPath(), (err, data) => {
        if (err) reject(err);else {
          resolve(data);
        }
      });
    });
  }

  // read configurations for tagged templates
  getTtlConfig() {
    return atom.config.get("language-babel").taggedTemplateGrammar;
  }

  // get an array of grammar tagged template extension files
  getTtlGrammarFiles() {
    var regex = /ttl-/;
    return this.getGrammarFiles().then(dirFiles => dirFiles.filter(function (filename) {
      return regex.test(filename);
    }));
  }

  // generate a SHA256 for the tagged template grammar filenames based on the tagged template config
  generateTtlSHA256() {
    var hash = crypto.createHash("sha256");
    hash.update(this.getTtlConfig().toString());
    return hash.digest("hex");
  }

  // does a ttl filename exist and is writable
  grammarFileExists(ttlFilename) {
    return new Promise((resolve, reject) => {
      fs.access(this.grammarFileAbsolute(ttlFilename), fs.F_OK, err => {
        resolve(!!!err);
      });
    });
  }

  // get a fully qualified filename
  grammarFileAbsolute(ttlFilename) {
    return path.resolve(this.getGrammarPath(), ttlFilename);
  }

  // observe tagged template configuration and act
  observeTtlConfig() {
    if (observeTtlConfigCreated) {
      console.log("observed");
      return;
      var ttlFilename = this.generateTtlGrammarFilename();

      if (!this.grammarFileExists(ttlFilename)) {
        return;
      }

      this.removeTtlLanguageFiles(this.getTtlGrammarFiles());
      return this.createTtlGrammarFile(ttlFilename);
    } else {
      // look for changes in tagged template handlers
      observeTtlConfigCreated = true;
      this.disposable.add(atom.config.observe("language-babel:taggedeTemplateLiteral", this.observeTtlConfig.bind(this)));
    }
  }

  // remove all language files in tagged template GrammarFiles array
  removeTtlLanguageFiles(ttlGrammarFiles) {
    for (var ttlGrammarFile of ttlGrammarFiles) {
      var ttlGrammarFileAbsoulte = this.grammarFileAbsolute(ttlGrammarFile);

      if (this.grammarFileExists(ttlGrammarFileAbsoulte)) {
        fs.unlinkSync(ttlGrammarFileAbsoulte);
      }
    }
  }

};

let ttlGrammarHeader = `
{
  "name": "Tag Extensions for Babel",
  "scopeName": "source.language-babel.ttl.extensions",
  "fileTypes": [],
  "patterns": [
    {
      "comment": "GraphQL ( Relay.QL ) supprt. Use two forms of scopes! fixes some themes",
      "name": "string.quasi.js",
      "contentName": "string.quoted.template.graphql.js",
      "begin": "\\\\s*+(?:((Relay)(.)(QL))|(gql))\\\\s*((\`))",
      "beginCaptures": {
        "2": { "name": "variable.other.class.js" },
        "3": { "name": "keyword.operator.accessor.js" },
        "4": { "name": "entity.name.tag.grapahql.js" },
        "5": { "name": "entity.name.tag.grapahql.js" },
        "6": { "name": "string.quoted.template.js" },
        "7": { "name": "punctuation.definition.quasi.begin.js" }
      },
      "end": "\\\\s*(?<!\\\\\\\\)((\`))",
      "endCaptures": {
        "1": { "name": "punctuation.definition.quasi.end.js" },
        "2": { "name": "string.quoted.template.graphql.js" }
      },
      "patterns": [
        {
          "name": "entity.quasi.element.js",
          "begin": "(?<!\\\\\\\\)\\s*(\\\\\${)",
          "end": "\\\\s*}",
          "beginCaptures": {
            "1": { "name": "punctuation.quasi.element.begin.js" }
          },
          "endCaptures": {
            "0": { "name": "punctuation.quasi.element.end.js" }
          },
          "patterns": [
            { "include": "source.js.jsx" }
          ]
        },
        { "include": "source.graphql" }
      ]
    }
  ]
}
`;
//# sourceMappingURL=data:application/json;base64,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Q0FBUDtBQUNELEtBWEQsTUFZTzs7QUFFTCxnQ0FBMEIsSUFBMUI7QUFDQSxXQUFLLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBb0IsS0FBSyxNQUFMLENBQVksT0FBWixDQUFvQix1Q0FBcEIsRUFBNkQsS0FBSyxnQkFBTCxDQUFzQixJQUF0QixDQUEyQixJQUEzQixDQUE3RCxDQUFwQjtBQUNEO0FBQ0Y7OztBQUdELHlCQUF1QixlQUF2QixFQUF3QztBQUN0QyxTQUFLLElBQUksY0FBVCxJQUEyQixlQUEzQixFQUE0QztBQUMxQyxVQUFJLHlCQUF5QixLQUFLLG1CQUFMLENBQXlCLGNBQXpCLENBQTdCOztBQUVBLFVBQUksS0FBSyxpQkFBTCxDQUF1QixzQkFBdkIsQ0FBSixFQUFvRDtBQUNsRCxXQUFHLFVBQUgsQ0FBYyxzQkFBZDtBQUNEO0FBQ0Y7QUFDRjs7QUExR29CLENBRHZCOztBQStHQSxJQUFJLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUF2QiIsImZpbGUiOiJjcmVhdGUtdHRsLWdyYW1tYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgIGNyeXB0byAgPSByZXF1aXJlKCdjcnlwdG8nKTtcclxubGV0IGZzID0gcmVxdWlyZSgnZnMtcGx1cycpO1xyXG5sZXQgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxubGV0IENvbXBvc2l0ZURpc3Bvc2FibGUgPSByZXF1aXJlKCdhdG9tJykuQ29tcG9zaXRlRGlzcG9zYWJsZTtcclxuXHJcbi8vIFRoaXMgQ2xhc3MgaXMgcmVwc29uc2libGUgZm9yIGNyZWF0aW5nIGEgbmV3IFRhZ2dlZCBUZW1wbGF0ZSBncmFtbWFyXHJcbi8vIG9uIGRldGVjdGlvbiBvZiBhIGNoYW5nZWQgVGFnZ2VkIFRlbXBsYXRlIENvbmZpZ3VyYXRpb24gaW4gdGhlIHBhY2thZ2Ugc2V0dGluZ3NcclxubW9kdWxlLmV4cG9ydHMgPVxyXG5jbGFzcyBDcmVhdGVUdGxHcmFtbWFyIHtcclxuXHJcbiAgZGlzcG9zYWJsZSA9IG5ldyBDb21wb3NpdGVEaXNwb3NhYmxlKCk7XHJcbiAgb2JzZXJ2ZVR0bENvbmZpZ0NyZWF0ZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5kaXNwb3NhYmxlLmRpc3Bvc2UoKVxyXG4gIH1cclxuXHJcbiAgLy8gY3JlYXRlIGEgbmV3IHRhZ2dlZCB0ZW1wbGF0ZSBncmFtbWFyIGZpbGVcclxuICBjcmVhdGVUdGxHcmFtbWFyRmlsZSh0dGxGaWxlTmFtZSkge1xyXG4gICAgdmFyIHR0bEZpbGVuYW1lQWJzb3VsdGU7XHJcbiAgICByZXR1cm4gdHRsRmlsZW5hbWVBYnNvdWx0ZSA9IHRoaXMuZ3JhbW1hckZpbGVBYnNvbHV0ZSgpKHR0bEZpbGVOYW1lKTtcclxuICB9XHJcblxyXG4gIC8vIGN1cnJlbnQgdGFnZ2VkIHRlbXBsYXRlIGZpbGVuYW1lIGJhc2VkIG9uIGEgU0hBMjU2XHJcbiAgZ2VuZXJhdGVUdGxHcmFtbWFyRmlsZW5hbWUoKSB7XHJcbiAgICByZXR1cm4gXCJ0dGwtXCIgKyB0aGlzLmdlbmVyYXRlVHRsU0hBMjU2KCk7XHJcbiAgfVxyXG5cclxuICAvLyBnZXQgZnVsbCBwYXRoIHRvIHRoZSBsYW5ndWFnZS1iYWJlbCBncmFtbWFyIGZpbGUgZGlyXHJcbiAgZ2V0R3JhbW1hclBhdGgoKSB7XHJcbiAgICByZXR1cm4gcGF0aC5ub3JtYWxpemUoXHJcbiAgICAgIHBhdGgucmVzb2x2ZShhdG9tLnBhY2thZ2VzLmxvYWRlZFBhY2thZ2VzW1wibGFuZ3VhZ2UtYmFiZWxcIl0ucGF0aCwgXCIuL2dyYW1tYXJzXCIpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gZ2V0IGFuIGFycmF5IG9mIGFsbCBsYW5ndWFnZS1iYWJlbCBncmFtbWFyIGZpbGVzXHJcbiAgZ2V0R3JhbW1hckZpbGVzKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCkgPT4ge1xyXG4gICAgICBmcy5yZWFkZGlyKHRoaXMuZ2V0R3JhbW1hclBhdGgoKSwoZXJyLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikgcmVqZWN0KGVycik7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIHJlYWQgY29uZmlndXJhdGlvbnMgZm9yIHRhZ2dlZCB0ZW1wbGF0ZXNcclxuICBnZXRUdGxDb25maWcoKSB7XHJcbiAgICByZXR1cm4gYXRvbS5jb25maWcuZ2V0KFwibGFuZ3VhZ2UtYmFiZWxcIikudGFnZ2VkVGVtcGxhdGVHcmFtbWFyO1xyXG4gIH1cclxuXHJcbiAgLy8gZ2V0IGFuIGFycmF5IG9mIGdyYW1tYXIgdGFnZ2VkIHRlbXBsYXRlIGV4dGVuc2lvbiBmaWxlc1xyXG4gIGdldFR0bEdyYW1tYXJGaWxlcygpIHtcclxuICAgIHZhciByZWdleCA9IC90dGwtLztcclxuICAgIHJldHVybiB0aGlzLmdldEdyYW1tYXJGaWxlcygpLnRoZW4oZGlyRmlsZXMgPT4gZGlyRmlsZXMuZmlsdGVyKGZ1bmN0aW9uKGZpbGVuYW1lKSB7XHJcbiAgICAgIHJldHVybiByZWdleC50ZXN0KGZpbGVuYW1lKTtcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIC8vIGdlbmVyYXRlIGEgU0hBMjU2IGZvciB0aGUgdGFnZ2VkIHRlbXBsYXRlIGdyYW1tYXIgZmlsZW5hbWVzIGJhc2VkIG9uIHRoZSB0YWdnZWQgdGVtcGxhdGUgY29uZmlnXHJcbiAgZ2VuZXJhdGVUdGxTSEEyNTYoKSB7XHJcbiAgICB2YXIgaGFzaCA9IGNyeXB0by5jcmVhdGVIYXNoKFwic2hhMjU2XCIpO1xyXG4gICAgaGFzaC51cGRhdGUodGhpcy5nZXRUdGxDb25maWcoKS50b1N0cmluZygpKTtcclxuICAgIHJldHVybiBoYXNoLmRpZ2VzdChcImhleFwiKTtcclxuICB9XHJcblxyXG4gIC8vIGRvZXMgYSB0dGwgZmlsZW5hbWUgZXhpc3QgYW5kIGlzIHdyaXRhYmxlXHJcbiAgZ3JhbW1hckZpbGVFeGlzdHModHRsRmlsZW5hbWUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGZzLmFjY2Vzcyh0aGlzLmdyYW1tYXJGaWxlQWJzb2x1dGUodHRsRmlsZW5hbWUpLCBmcy5GX09LLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKCEhIWVycik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBnZXQgYSBmdWxseSBxdWFsaWZpZWQgZmlsZW5hbWVcclxuICBncmFtbWFyRmlsZUFic29sdXRlKHR0bEZpbGVuYW1lKSB7XHJcbiAgICByZXR1cm4gcGF0aC5yZXNvbHZlKHRoaXMuZ2V0R3JhbW1hclBhdGgoKSwgdHRsRmlsZW5hbWUpO1xyXG4gIH1cclxuXHJcbiAgLy8gb2JzZXJ2ZSB0YWdnZWQgdGVtcGxhdGUgY29uZmlndXJhdGlvbiBhbmQgYWN0XHJcbiAgb2JzZXJ2ZVR0bENvbmZpZygpIHtcclxuICAgIGlmIChvYnNlcnZlVHRsQ29uZmlnQ3JlYXRlZCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9ic2VydmVkXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICAgIHZhciB0dGxGaWxlbmFtZSA9IHRoaXMuZ2VuZXJhdGVUdGxHcmFtbWFyRmlsZW5hbWUoKTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5ncmFtbWFyRmlsZUV4aXN0cyh0dGxGaWxlbmFtZSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucmVtb3ZlVHRsTGFuZ3VhZ2VGaWxlcyh0aGlzLmdldFR0bEdyYW1tYXJGaWxlcygpKTtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlVHRsR3JhbW1hckZpbGUodHRsRmlsZW5hbWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSAgIHtcclxuICAgICAgLy8gbG9vayBmb3IgY2hhbmdlcyBpbiB0YWdnZWQgdGVtcGxhdGUgaGFuZGxlcnNcclxuICAgICAgb2JzZXJ2ZVR0bENvbmZpZ0NyZWF0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmRpc3Bvc2FibGUuYWRkKGF0b20uY29uZmlnLm9ic2VydmUoXCJsYW5ndWFnZS1iYWJlbDp0YWdnZWRlVGVtcGxhdGVMaXRlcmFsXCIsIHRoaXMub2JzZXJ2ZVR0bENvbmZpZy5iaW5kKHRoaXMpKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyByZW1vdmUgYWxsIGxhbmd1YWdlIGZpbGVzIGluIHRhZ2dlZCB0ZW1wbGF0ZSBHcmFtbWFyRmlsZXMgYXJyYXlcclxuICByZW1vdmVUdGxMYW5ndWFnZUZpbGVzKHR0bEdyYW1tYXJGaWxlcykge1xyXG4gICAgZm9yICh2YXIgdHRsR3JhbW1hckZpbGUgb2YgdHRsR3JhbW1hckZpbGVzKSB7XHJcbiAgICAgIHZhciB0dGxHcmFtbWFyRmlsZUFic291bHRlID0gdGhpcy5ncmFtbWFyRmlsZUFic29sdXRlKHR0bEdyYW1tYXJGaWxlKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmdyYW1tYXJGaWxlRXhpc3RzKHR0bEdyYW1tYXJGaWxlQWJzb3VsdGUpKSB7XHJcbiAgICAgICAgZnMudW5saW5rU3luYyh0dGxHcmFtbWFyRmlsZUFic291bHRlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn07XHJcblxyXG5sZXQgdHRsR3JhbW1hckhlYWRlciA9IGBcclxue1xyXG4gIFwibmFtZVwiOiBcIlRhZyBFeHRlbnNpb25zIGZvciBCYWJlbFwiLFxyXG4gIFwic2NvcGVOYW1lXCI6IFwic291cmNlLmxhbmd1YWdlLWJhYmVsLnR0bC5leHRlbnNpb25zXCIsXHJcbiAgXCJmaWxlVHlwZXNcIjogW10sXHJcbiAgXCJwYXR0ZXJuc1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkdyYXBoUUwgKCBSZWxheS5RTCApIHN1cHBydC4gVXNlIHR3byBmb3JtcyBvZiBzY29wZXMhIGZpeGVzIHNvbWUgdGhlbWVzXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcInN0cmluZy5xdWFzaS5qc1wiLFxyXG4gICAgICBcImNvbnRlbnROYW1lXCI6IFwic3RyaW5nLnF1b3RlZC50ZW1wbGF0ZS5ncmFwaHFsLmpzXCIsXHJcbiAgICAgIFwiYmVnaW5cIjogXCJcXFxcXFxcXHMqKyg/OigoUmVsYXkpKC4pKFFMKSl8KGdxbCkpXFxcXFxcXFxzKigoXFxgKSlcIixcclxuICAgICAgXCJiZWdpbkNhcHR1cmVzXCI6IHtcclxuICAgICAgICBcIjJcIjogeyBcIm5hbWVcIjogXCJ2YXJpYWJsZS5vdGhlci5jbGFzcy5qc1wiIH0sXHJcbiAgICAgICAgXCIzXCI6IHsgXCJuYW1lXCI6IFwia2V5d29yZC5vcGVyYXRvci5hY2Nlc3Nvci5qc1wiIH0sXHJcbiAgICAgICAgXCI0XCI6IHsgXCJuYW1lXCI6IFwiZW50aXR5Lm5hbWUudGFnLmdyYXBhaHFsLmpzXCIgfSxcclxuICAgICAgICBcIjVcIjogeyBcIm5hbWVcIjogXCJlbnRpdHkubmFtZS50YWcuZ3JhcGFocWwuanNcIiB9LFxyXG4gICAgICAgIFwiNlwiOiB7IFwibmFtZVwiOiBcInN0cmluZy5xdW90ZWQudGVtcGxhdGUuanNcIiB9LFxyXG4gICAgICAgIFwiN1wiOiB7IFwibmFtZVwiOiBcInB1bmN0dWF0aW9uLmRlZmluaXRpb24ucXVhc2kuYmVnaW4uanNcIiB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFwiZW5kXCI6IFwiXFxcXFxcXFxzKig/PCFcXFxcXFxcXFxcXFxcXFxcKSgoXFxgKSlcIixcclxuICAgICAgXCJlbmRDYXB0dXJlc1wiOiB7XHJcbiAgICAgICAgXCIxXCI6IHsgXCJuYW1lXCI6IFwicHVuY3R1YXRpb24uZGVmaW5pdGlvbi5xdWFzaS5lbmQuanNcIiB9LFxyXG4gICAgICAgIFwiMlwiOiB7IFwibmFtZVwiOiBcInN0cmluZy5xdW90ZWQudGVtcGxhdGUuZ3JhcGhxbC5qc1wiIH1cclxuICAgICAgfSxcclxuICAgICAgXCJwYXR0ZXJuc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiZW50aXR5LnF1YXNpLmVsZW1lbnQuanNcIixcclxuICAgICAgICAgIFwiYmVnaW5cIjogXCIoPzwhXFxcXFxcXFxcXFxcXFxcXClcXFxccyooXFxcXFxcXFxcXCR7KVwiLFxyXG4gICAgICAgICAgXCJlbmRcIjogXCJcXFxcXFxcXHMqfVwiLFxyXG4gICAgICAgICAgXCJiZWdpbkNhcHR1cmVzXCI6IHtcclxuICAgICAgICAgICAgXCIxXCI6IHsgXCJuYW1lXCI6IFwicHVuY3R1YXRpb24ucXVhc2kuZWxlbWVudC5iZWdpbi5qc1wiIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcImVuZENhcHR1cmVzXCI6IHtcclxuICAgICAgICAgICAgXCIwXCI6IHsgXCJuYW1lXCI6IFwicHVuY3R1YXRpb24ucXVhc2kuZWxlbWVudC5lbmQuanNcIiB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJwYXR0ZXJuc1wiOiBbXHJcbiAgICAgICAgICAgIHsgXCJpbmNsdWRlXCI6IFwic291cmNlLmpzLmpzeFwiIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgXCJpbmNsdWRlXCI6IFwic291cmNlLmdyYXBocWxcIiB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICBdXHJcbn1cclxuYFxyXG4iXX0=