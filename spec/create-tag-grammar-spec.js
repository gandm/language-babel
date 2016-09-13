var Range = require("atom").Range;
var Point = require("atom").Point;

var fs = require("fs-plus");
var path = require("path");
var CreateTtlGrammar = require("../lib/create-ttl-grammar");

describe("Create Ttl Grammar", function() {
  var ttlGrammar = null;

  beforeEach(function() {
    waitsForPromise(function() {
      return atom.packages.activatePackage("language-babel");
    });

    return runs(function() {
      ttlGrammar = new CreateTtlGrammar();
    });
  });

  afterEach(function() {
    ttlGrammar.destroy();
    delete ttlGrammar;
  });

  describe("::getTtlConfig", function() {
    console.log(ttlGrammar);

    return it(
      "should return an array containing the tagged template extensions configuration",
      function() {
        return expect(ttlGrammar.getTtlConfig()).toEqual(["Relay.QL:source.graphql", "gql:source.graphql"]);
      }
    );
  });

  describe("::generateTtlSHA256", function() {
    return it(
      "should return SHA256 hash of the tagged template extensions in the atom config",
      function() {
        return expect(ttlGrammar.generateTtlSHA256()).toEqual("2ecd223dafa053ad9e2fb3d386f6b889ff65d84f21fd4d091acc530ddad92ac3");
      }
    );
  });

  describe("::generateTtlGrammarFilename", function() {
    return it(
      "should return SHA256 hash of the tag extensions in the atom config",
      function() {
        return expect(ttlGrammar.generateTtlGrammarFilename()).toEqual("ttl-2ecd223dafa053ad9e2fb3d386f6b889ff65d84f21fd4d091acc530ddad92ac3");
      }
    );
  });

  describe("::getGrammarPath", function() {
    return it(
      "should return an absolute path where the language-babel grammar files are",
      function() {
        return expect(path.isAbsolute(ttlGrammar.getGrammarPath())).toEqual(true);
      }
    );
  });

  describe("::getGrammarFiles", function() {
    return it(
      "should return a list of all language-babel grammar files containing Babel Language.json",
      function() {
        waitsForPromise(function() {
          ttlGrammar.getGrammarFiles().then(grammarFiles => {
            expect(grammarFiles)..toContain("Babel Language.json");
          })
        });
      }
    );
  });

  return describe("::getTtlGrammarFiles", function() {
    return it(
      "should return a list of language-babel grammar with a ttl- prefix",
      function() {
        waitsForPromise(function() {
          ttlGrammar.getGrammarFiles().then(grammarFiles => {
            expect(grammarFiles)..toContain("Babel Language.json");
          })
        });
      }
    );
  });
