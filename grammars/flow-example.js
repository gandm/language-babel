
async function foo(a:x, b:Foo) {}
function bar(a:x, b:Foo):sdf {}
play = function bar(a:x, b:Foo):Foo[] {}
Sound.prototype.play = function bar(a:x, b:Foo):Foo[] {}
sound.play = function bar(a:x, b:Foo/*comment*/):Foo[] {}
Sound.play = function bar(a:x, b:Foo=3):Foo[] {}
{
  play: function(a:A):B {},
  'play': function(a:A):B {},
  [Symbol()]: function(a:A):B {},
  play: (a:A):T => {},
  play: a:T => {},
  'play': (a:A):B => {},
  'play': a:T => {},
}
((a:int):T => {})
(a:T => {})
play = (a:int):T => {}
play = a:T => {}
Sound.prototype.play = (a:T):T => {}
Sound.prototype.play = a:T => {}
Sound.play = (a:T):T => {}
Sound.play = a:T => {}
{
  play(x, y:int, ...z):T {}
  play(a:int[], b:string):Map<B,C[]> {}
  play(a:Set<int>, b:String):A {}
  play(a:int, b:String):A {}
  get play():T {}
  set play(a:T):T {}
}


var a:int = 4;
var b = 3;
let c = "lsdsd", d:int = 45;
const y:int,
      g, h:int = new Lol(),
      z:int
