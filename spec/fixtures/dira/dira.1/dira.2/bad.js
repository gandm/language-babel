var QuadraticCalculator = React.createClass({
  getInitialState: function() {
    console.log("test")
    return {
      a: 1,
      b: 3,
      c: -4
    };
  },

  /**
   * This function will be re-bound in render multiple times. Each .bind() will
   * create a new function that calls this with the appropriate key as well as
   * the event. The key is the key in the state object that the value should be
   * mapped from.
   */
  handleInputChange: function(key, event) {
    var partialState = {};
    partialState[key] = parseFloat(event.target.value);
    this.setState(partialState);
  },

  render: function() {
    var a = this.state.a;
    var b = this.state.b;
    var c = this.state.c;
    var root = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
    var denominator = 2 * a;
    var x1 = (-b + root) / denominator;
    var x2 = (-b - root) / denominator;
    return { // ill formed object
});

React.render(
  document.getElementById('container')
);

this is an error
