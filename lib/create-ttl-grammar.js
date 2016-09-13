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
    this.observeTagConfigCreated = false;
  }

  destroy() {
    this.disposable.dispose();
  }

  // create a new tagged template grammar file
  createTagGrammarFile(ttlFileName) {
    var ttlFilenameAbsoulte;
    return ttlFilenameAbsoulte = this.grammarFileAbsolute()(ttlFileName);
  }

  // current tagged template filename based on a SHA256
  generateTagGrammarFilename() {
    return "ttl-" + this.generateTagSHA256();
  }

  // get full path to the language-babel grammar file dir
  getGrammarPath() {
    return path.normalize(path.resolve(atom.packages.loadedPackages["language-babel"].path, "./grammars"));
  }

  // read configurations for tagged templates
  getTagConfig() {
    return atom.config.get("language-babel").taggedTemplateGrammar;
  }

  // get an array of all language-babel grammar files
  getGrammarFiles() {
    return fs.readdirSync(this.getGrammarPath());
  }

  // get an array of grammar tagged template extension files
  getTagGrammarFiles() {
    var regex = /ttl-/;

    return this.getGrammarFiles().filter(function (grammarFilename) {
      return regex.test(grammarFilename);
    });
  }

  // generate a SHA256 for the tagged template grammar filenames based on the tagged template config
  generateTagSHA256() {
    var hash = crypto.createHash("sha256");
    hash.update(this.getTagConfig().toString());
    return hash.digest("hex");
  }

  // observe tagged template configuration and act
  observeTagConfig() {
    if (observeTagConfigCreated) {
      console.log("observed");
      return;
      var ttlFilename = this.generateTagGrammarFilename();

      if (!this.grammarFileExists(ttlFilename)) {
        return;
      }

      this.removeTagLanguageFiles(this.getTagGrammarFiles());
      return this.createTagGrammarFile(ttlFilename);
    } else {
      // look for changes in tagged template handlers
      this.disposable.add(atom.config.observe("language-babel:templateTagHandlers", this.observeTagConfig.bind(this)));
      observeTagConfigCreated = true;
    }
  }

  // remove all language files in tagged templateGrammarFiles array
  removeTagLanguageFiles(ttlGrammarFiles) {
    return (() => {
      for (var ttlGrammarFile of ttlGrammarFiles) {
        var ttlGrammarFileAbsoulte = this.grammarFileAbsolute(ttlGrammarFile);

        if (this.grammarFileExists(ttlGrammarFileAbsoulte)) {
          fs.unlinkSync(ttlGrammarFileAbsoulte);
        }
      }
    })();
  }

  // does a filename exist
  grammarFileExists(ttlFilename) {
    try {
      fs.accessSync(this.grammarFileAbsolute(), fs.F_OK);
      return true;
    } catch (error) {
      return false;
    }
  }

  // is a filename read/write
  isGrammarFileReadWrite(ttlFilename) {
    try {
      fs.accessSync(this.grammarFileAbsolute(), fs.R_OK | fs.W_OK);
      return true;
    } catch (error) {
      return false;
    }
  }

  // get a fully qualified filename
  grammarFileAbsolute(ttlFilename) {
    return path.resolve(this.getGrammarPath(), ttlFilename);
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
//# sourceMappingURL=data:application/json;base64,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YUFBTyxJQUFQO0FBQ0QsS0FIRCxDQUdFLE9BQU8sS0FBUCxFQUFjO0FBQ2QsYUFBTyxLQUFQO0FBQ0Q7QUFDRjs7O0FBR0QseUJBQXVCLFdBQXZCLEVBQW9DO0FBQ2xDLFFBQUk7QUFDRixTQUFHLFVBQUgsQ0FBYyxLQUFLLG1CQUFMLEVBQWQsRUFBMEMsR0FBRyxJQUFILEdBQVUsR0FBRyxJQUF2RDtBQUNBLGFBQU8sSUFBUDtBQUNELEtBSEQsQ0FHRSxPQUFPLEtBQVAsRUFBYztBQUNkLGFBQU8sS0FBUDtBQUNEO0FBQ0Y7OztBQUdELHNCQUFvQixXQUFwQixFQUFpQztBQUMvQixXQUFPLEtBQUssT0FBTCxDQUFhLEtBQUssY0FBTCxFQUFiLEVBQW9DLFdBQXBDLENBQVA7QUFDRDtBQWpIb0IsQ0FEdkI7O0FBcUhBLElBQUksbUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQXZCIiwiZmlsZSI6ImNyZWF0ZS10dGwtZ3JhbW1hci5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCAgY3J5cHRvICA9IHJlcXVpcmUoJ2NyeXB0bycpO1xyXG5sZXQgZnMgPSByZXF1aXJlKCdmcy1wbHVzJyk7XHJcbmxldCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG5sZXQgQ29tcG9zaXRlRGlzcG9zYWJsZSA9IHJlcXVpcmUoJ2F0b20nKS5Db21wb3NpdGVEaXNwb3NhYmxlO1xyXG5cclxuLy8gVGhpcyBDbGFzcyBpcyByZXBzb25zaWJsZSBmb3IgY3JlYXRpbmcgYSBuZXcgVGFnZ2VkIFRlbXBsYXRlIGdyYW1tYXJcclxuLy8gb24gZGV0ZWN0aW9uIG9mIGEgY2hhbmdlZCBUYWdnZWQgVGVtcGxhdGUgQ29uZmlndXJhdGlvbiBpbiB0aGUgcGFja2FnZSBzZXR0aW5nc1xyXG5tb2R1bGUuZXhwb3J0cyA9XHJcbmNsYXNzIENyZWF0ZVR0bEdyYW1tYXIge1xyXG5cclxuICBkaXNwb3NhYmxlID0gbmV3IENvbXBvc2l0ZURpc3Bvc2FibGUoKTtcclxuICBvYnNlcnZlVGFnQ29uZmlnQ3JlYXRlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRpc3Bvc2FibGUuZGlzcG9zZSgpXHJcbiAgfVxyXG5cclxuICAvLyBjcmVhdGUgYSBuZXcgdGFnZ2VkIHRlbXBsYXRlIGdyYW1tYXIgZmlsZVxyXG4gIGNyZWF0ZVRhZ0dyYW1tYXJGaWxlKHR0bEZpbGVOYW1lKSB7XHJcbiAgICB2YXIgdHRsRmlsZW5hbWVBYnNvdWx0ZTtcclxuICAgIHJldHVybiB0dGxGaWxlbmFtZUFic291bHRlID0gdGhpcy5ncmFtbWFyRmlsZUFic29sdXRlKCkodHRsRmlsZU5hbWUpO1xyXG4gIH1cclxuXHJcbiAgLy8gY3VycmVudCB0YWdnZWQgdGVtcGxhdGUgZmlsZW5hbWUgYmFzZWQgb24gYSBTSEEyNTZcclxuICBnZW5lcmF0ZVRhZ0dyYW1tYXJGaWxlbmFtZSgpIHtcclxuICAgIHJldHVybiBcInR0bC1cIiArIHRoaXMuZ2VuZXJhdGVUYWdTSEEyNTYoKTtcclxuICB9XHJcblxyXG4gIC8vIGdldCBmdWxsIHBhdGggdG8gdGhlIGxhbmd1YWdlLWJhYmVsIGdyYW1tYXIgZmlsZSBkaXJcclxuICBnZXRHcmFtbWFyUGF0aCgpIHtcclxuICAgIHJldHVybiBwYXRoLm5vcm1hbGl6ZShcclxuICAgICAgcGF0aC5yZXNvbHZlKGF0b20ucGFja2FnZXMubG9hZGVkUGFja2FnZXNbXCJsYW5ndWFnZS1iYWJlbFwiXS5wYXRoLCBcIi4vZ3JhbW1hcnNcIilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyByZWFkIGNvbmZpZ3VyYXRpb25zIGZvciB0YWdnZWQgdGVtcGxhdGVzXHJcbiAgZ2V0VGFnQ29uZmlnKCkge1xyXG4gICAgcmV0dXJuIGF0b20uY29uZmlnLmdldChcImxhbmd1YWdlLWJhYmVsXCIpLnRhZ2dlZFRlbXBsYXRlR3JhbW1hcjtcclxuICB9XHJcblxyXG4gIC8vIGdldCBhbiBhcnJheSBvZiBhbGwgbGFuZ3VhZ2UtYmFiZWwgZ3JhbW1hciBmaWxlc1xyXG4gIGdldEdyYW1tYXJGaWxlcygpIHtcclxuICAgIHJldHVybiBmcy5yZWFkZGlyU3luYyh0aGlzLmdldEdyYW1tYXJQYXRoKCkpO1xyXG4gIH1cclxuXHJcbiAgLy8gZ2V0IGFuIGFycmF5IG9mIGdyYW1tYXIgdGFnZ2VkIHRlbXBsYXRlIGV4dGVuc2lvbiBmaWxlc1xyXG4gIGdldFRhZ0dyYW1tYXJGaWxlcygpIHtcclxuICAgIHZhciByZWdleCA9IC90dGwtLztcclxuXHJcbiAgICByZXR1cm4gdGhpcy5nZXRHcmFtbWFyRmlsZXMoKS5maWx0ZXIoZnVuY3Rpb24oZ3JhbW1hckZpbGVuYW1lKSB7XHJcbiAgICAgIHJldHVybiByZWdleC50ZXN0KGdyYW1tYXJGaWxlbmFtZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIGdlbmVyYXRlIGEgU0hBMjU2IGZvciB0aGUgdGFnZ2VkIHRlbXBsYXRlIGdyYW1tYXIgZmlsZW5hbWVzIGJhc2VkIG9uIHRoZSB0YWdnZWQgdGVtcGxhdGUgY29uZmlnXHJcbiAgZ2VuZXJhdGVUYWdTSEEyNTYoKSB7XHJcbiAgICB2YXIgaGFzaCA9IGNyeXB0by5jcmVhdGVIYXNoKFwic2hhMjU2XCIpO1xyXG4gICAgaGFzaC51cGRhdGUodGhpcy5nZXRUYWdDb25maWcoKS50b1N0cmluZygpKTtcclxuICAgIHJldHVybiBoYXNoLmRpZ2VzdChcImhleFwiKTtcclxuICB9XHJcblxyXG4gIC8vIG9ic2VydmUgdGFnZ2VkIHRlbXBsYXRlIGNvbmZpZ3VyYXRpb24gYW5kIGFjdFxyXG4gIG9ic2VydmVUYWdDb25maWcoKSB7XHJcbiAgICBpZiAob2JzZXJ2ZVRhZ0NvbmZpZ0NyZWF0ZWQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJvYnNlcnZlZFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgICB2YXIgdHRsRmlsZW5hbWUgPSB0aGlzLmdlbmVyYXRlVGFnR3JhbW1hckZpbGVuYW1lKCk7XHJcblxyXG4gICAgICBpZiAoIXRoaXMuZ3JhbW1hckZpbGVFeGlzdHModHRsRmlsZW5hbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnJlbW92ZVRhZ0xhbmd1YWdlRmlsZXModGhpcy5nZXRUYWdHcmFtbWFyRmlsZXMoKSk7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVRhZ0dyYW1tYXJGaWxlKHR0bEZpbGVuYW1lKTtcclxuICAgIH1cclxuICAgIGVsc2UgICB7XHJcbiAgICAgIC8vIGxvb2sgZm9yIGNoYW5nZXMgaW4gdGFnZ2VkIHRlbXBsYXRlIGhhbmRsZXJzXHJcbiAgICAgIHRoaXMuZGlzcG9zYWJsZS5hZGQoYXRvbS5jb25maWcub2JzZXJ2ZShcImxhbmd1YWdlLWJhYmVsOnRlbXBsYXRlVGFnSGFuZGxlcnNcIiwgdGhpcy5vYnNlcnZlVGFnQ29uZmlnLmJpbmQodGhpcykpKTtcclxuICAgICAgb2JzZXJ2ZVRhZ0NvbmZpZ0NyZWF0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gcmVtb3ZlIGFsbCBsYW5ndWFnZSBmaWxlcyBpbiB0YWdnZWQgdGVtcGxhdGVHcmFtbWFyRmlsZXMgYXJyYXlcclxuICByZW1vdmVUYWdMYW5ndWFnZUZpbGVzKHR0bEdyYW1tYXJGaWxlcykge1xyXG4gICAgcmV0dXJuICgoKSA9PiB7XHJcbiAgICAgIGZvciAodmFyIHR0bEdyYW1tYXJGaWxlIG9mIHR0bEdyYW1tYXJGaWxlcykge1xyXG4gICAgICAgIHZhciB0dGxHcmFtbWFyRmlsZUFic291bHRlID0gdGhpcy5ncmFtbWFyRmlsZUFic29sdXRlKHR0bEdyYW1tYXJGaWxlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ3JhbW1hckZpbGVFeGlzdHModHRsR3JhbW1hckZpbGVBYnNvdWx0ZSkpIHtcclxuICAgICAgICAgIGZzLnVubGlua1N5bmModHRsR3JhbW1hckZpbGVBYnNvdWx0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gZG9lcyBhIGZpbGVuYW1lIGV4aXN0XHJcbiAgZ3JhbW1hckZpbGVFeGlzdHModHRsRmlsZW5hbWUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGZzLmFjY2Vzc1N5bmModGhpcy5ncmFtbWFyRmlsZUFic29sdXRlKCksIGZzLkZfT0spO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGlzIGEgZmlsZW5hbWUgcmVhZC93cml0ZVxyXG4gIGlzR3JhbW1hckZpbGVSZWFkV3JpdGUodHRsRmlsZW5hbWUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGZzLmFjY2Vzc1N5bmModGhpcy5ncmFtbWFyRmlsZUFic29sdXRlKCksIGZzLlJfT0sgfCBmcy5XX09LKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBnZXQgYSBmdWxseSBxdWFsaWZpZWQgZmlsZW5hbWVcclxuICBncmFtbWFyRmlsZUFic29sdXRlKHR0bEZpbGVuYW1lKSB7XHJcbiAgICByZXR1cm4gcGF0aC5yZXNvbHZlKHRoaXMuZ2V0R3JhbW1hclBhdGgoKSwgdHRsRmlsZW5hbWUpO1xyXG4gIH1cclxufTtcclxuXHJcbmxldCB0dGxHcmFtbWFySGVhZGVyID0gYFxyXG57XHJcbiAgXCJuYW1lXCI6IFwiVGFnIEV4dGVuc2lvbnMgZm9yIEJhYmVsXCIsXHJcbiAgXCJzY29wZU5hbWVcIjogXCJzb3VyY2UubGFuZ3VhZ2UtYmFiZWwudHRsLmV4dGVuc2lvbnNcIixcclxuICBcImZpbGVUeXBlc1wiOiBbXSxcclxuICBcInBhdHRlcm5zXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiR3JhcGhRTCAoIFJlbGF5LlFMICkgc3VwcHJ0LiBVc2UgdHdvIGZvcm1zIG9mIHNjb3BlcyEgZml4ZXMgc29tZSB0aGVtZXNcIixcclxuICAgICAgXCJuYW1lXCI6IFwic3RyaW5nLnF1YXNpLmpzXCIsXHJcbiAgICAgIFwiY29udGVudE5hbWVcIjogXCJzdHJpbmcucXVvdGVkLnRlbXBsYXRlLmdyYXBocWwuanNcIixcclxuICAgICAgXCJiZWdpblwiOiBcIlxcXFxcXFxccyorKD86KChSZWxheSkoLikoUUwpKXwoZ3FsKSlcXFxcXFxcXHMqKChcXGApKVwiLFxyXG4gICAgICBcImJlZ2luQ2FwdHVyZXNcIjoge1xyXG4gICAgICAgIFwiMlwiOiB7IFwibmFtZVwiOiBcInZhcmlhYmxlLm90aGVyLmNsYXNzLmpzXCIgfSxcclxuICAgICAgICBcIjNcIjogeyBcIm5hbWVcIjogXCJrZXl3b3JkLm9wZXJhdG9yLmFjY2Vzc29yLmpzXCIgfSxcclxuICAgICAgICBcIjRcIjogeyBcIm5hbWVcIjogXCJlbnRpdHkubmFtZS50YWcuZ3JhcGFocWwuanNcIiB9LFxyXG4gICAgICAgIFwiNVwiOiB7IFwibmFtZVwiOiBcImVudGl0eS5uYW1lLnRhZy5ncmFwYWhxbC5qc1wiIH0sXHJcbiAgICAgICAgXCI2XCI6IHsgXCJuYW1lXCI6IFwic3RyaW5nLnF1b3RlZC50ZW1wbGF0ZS5qc1wiIH0sXHJcbiAgICAgICAgXCI3XCI6IHsgXCJuYW1lXCI6IFwicHVuY3R1YXRpb24uZGVmaW5pdGlvbi5xdWFzaS5iZWdpbi5qc1wiIH1cclxuICAgICAgfSxcclxuICAgICAgXCJlbmRcIjogXCJcXFxcXFxcXHMqKD88IVxcXFxcXFxcXFxcXFxcXFwpKChcXGApKVwiLFxyXG4gICAgICBcImVuZENhcHR1cmVzXCI6IHtcclxuICAgICAgICBcIjFcIjogeyBcIm5hbWVcIjogXCJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLnF1YXNpLmVuZC5qc1wiIH0sXHJcbiAgICAgICAgXCIyXCI6IHsgXCJuYW1lXCI6IFwic3RyaW5nLnF1b3RlZC50ZW1wbGF0ZS5ncmFwaHFsLmpzXCIgfVxyXG4gICAgICB9LFxyXG4gICAgICBcInBhdHRlcm5zXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJlbnRpdHkucXVhc2kuZWxlbWVudC5qc1wiLFxyXG4gICAgICAgICAgXCJiZWdpblwiOiBcIig/PCFcXFxcXFxcXFxcXFxcXFxcKVxcXFxzKihcXFxcXFxcXFxcJHspXCIsXHJcbiAgICAgICAgICBcImVuZFwiOiBcIlxcXFxcXFxccyp9XCIsXHJcbiAgICAgICAgICBcImJlZ2luQ2FwdHVyZXNcIjoge1xyXG4gICAgICAgICAgICBcIjFcIjogeyBcIm5hbWVcIjogXCJwdW5jdHVhdGlvbi5xdWFzaS5lbGVtZW50LmJlZ2luLmpzXCIgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiZW5kQ2FwdHVyZXNcIjoge1xyXG4gICAgICAgICAgICBcIjBcIjogeyBcIm5hbWVcIjogXCJwdW5jdHVhdGlvbi5xdWFzaS5lbGVtZW50LmVuZC5qc1wiIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcInBhdHRlcm5zXCI6IFtcclxuICAgICAgICAgICAgeyBcImluY2x1ZGVcIjogXCJzb3VyY2UuanMuanN4XCIgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBcImluY2x1ZGVcIjogXCJzb3VyY2UuZ3JhcGhxbFwiIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIF1cclxufVxyXG5gXHJcbiJdfQ==