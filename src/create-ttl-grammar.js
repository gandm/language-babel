let  crypto  = require('crypto');
let fs = require('fs-plus');
let path = require('path');
let CompositeDisposable = require('atom').CompositeDisposable;

// This Class is repsonsible for creating a new Tagged Template grammar
// on detection of a changed Tagged Template Configuration in the package settings
module.exports =
class CreateTtlGrammar {

  disposable = new CompositeDisposable();
  observeTtlConfigCreated = false;

  constructor() {
  }

  destroy() {
    this.disposable.dispose()
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
    return path.normalize(
      path.resolve(atom.packages.loadedPackages["language-babel"].path, "./grammars")
    );
  }

  // get an array of all language-babel grammar files
  getGrammarFiles() {
    return new Promise((resolve,reject) => {
      fs.readdir(this.getGrammarPath(),(err, data) => {
        if (err) rejcet(err);
        else {
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
    return this.getGrammarFiles().then(dirFiles => dirFiles.filter(function(filename) {
      return regex.test(filename);
    }));
  }

  // generate a SHA256 for the tagged template grammar filenames based on the tagged template config
  generateTtlSHA256() {
    var hash = crypto.createHash("sha256");
    hash.update(this.getTtlConfig().toString());
    return hash.digest("hex");
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
    }
    else   {
      // look for changes in tagged template handlers
      observeTtlConfigCreated = true;
      this.disposable.add(atom.config.observe("language-babel:taggedeTemplateLiteral", this.observeTtlConfig.bind(this)));
    }
  }

  // remove all language files in tagged template GrammarFiles array
  removeTtlLanguageFiles(ttlGrammarFiles) {
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
`
