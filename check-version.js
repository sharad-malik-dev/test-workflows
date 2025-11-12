console.log('Node.js version:', process.version);
console.log('V8 version:', process.versions.v8);

const nodeVersion = process.versions.node.split('.').map(Number);
const majorVersion = nodeVersion[0];

console.log('Major version:', majorVersion);
console.log('\n=== Feature Support Check ===');

// Test Node 12+ features safely
function testNode12Features() {
  console.log('\n1. Testing Node 12+ features...');
  
  // String.prototype.matchAll (Node 12+)
  try {
    const text = 'test1 test2 test3';
    const matches = [...text.matchAll(/test\d/g)];
    console.log('   ✅ String.prototype.matchAll: Supported');
  } catch (error) {
    console.log('   ❌ String.prototype.matchAll: Not supported');
    return false;
  }
  
  // BigInt (Node 12+)
  try {
    const bigInt = BigInt(9007199254740993);
    console.log('   ✅ BigInt: Supported');
  } catch (error) {
    console.log('   ❌ BigInt: Not supported');
    return false;
  }
  
  // Promise.allSettled (Node 12+)
  try {
    if (typeof Promise.allSettled === 'function') {
      console.log('   ✅ Promise.allSettled: Supported');
    } else {
      console.log('   ❌ Promise.allSettled: Not supported');
      return false;
    }
  } catch (error) {
    console.log('   ❌ Promise.allSettled: Not supported');
    return false;
  }
  
  return true;
}

// Test Node 14+ features safely using Function constructor
function testNode14Features() {
  console.log('\n2. Testing Node 14+ features...');
  
  // Optional chaining (Node 14+)
  try {
    const testOptionalChaining = new Function('obj', 'return obj?.a?.b');
    const result = testOptionalChaining({ a: { b: 42 } });
    if (result === 42) {
      console.log('   ✅ Optional chaining: Supported');
    } else {
      console.log('   ❌ Optional chaining: Not working correctly');
    }
  } catch (error) {
    console.log('   ❌ Optional chaining: Not supported');
  }
  
  // Nullish coalescing (Node 14+)
  try {
    const testNullishCoalescing = new Function('a', 'return a ?? "default"');
    const result = testNullishCoalescing(null);
    if (result === 'default') {
      console.log('   ✅ Nullish coalescing: Supported');
    } else {
      console.log('   ❌ Nullish coalescing: Not working correctly');
    }
  } catch (error) {
    console.log('   ❌ Nullish coalescing: Not supported');
  }
}

// Main execution
if (majorVersion < 12) {
  console.log('❌ Node.js version too old. Requires 12+');
  process.exit(1);
}

const node12Supported = testNode12Features();
testNode14Features();

console.log('\n=== Summary ===');
if (node12Supported) {
  console.log('✅ All Node 12+ features are supported');
  if (majorVersion >= 14) {
    console.log('✅ All Node 14+ features are supported');
  } else {
    console.log('⚠️  Node 14+ features require version 14 or higher');
  }
  console.log('🎉 Node.js version is compatible!');
} else {
  console.log('❌ Some Node 12+ features are not supported');
  process.exit(1);
}
