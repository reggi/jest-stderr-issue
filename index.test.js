const greeting = require('./index.js')

test('greeting', function () {
  expect(greeting()).toBe('Hello World')
})