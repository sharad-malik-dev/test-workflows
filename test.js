// Test file to verify Node 12+ compatibility
const assert = require('assert');

function testNode12Features() {
  console.log('Testing Node 12+ features...');
  
  // Test String.prototype.matchAll (Node 12+)
  const text = 'test1 test2 test3';
  const matches = [...text.matchAll(/test\d/g)];
  assert.strictEqual(matches.length, 3);
  console.log('✅ String.matchAll works (Node 12+)');
  
  // Test BigInt (Node 12+)
  const big = 9007199254740993n;
  assert.strictEqual(typeof big, 'bigint');
  console.log('✅ BigInt works (Node 12+)');
  
  // Test Promise.allSettled (Node 12+)
  const promises = [Promise.resolve(1), Promise.reject('error')];
  return Promise.allSettled(promises).then(results => {
    assert.strictEqual(results.length, 2);
    console.log('✅ Promise.allSettled works (Node 12+)');
  });
}

function testNode14Features() {
  console.log('Testing Node 14+ features...');
  
  // Test Optional Chaining (Node 14+)
  const obj = { a: { b: 42 } };
  assert.strictEqual(obj?.a?.b, 42);
  assert.strictEqual(obj?.c?.d, undefined);
  console.log('✅ Optional chaining works (Node 14+)');
  
  // Test Nullish Coalescing (Node 14+)
  const value = null ?? 'default';
  assert.strictEqual(value, 'default');
  console.log('✅ Nullish coalescing works (Node 14+)');
}

// Run tests
async function runTests() {
  try {
    await testNode12Features();
    testNode14Features();
    console.log('🎉 All tests passed! This code requires Node 12+.');
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.log('💡 This indicates you are running Node 11 or earlier');
    process.exit(1);
  }
}

runTests();
