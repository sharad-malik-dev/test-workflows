// Check Node.js version first
const nodeVersion = process.versions.node.split('.').map(Number);
const majorVersion = nodeVersion[0];

console.log('Running Node.js version:', process.version);

if (majorVersion < 12) {
  console.error('❌ This application requires Node.js 12 or higher');
  console.error('❌ Current version:', process.version);
  console.error('❌ Please upgrade your Node.js version');
  process.exit(1);
}

console.log('✅ Node.js version check passed');

// Features that work in Node 12+ but not in Node 11
console.log('\n=== Testing Node 12+ Features ===\n');

// 1. Optional chaining (introduced in Node 14)
console.log('1. Testing optional chaining...');
const user = {
  profile: {
    name: 'John'
  }
};
console.log('   Result:', user?.profile?.name);
console.log('   ✅ Optional chaining works\n');

// 2. Nullish coalescing (introduced in Node 14)
console.log('2. Testing nullish coalescing...');
const settings = {
  theme: null
};
console.log('   Result:', settings.theme ?? 'default-theme');
console.log('   ✅ Nullish coalescing works\n');

// 3. String.prototype.matchAll (introduced in Node 12)
console.log('3. Testing String.prototype.matchAll...');
const text = 'Hello World Hello Universe';
const matches = [...text.matchAll(/Hello/g)];
console.log('   Found', matches.length, 'matches');
console.log('   ✅ String.prototype.matchAll works\n');

// 4. Promise.allSettled (introduced in Node 12)
console.log('4. Testing Promise.allSettled...');
const promises = [
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success')
];

Promise.allSettled(promises).then(results => {
  console.log('   Results:');
  results.forEach((result, index) => {
    console.log(`     Promise ${index}:`, result.status);
  });
  console.log('   ✅ Promise.allSettled works\n');
  
  // 5. BigInt (stable in Node 12+)
  console.log('5. Testing BigInt...');
  const bigIntValue = 123456789012345678901234567890n;
  console.log('   Result:', bigIntValue + 1n);
  console.log('   ✅ BigInt works\n');
  
  console.log('🎉 All Node 12+ features working correctly!');
}).catch(error => {
  console.log('   ❌ Promise.allSettled failed:', error.message);
});
