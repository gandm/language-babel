var Range = require("atom").Range;
var Point = require("atom").Point;

var fs = require("fs-plus");
var path = require("path");
var CreateTtlGrammar = require("../lib/create-ttl-grammar");

describe("Create Ttl Grammar", () => {
  var ttlGrammar = null;

  beforeEach(() => {
    waitsForPromise(() => {
      return atom.packages.activatePackage("language-babel");
    });

    return runs(() => {
      ttlGrammar = new CreateTtlGrammar();
    });
  });

  afterEach(() => {
    ttlGrammar.destroy();
    delete ttlGrammar;
  });

  describe("::getTtlConfig", () => {
    return it(
      "should return an array containing the tagged template extensions configuration",
      () => {
        return expect(ttlGrammar.getTtlConfig()).toEqual(["Relay.QL:source.graphql", "gql:source.graphql"]);
      }
    );
  });

  describe("::generateTtlSHA256", () => {
    return it(
      "should return SHA256 hash of the tagged template extensions in the atom config",
      () => {
        return expect(ttlGrammar.generateTtlSHA256()).toEqual("2ecd223dafa053ad9e2fb3d386f6b889ff65d84f21fd4d091acc530ddad92ac3");
      }
    );
  });

  describe("::generateTtlGrammarFilename", () => {
    return it(
      "should return SHA256 hash of the tag extensions in the atom config",
      () => {
        expect(ttlGrammar.generateTtlGrammarFilename()).toEqual("ttl-2ecd223dafa053ad9e2fb3d386f6b889ff65d84f21fd4d091acc530ddad92ac3");
      }
    );
  });

  describe("::getGrammarPath", () => {
    return it(
      "should return an absolute path where the language-babel grammar files are",
      () => {
        expect(path.isAbsolute(ttlGrammar.getGrammarPath())).toEqual(true);
      }
    );
  });

  describe("::grammarFileAbsolute", () => {
    return it(
      "should return an absolute path with a filename ",
      () => {
        filename = ttlGrammar.grammarFileAbsolute("someFile");
        expect(path.parse(filename).name).toEqual("someFile");
      }
    );
  });

  describe("::getGrammarFiles", () => {
    return it(
      "should return a list of all language-babel grammar files containing Babel Language.json",
      () => {
        waitsForPromise(() => {
          return ttlGrammar.getGrammarFiles().then( (grammarFiles) => {
            expect(grammarFiles).toContain("Babel Language.json");
          })
        });
      }
    );
  });

  describe("::getTtlGrammarFiles", () => {
    return it(
      "should return a list of language-babel grammar with a ttl- prefix",
      () => {
        waitsForPromise(() => {
          return ttlGrammar.getTtlGrammarFiles().then( (grammarFiles) => {
            expect(grammarFiles).toContain("Babel Language.json");
          })
        });
      }
    );
  });

  describe("::grammarFileExists", () => {
    return it(
      "checks if a grammar file exists and is writable",
      () => {
        waitsForPromise(() => {
          return ttlGrammar.grammarFileExists("Babel Language.json").then( (grammarFile) => {
            expect(grammarFile).toBe(true);
          })
        });
      }
    );
  });


});
