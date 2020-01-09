const myText = 'Hello World';

test('det måste ha en string', () => {
  expect(myText).toMatch('Hello World');
});
