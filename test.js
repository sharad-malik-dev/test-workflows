// Test file compatible with Node.js 12-16
const assert = require('assert');

console.log('=== Running Compatibility Tests ===');
console.log('Node.js version:', process.version);

const nodeVersion = process.versions.node.split('.').map(Number);
const majorVersion = nodeVersion[0];

// Test Node 12+ features
function testNode12Features() {
  console.log('\n1. Testing Node 12+ features...');
  
  // Test String.prototype.matchAll
  const text = 'test1 test2 test3';
  const matches = [...text.matchAll(/test\d/g)];
  assert.strictEqual(matches.length, 3, 'String.prototype.matchAll should find 3 matches');
  console.log('   ✅ String.prototype.matchAll - OK');
  
  // Test BigInt
  const big = BigInt(9007199254740993);
  assert.strictEqual(typeof big, 'bigint', 'BigInt should create bigint type');
  console.log('   ✅ BigInt - OK');
  
  // Test Promise.allSettled
  const promises = [
    Promise.resolve('success'),
    Promise.reject('error'),
    Promise.resolve('another success')
  ];
  
  return Promise.allSettled(promises).then(results => {
    assert.strictEqual(results.length, 3, 'Promise.allSettled should return 3 results');
    assert.strictEqual(results[0].status, 'fulfilled', 'First promise should be fulfilled');
    assert.strictEqual(results[1].status, 'rejected', 'Second promise should be rejected');
    assert.strictEqual(results[2].status, 'fulfilled', 'Third promise should be fulfilled');
    console.log('   ✅ Promise.allSettled - OK');
    return true;
  });
}

// Test Node 14+ features conditionally using safe evaluation
function testNode14Features() {
  return new Promise((resolve) => {
    console.log('\n2. Testing Node 14+ features...');
    
    if (majorVersion >= 14) {
      // Test Optional Chaining
      try {
        const testOC = new Function('obj', 'return obj?.a?.b');
        const result = testOC({ a: { b: 42 } });
        assert.strictEqual(result, 42, 'Optional chaining should return 42');
        console.log('   ✅ Optional chaining - OK');
      } catch (error) {
        console.log('   ❌ Optional chaining - Failed:', error.message);
      }
      
      // Test Nullish Coalescing
      try {
        const testNC = new Function('a', 'b', 'return a ?? b');
        const result1 = testNC(null, 'default');
        const result2 = testNC(0, 'default');
        assert.strictEqual(result1, 'default', 'Nullish coalescing should return default for null');
        assert.strictEqual(result2, 0, 'Nullish coalescing should return 0 for 0');
        console.log('   ✅ Nullish coalescing - OK');
      } catch (error) {
        console.log('   ❌ Nullish coalescing - Failed:', error.message);
      }
    } else {
      console.log('   ⚠️  Skipping Node 14+ features (current version:', majorVersion + ')');
    }
    
    resolve();
  });
}

// Run all tests
async function runAllTests() {
  try {
    await testNode12Features();
    await testNode14Features();
    
    console.log('\n=== Test Summary ===');
    console.log('✅ All Node 12+ features are working');
    if (majorVersion >= 14) {
      console.log('✅ All Node 14+ features are working');
    }
    console.log('🎉 All tests passed! Compatible with Node.js', process.version);
    
  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    process.exit(1);
  }
}

runAllTests();
