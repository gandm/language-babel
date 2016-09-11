'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
let crypto = require('crypto');
let fs = require('fs-plus');
let path = require('path');
let CompositeDisposable = require('atom').CompositeDisposable;

class CreateTagGrammar {

  constructor() {
    this.disposable = new CompositeDisposable();

    // look for changes in tag handlers
    this.disposable.add(atom.config.observe("language-babel:templateTagHandlers", this.observeTagConfig.bind(this)));
    console.log(tagGrammarHeader);
  }

  // create a new tag grammar file
  createTagGrammarFile(tagFileName) {
    var tagFilenameAbsoulte;
    return tagFilenameAbsoulte = this.grammarFileAbsolute()(tagFileName);
  }

  // current tag filename based on a SHA256
  generateTagGrammarFilename() {
    return "tags-" + this.generateTagSHA256();
  }

  // get full path to the language-babel grammar file dir
  getGrammarPath() {
    return path.normalize(path.resolve(atom.packages.loadedPackages["language-babel"].path, "./grammars"));
  }

  // read configurations for tags
  getTagConfig() {
    return atom.config.get("language-babel").templateTagHandlers;
  }

  // get an array of all language-babel grammar files
  getGrammarFiles() {
    return fs.readdirSync(this.getGrammarPath());
  }

  // get an array of grammar tag extension files
  getTagGrammarFiles() {
    var regex = /tags-/;

    return this.getGrammarFiles().filter(function (grammarFilename) {
      return regex.test(grammarFilename);
    });
  }

  // generate a SHA256 for the tag grammar filenames based on the tag config
  generateTagSHA256() {
    var hash = crypto.createHash("sha256");
    hash.update(this.getTagConfig().toString());
    return hash.digest("hex");
  }

  // observe tag configuration and act
  observeTagConfig() {
    console.log("observed");
    return;
    var tagFilename = this.generateTagGrammarFilename();

    if (!this.grammarFileExists(tagFilename)) {
      return;
    }

    this.removeTagLanguageFiles(this.getTagGrammarFiles());
    return this.createTagGrammarFile(tagFilename);
  }

  // remove all language files in tagGrammarFiles array
  removeTagLanguageFiles(tagGrammarFiles) {
    return (() => {
      for (var tagGrammarFile of tagGrammarFiles) {
        var tagGrammarFileAbsoulte = this.grammarFileAbsolute(tagGrammarFile);

        if (this.grammarFileExists(tagGrammarFileAbsoulte)) {
          fs.unlinkSync(tagGrammarFileAbsoulte);
        }
      }
    })();
  }

  // does a filename exist
  grammarFileExists(tagFilename) {
    try {
      fs.accessSync(this.grammarFileAbsolute(), fs.F_OK);
      return true;
    } catch (error) {
      return false;
    }
  }

  // is a filename read/write
  isGrammarFileReadWrite(tagFilename) {
    try {
      fs.accessSync(this.grammarFileAbsolute(), fs.R_OK | fs.W_OK);
      return true;
    } catch (error) {
      return false;
    }
  }

  // get a fully qualified filename
  grammarFileAbsolute(tagFilename) {
    return path.resolve(this.getGrammarPath(), tagFilename);
  }
}exports.default = CreateTagGrammar;
;

let tagGrammarHeader = `
{
  "name": "Tag Extensions for Babel",
  "scopeName": "source.language-babel.tag.extensions",
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
//# sourceMappingURL=data:application/json;base64,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Q0FBYyxLQUFLLG1CQUFMLEVBQWQsRUFBMEMsR0FBRyxJQUFILEdBQVUsR0FBRyxJQUF2RDtBQUNBLGFBQU8sSUFBUDtBQUNELEtBSEQsQ0FHRSxPQUFPLEtBQVAsRUFBYztBQUNkLGFBQU8sS0FBUDtBQUNEO0FBQ0Y7OztBQUdELHNCQUFvQixXQUFwQixFQUFpQztBQUMvQixXQUFPLEtBQUssT0FBTCxDQUFhLEtBQUssY0FBTCxFQUFiLEVBQW9DLFdBQXBDLENBQVA7QUFDRDtBQXhHbUMsQyxrQkFBakIsZ0I7QUF5R3BCOztBQUVELElBQUksbUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQXZCIiwiZmlsZSI6ImNyZWF0ZS10YWctZ3JhbW1hci5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCAgY3J5cHRvICA9IHJlcXVpcmUoJ2NyeXB0bycpO1xyXG5sZXQgZnMgPSByZXF1aXJlKCdmcy1wbHVzJyk7XHJcbmxldCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG5sZXQgQ29tcG9zaXRlRGlzcG9zYWJsZSA9IHJlcXVpcmUoJ2F0b20nKS5Db21wb3NpdGVEaXNwb3NhYmxlO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZVRhZ0dyYW1tYXIge1xyXG5cclxuICBkaXNwb3NhYmxlID0gbmV3IENvbXBvc2l0ZURpc3Bvc2FibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBsb29rIGZvciBjaGFuZ2VzIGluIHRhZyBoYW5kbGVyc1xyXG4gICAgdGhpcy5kaXNwb3NhYmxlLmFkZChhdG9tLmNvbmZpZy5vYnNlcnZlKFwibGFuZ3VhZ2UtYmFiZWw6dGVtcGxhdGVUYWdIYW5kbGVyc1wiLCB0aGlzLm9ic2VydmVUYWdDb25maWcuYmluZCh0aGlzKSkpO1xyXG4gICAgY29uc29sZS5sb2codGFnR3JhbW1hckhlYWRlcik7XHJcbiAgfVxyXG5cclxuICAvLyBjcmVhdGUgYSBuZXcgdGFnIGdyYW1tYXIgZmlsZVxyXG4gIGNyZWF0ZVRhZ0dyYW1tYXJGaWxlKHRhZ0ZpbGVOYW1lKSB7XHJcbiAgICB2YXIgdGFnRmlsZW5hbWVBYnNvdWx0ZTtcclxuICAgIHJldHVybiB0YWdGaWxlbmFtZUFic291bHRlID0gdGhpcy5ncmFtbWFyRmlsZUFic29sdXRlKCkodGFnRmlsZU5hbWUpO1xyXG4gIH1cclxuXHJcbiAgLy8gY3VycmVudCB0YWcgZmlsZW5hbWUgYmFzZWQgb24gYSBTSEEyNTZcclxuICBnZW5lcmF0ZVRhZ0dyYW1tYXJGaWxlbmFtZSgpIHtcclxuICAgIHJldHVybiBcInRhZ3MtXCIgKyB0aGlzLmdlbmVyYXRlVGFnU0hBMjU2KCk7XHJcbiAgfVxyXG5cclxuICAvLyBnZXQgZnVsbCBwYXRoIHRvIHRoZSBsYW5ndWFnZS1iYWJlbCBncmFtbWFyIGZpbGUgZGlyXHJcbiAgZ2V0R3JhbW1hclBhdGgoKSB7XHJcbiAgICByZXR1cm4gcGF0aC5ub3JtYWxpemUoXHJcbiAgICAgIHBhdGgucmVzb2x2ZShhdG9tLnBhY2thZ2VzLmxvYWRlZFBhY2thZ2VzW1wibGFuZ3VhZ2UtYmFiZWxcIl0ucGF0aCwgXCIuL2dyYW1tYXJzXCIpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVhZCBjb25maWd1cmF0aW9ucyBmb3IgdGFnc1xyXG4gIGdldFRhZ0NvbmZpZygpIHtcclxuICAgIHJldHVybiBhdG9tLmNvbmZpZy5nZXQoXCJsYW5ndWFnZS1iYWJlbFwiKS50ZW1wbGF0ZVRhZ0hhbmRsZXJzO1xyXG4gIH1cclxuXHJcbiAgLy8gZ2V0IGFuIGFycmF5IG9mIGFsbCBsYW5ndWFnZS1iYWJlbCBncmFtbWFyIGZpbGVzXHJcbiAgZ2V0R3JhbW1hckZpbGVzKCkge1xyXG4gICAgcmV0dXJuIGZzLnJlYWRkaXJTeW5jKHRoaXMuZ2V0R3JhbW1hclBhdGgoKSk7XHJcbiAgfVxyXG5cclxuICAvLyBnZXQgYW4gYXJyYXkgb2YgZ3JhbW1hciB0YWcgZXh0ZW5zaW9uIGZpbGVzXHJcbiAgZ2V0VGFnR3JhbW1hckZpbGVzKCkge1xyXG4gICAgdmFyIHJlZ2V4ID0gL3RhZ3MtLztcclxuXHJcbiAgICByZXR1cm4gdGhpcy5nZXRHcmFtbWFyRmlsZXMoKS5maWx0ZXIoZnVuY3Rpb24oZ3JhbW1hckZpbGVuYW1lKSB7XHJcbiAgICAgIHJldHVybiByZWdleC50ZXN0KGdyYW1tYXJGaWxlbmFtZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIGdlbmVyYXRlIGEgU0hBMjU2IGZvciB0aGUgdGFnIGdyYW1tYXIgZmlsZW5hbWVzIGJhc2VkIG9uIHRoZSB0YWcgY29uZmlnXHJcbiAgZ2VuZXJhdGVUYWdTSEEyNTYoKSB7XHJcbiAgICB2YXIgaGFzaCA9IGNyeXB0by5jcmVhdGVIYXNoKFwic2hhMjU2XCIpO1xyXG4gICAgaGFzaC51cGRhdGUodGhpcy5nZXRUYWdDb25maWcoKS50b1N0cmluZygpKTtcclxuICAgIHJldHVybiBoYXNoLmRpZ2VzdChcImhleFwiKTtcclxuICB9XHJcblxyXG4gIC8vIG9ic2VydmUgdGFnIGNvbmZpZ3VyYXRpb24gYW5kIGFjdFxyXG4gIG9ic2VydmVUYWdDb25maWcoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIm9ic2VydmVkXCIpO1xyXG4gICAgcmV0dXJuO1xyXG4gICAgdmFyIHRhZ0ZpbGVuYW1lID0gdGhpcy5nZW5lcmF0ZVRhZ0dyYW1tYXJGaWxlbmFtZSgpO1xyXG5cclxuICAgIGlmICghdGhpcy5ncmFtbWFyRmlsZUV4aXN0cyh0YWdGaWxlbmFtZSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlVGFnTGFuZ3VhZ2VGaWxlcyh0aGlzLmdldFRhZ0dyYW1tYXJGaWxlcygpKTtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZVRhZ0dyYW1tYXJGaWxlKHRhZ0ZpbGVuYW1lKTtcclxuICB9XHJcblxyXG4gIC8vIHJlbW92ZSBhbGwgbGFuZ3VhZ2UgZmlsZXMgaW4gdGFnR3JhbW1hckZpbGVzIGFycmF5XHJcbiAgcmVtb3ZlVGFnTGFuZ3VhZ2VGaWxlcyh0YWdHcmFtbWFyRmlsZXMpIHtcclxuICAgIHJldHVybiAoKCkgPT4ge1xyXG4gICAgICBmb3IgKHZhciB0YWdHcmFtbWFyRmlsZSBvZiB0YWdHcmFtbWFyRmlsZXMpIHtcclxuICAgICAgICB2YXIgdGFnR3JhbW1hckZpbGVBYnNvdWx0ZSA9IHRoaXMuZ3JhbW1hckZpbGVBYnNvbHV0ZSh0YWdHcmFtbWFyRmlsZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdyYW1tYXJGaWxlRXhpc3RzKHRhZ0dyYW1tYXJGaWxlQWJzb3VsdGUpKSB7XHJcbiAgICAgICAgICBmcy51bmxpbmtTeW5jKHRhZ0dyYW1tYXJGaWxlQWJzb3VsdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSkoKTtcclxuICB9XHJcblxyXG4gIC8vIGRvZXMgYSBmaWxlbmFtZSBleGlzdFxyXG4gIGdyYW1tYXJGaWxlRXhpc3RzKHRhZ0ZpbGVuYW1lKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBmcy5hY2Nlc3NTeW5jKHRoaXMuZ3JhbW1hckZpbGVBYnNvbHV0ZSgpLCBmcy5GX09LKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBpcyBhIGZpbGVuYW1lIHJlYWQvd3JpdGVcclxuICBpc0dyYW1tYXJGaWxlUmVhZFdyaXRlKHRhZ0ZpbGVuYW1lKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBmcy5hY2Nlc3NTeW5jKHRoaXMuZ3JhbW1hckZpbGVBYnNvbHV0ZSgpLCBmcy5SX09LIHwgZnMuV19PSyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gZ2V0IGEgZnVsbHkgcXVhbGlmaWVkIGZpbGVuYW1lXHJcbiAgZ3JhbW1hckZpbGVBYnNvbHV0ZSh0YWdGaWxlbmFtZSkge1xyXG4gICAgcmV0dXJuIHBhdGgucmVzb2x2ZSh0aGlzLmdldEdyYW1tYXJQYXRoKCksIHRhZ0ZpbGVuYW1lKTtcclxuICB9XHJcbn07XHJcblxyXG5sZXQgdGFnR3JhbW1hckhlYWRlciA9IGBcclxue1xyXG4gIFwibmFtZVwiOiBcIlRhZyBFeHRlbnNpb25zIGZvciBCYWJlbFwiLFxyXG4gIFwic2NvcGVOYW1lXCI6IFwic291cmNlLmxhbmd1YWdlLWJhYmVsLnRhZy5leHRlbnNpb25zXCIsXHJcbiAgXCJmaWxlVHlwZXNcIjogW10sXHJcbiAgXCJwYXR0ZXJuc1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkdyYXBoUUwgKCBSZWxheS5RTCApIHN1cHBydC4gVXNlIHR3byBmb3JtcyBvZiBzY29wZXMhIGZpeGVzIHNvbWUgdGhlbWVzXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcInN0cmluZy5xdWFzaS5qc1wiLFxyXG4gICAgICBcImNvbnRlbnROYW1lXCI6IFwic3RyaW5nLnF1b3RlZC50ZW1wbGF0ZS5ncmFwaHFsLmpzXCIsXHJcbiAgICAgIFwiYmVnaW5cIjogXCJcXFxcXFxcXHMqKyg/OigoUmVsYXkpKC4pKFFMKSl8KGdxbCkpXFxcXFxcXFxzKigoXFxgKSlcIixcclxuICAgICAgXCJiZWdpbkNhcHR1cmVzXCI6IHtcclxuICAgICAgICBcIjJcIjogeyBcIm5hbWVcIjogXCJ2YXJpYWJsZS5vdGhlci5jbGFzcy5qc1wiIH0sXHJcbiAgICAgICAgXCIzXCI6IHsgXCJuYW1lXCI6IFwia2V5d29yZC5vcGVyYXRvci5hY2Nlc3Nvci5qc1wiIH0sXHJcbiAgICAgICAgXCI0XCI6IHsgXCJuYW1lXCI6IFwiZW50aXR5Lm5hbWUudGFnLmdyYXBhaHFsLmpzXCIgfSxcclxuICAgICAgICBcIjVcIjogeyBcIm5hbWVcIjogXCJlbnRpdHkubmFtZS50YWcuZ3JhcGFocWwuanNcIiB9LFxyXG4gICAgICAgIFwiNlwiOiB7IFwibmFtZVwiOiBcInN0cmluZy5xdW90ZWQudGVtcGxhdGUuanNcIiB9LFxyXG4gICAgICAgIFwiN1wiOiB7IFwibmFtZVwiOiBcInB1bmN0dWF0aW9uLmRlZmluaXRpb24ucXVhc2kuYmVnaW4uanNcIiB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFwiZW5kXCI6IFwiXFxcXFxcXFxzKig/PCFcXFxcXFxcXFxcXFxcXFxcKSgoXFxgKSlcIixcclxuICAgICAgXCJlbmRDYXB0dXJlc1wiOiB7XHJcbiAgICAgICAgXCIxXCI6IHsgXCJuYW1lXCI6IFwicHVuY3R1YXRpb24uZGVmaW5pdGlvbi5xdWFzaS5lbmQuanNcIiB9LFxyXG4gICAgICAgIFwiMlwiOiB7IFwibmFtZVwiOiBcInN0cmluZy5xdW90ZWQudGVtcGxhdGUuZ3JhcGhxbC5qc1wiIH1cclxuICAgICAgfSxcclxuICAgICAgXCJwYXR0ZXJuc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiZW50aXR5LnF1YXNpLmVsZW1lbnQuanNcIixcclxuICAgICAgICAgIFwiYmVnaW5cIjogXCIoPzwhXFxcXFxcXFxcXFxcXFxcXClcXFxccyooXFxcXFxcXFxcXCR7KVwiLFxyXG4gICAgICAgICAgXCJlbmRcIjogXCJcXFxcXFxcXHMqfVwiLFxyXG4gICAgICAgICAgXCJiZWdpbkNhcHR1cmVzXCI6IHtcclxuICAgICAgICAgICAgXCIxXCI6IHsgXCJuYW1lXCI6IFwicHVuY3R1YXRpb24ucXVhc2kuZWxlbWVudC5iZWdpbi5qc1wiIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcImVuZENhcHR1cmVzXCI6IHtcclxuICAgICAgICAgICAgXCIwXCI6IHsgXCJuYW1lXCI6IFwicHVuY3R1YXRpb24ucXVhc2kuZWxlbWVudC5lbmQuanNcIiB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJwYXR0ZXJuc1wiOiBbXHJcbiAgICAgICAgICAgIHsgXCJpbmNsdWRlXCI6IFwic291cmNlLmpzLmpzeFwiIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgXCJpbmNsdWRlXCI6IFwic291cmNlLmdyYXBocWxcIiB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICBdXHJcbn1cclxuYFxyXG4iXX0=