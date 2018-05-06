const { expect, equality, membership } = require('../../lib/test-lib'),
      { headlineMaker } = require('../../src/componentMaker');

  expect(equality, headlineMaker(['one', 'two']), '<li>one</li><li>two</li>');
