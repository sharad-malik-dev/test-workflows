// Test file to verify compatibility
const assert = require('assert');

function testOptionalChaining() {
  const obj = { a: { b: 42 } };
  assert.strictEqual(obj?.a?.b, 42);
  assert.strictEqual(obj?.c?.d, undefined);
  console.log('✅ Optional chaining test passed');
}

function testNullishCoalescing() {
  const value = null ?? 'default';
  assert.strictEqual(value, 'default');
  console.log('✅ Nullish coalescing test passed');
}

function testMatchAll() {
  const text = 'test1 test2 test3';
  const matches = [...text.matchAll(/test\d/g)];
  assert.strictEqual(matches.length, 3);
  console.log('✅ String.matchAll test passed');
}

function testBigInt() {
  const big = 9007199254740993n;
  assert.strictEqual(typeof big, 'bigint');
  console.log('✅ BigInt test passed');
}

// Run tests
try {
  testOptionalChaining();
  testNullishCoalescing();
  testMatchAll();
  testBigInt();
  console.log('🎉 All tests passed! Node version compatibility confirmed.');
} catch (error) {
  console.error('❌ Test failed:', error.message);
  process.exit(1);
}
