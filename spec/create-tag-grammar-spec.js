var Range = require("atom").Range;
var Point = require("atom").Point;

var fs = require("fs-plus");
var path = require("path");
var CreateTagGrammar = require("../lib/create-tag-grammar");

describe("Create Tag Grammar", function() {
  var tagGrammar = null;

  beforeEach(function() {
    waitsForPromise(function() {
      return atom.packages.activatePackage("language-babel");
    });

    return runs(function() {
      tagGrammar = new CreateTagGrammar();
    });
  });

  describe("::getTagConfig", function() {
    console.log(tagGrammar);

    return it(
      "should return an array containing the tag extensions configuration",
      function() {
        return expect(tagGrammar.getTagConfig()).toEqual(["Relay.QL:source.graphql", "gql:source.graphql"]);
      }
    );
  });

  describe("::generateTagSHA256", function() {
    return it(
      "should return SHA256 hash of the tag extensions in the atom config",
      function() {
        return expect(tagGrammar.generateTagSHA256()).toEqual("2ecd223dafa053ad9e2fb3d386f6b889ff65d84f21fd4d091acc530ddad92ac3");
      }
    );
  });

  describe("::generateTagGrammarFilename", function() {
    return it(
      "should return SHA256 hash of the tag extensions in the atom config",
      function() {
        return expect(tagGrammar.generateTagGrammarFilename()).toEqual("tags-2ecd223dafa053ad9e2fb3d386f6b889ff65d84f21fd4d091acc530ddad92ac3");
      }
    );
  });

  describe("::getGrammarPath", function() {
    return it(
      "should return an absolute path where the language-babel grammar files are",
      function() {
        return expect(path.isAbsolute(tagGrammar.getGrammarPath())).toEqual(true);
      }
    );
  });

  describe("::getGrammarFiles", function() {
    return it(
      "should return a list of language-babel grammar containing Babel Language.json",
      function() {
        return expect(tagGrammar.getGrammarFiles()).toContain("Babel Language.json");
      }
    );
  });

  return describe("::getTagGrammarFiles", function() {
    return it(
      "should return a list of language-babel grammar containing Babel Language.json",
      function() {
        return expect(tagGrammar.getTagGrammarFiles()).toContain("Babel Language.json");
      }
    );
  });
});
