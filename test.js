const getGreeting = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('num check', () => {
  expect(numCheck(2)).toBe(4);
  
});
