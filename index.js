// Features that work in Node 12+ but not in Node 11

// 1. Optional chaining (introduced in Node 14)
const user = {
  profile: {
    name: 'John'
  }
};
console.log('Optional chaining:', user?.profile?.name);

// 2. Nullish coalescing (introduced in Node 14)
const settings = {
  theme: null
};
console.log('Nullish coalescing:', settings.theme ?? 'default-theme');

// 3. String.prototype.matchAll (introduced in Node 12)
const text = 'Hello World Hello Universe';
const matches = [...text.matchAll(/Hello/g)];
console.log('String matchAll:', matches.length, 'matches found');

// 4. Promise.allSettled (introduced in Node 12)
const promises = [
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success')
];

Promise.allSettled(promises).then(results => {
  console.log('Promise.allSettled:');
  results.forEach((result, index) => {
    console.log(`  Promise ${index}:`, result.status);
  });
});

// 5. BigInt (stable in Node 12+)
const bigIntValue = 123456789012345678901234567890n;
console.log('BigInt usage:', bigIntValue + 1n);

// 6. Dynamic import (stable in Node 13.2+)
// This would fail in Node 11
async function dynamicImportDemo() {
  try {
    const util = await import('util');
    console.log('Dynamic import: util module loaded successfully');
  } catch (error) {
    console.error('Dynamic import failed:', error.message);
  }
}
dynamicImportDemo();

// 7. Private class fields (introduced in Node 12)
class ExampleClass {
  #privateField = 'This is private';
  
  getPrivateField() {
    return this.#privateField;
  }
}

const instance = new ExampleClass();
console.log('Private class field:', instance.getPrivateField());

console.log('✅ All Node 12+ features working correctly!');
