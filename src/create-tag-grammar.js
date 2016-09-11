let  crypto  = require('crypto');
let fs = require('fs-plus');
let path = require('path');
let CompositeDisposable = require('atom').CompositeDisposable;


export default class CreateTagGrammar {

  disposable = new CompositeDisposable();

  constructor() {
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
    return path.normalize(
      path.resolve(atom.packages.loadedPackages["language-babel"].path, "./grammars")
    );
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

    return this.getGrammarFiles().filter(function(grammarFilename) {
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
};

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
`
