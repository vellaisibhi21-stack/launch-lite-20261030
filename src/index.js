function add(a, b) {
  return a + b;
}

function greet(name) {
  return `Hello, ${name}!`;
}

function farewell(name) {
  return name ? `Goodbye, ${name}!` : 'Goodbye!';
}

module.exports = { add, greet, farewell };

if (require.main === module) {
  console.log(greet('LaneSync'));
}
