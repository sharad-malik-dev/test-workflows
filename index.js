// Features that work in Node 12+ but not in Node 11

// 1. Optional chaining (introduced in Node 14) - This will fail in Node 11
const user = {
  profile: {
    name: 'John'
  }
};
console.log('Optional chaining:', user?.profile?.name);

// 2. Nullish coalescing (introduced in Node 14) - This will fail in Node 11
const settings = {
  theme: null
};
console.log('Nullish coalescing:', settings.theme ?? 'default-theme');

// 3. String.prototype.matchAll (introduced in Node 12)
const text = 'Hello World Hello Universe';
const matches = [...text.matchAll(/Hello/g)];
console.log('String matchAll: Found', matches.length, 'matches');

// 4. Promise.allSettled (introduced in Node 12)
const promises = [
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success')
];

Promise.allSettled(promises).then(results => {
  console.log('Promise.allSettled results:');
  results.forEach((result, index) => {
    console.log(`  Promise ${index}:`, result.status);
  });
});

// 5. BigInt (stable in Node 12+)
const bigIntValue = 123456789012345678901234567890n;
console.log('BigInt usage:', bigIntValue + 1n);

console.log('@ All Node 12+ features working correctly!');
