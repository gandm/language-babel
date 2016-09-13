var Range = require("atom").Range;
var Point = require("atom").Point;

var fs = require("fs-plus");
var path = require("path");
var CreateTtlGrammar = require("../lib/create-ttl-grammar");

describe("Create Tag Grammar", function() {
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

  describe("::getTagConfig", function() {
    console.log(ttlGrammar);

    return it(
      "should return an array containing the tagged template extensions configuration",
      function() {
        return expect(ttlGrammar.getTagConfig()).toEqual(["Relay.QL:source.graphql", "gql:source.graphql"]);
      }
    );
  });

  describe("::generateTagSHA256", function() {
    return it(
      "should return SHA256 hash of the tagged template extensions in the atom config",
      function() {
        return expect(ttlGrammar.generateTagSHA256()).toEqual("2ecd223dafa053ad9e2fb3d386f6b889ff65d84f21fd4d091acc530ddad92ac3");
      }
    );
  });

  describe("::generateTagGrammarFilename", function() {
    return it(
      "should return SHA256 hash of the tag extensions in the atom config",
      function() {
        return expect(ttlGrammar.generateTagGrammarFilename()).toEqual("ttl-2ecd223dafa053ad9e2fb3d386f6b889ff65d84f21fd4d091acc530ddad92ac3");
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
      "should return a list of language-babel grammar containing Babel Language.json",
      function() {
        return expect(ttlGrammar.getGrammarFiles()).toContain("Babel Language.json");
      }
    );
  });

  return describe("::getTagGrammarFiles", function() {
    return it(
      "should return a list of language-babel grammar containing Babel Language.json",
      function() {
        return expect(ttlGrammar.getTagGrammarFiles()).toContain("Babel Language.json");
      }
    );
  });
});
