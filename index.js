// Check Node.js version first
const nodeVersion = process.versions.node.split('.').map(Number);
const majorVersion = nodeVersion[0];

console.log('Running Node.js version:', process.version);

if (majorVersion < 12) {
  console.error('❌ This application requires Node.js 12 or higher');
  console.error('❌ Current version:', process.version);
  process.exit(1);
}

console.log('✅ Node.js version check passed\n');

// Safe implementation that works across Node 12-16
function demonstrateFeatures() {
  console.log('=== Demonstrating Node.js 12-16 Features ===\n');
  
  // Node 12+ Features (safe for all versions 12-16)
  console.log('1. Node 12+ Features:');
  
  // String.prototype.matchAll
  const text = 'Hello World Hello Universe';
  const matches = [...text.matchAll(/Hello/g)];
  console.log('   📝 String.matchAll: Found', matches.length, 'matches');
  
  // BigInt
  const bigIntValue = BigInt('123456789012345678901234567890');
  console.log('   🔢 BigInt: Large number support -', bigIntValue.toString() + 'n');
  
  // Promise.allSettled
  const promises = [
    Promise.resolve('Success ✅'),
    Promise.reject('Error ❌'),
    Promise.resolve('Another success ✅')
  ];
  
  Promise.allSettled(promises).then(results => {
    console.log('   ⚡ Promise.allSettled:');
    results.forEach((result, index) => {
      const status = result.status === 'fulfilled' ? '✓' : '✗';
      console.log(`     Promise ${index}: ${status} ${result.status}`);
    });
    
    // Node 14+ Features - Use dynamic evaluation to avoid syntax errors in Node 12/13
    console.log('\n2. Node 14+ Features:');
    
    // Optional chaining - safe check
    try {
      const testOptionalChaining = new Function('obj', 'return obj?.profile?.name');
      const userName = testOptionalChaining({ profile: { name: 'John Doe' } });
      console.log('   🔗 Optional chaining: User name -', userName);
    } catch (error) {
      console.log('   🔗 Optional chaining: Not available in Node', majorVersion);
    }
    
    // Nullish coalescing - safe check  
    try {
      const testNullishCoalescing = new Function('value', 'return value ?? "default value"');
      const result1 = testNullishCoalescing(null);
      const result2 = testNullishCoalescing('actual value');
      console.log('   🎯 Nullish coalescing: null ->', result1);
      console.log('   🎯 Nullish coalescing: "actual value" ->', result2);
    } catch (error) {
      console.log('   🎯 Nullish coalescing: Not available in Node', majorVersion);
    }
    
    console.log('\n=== Final Result ===');
    console.log('🎉 Application running successfully on Node.js', process.version);
    console.log('✅ Compatible with Node.js versions 12, 13, 14, 15, and 16');
    
  }).catch(error => {
    console.log('   ❌ Promise.allSettled failed:', error.message);
  });
}

demonstrateFeatures();
