var crypto = require("crypto");
var fs = require("fs-plus");
var path = require("path");

module.exports = class CreateTagGrammar {
  constructor() {
    // this.observeTagConfig = this.observeTagConfig.bind(this);
    // this.disposables = atom.config.observe("language-babel:templateTagHandlers", this.observeTagConfig);
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
    debugger;
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
