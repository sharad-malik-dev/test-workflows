console.log('Node.js version:', process.version);
console.log('V8 version:', process.versions.v8);

// Test optional chaining
try {
  const test = {};
  console.log('Optional chaining test:', test?.a?.b);
  console.log('✅ Optional chaining is supported');
} catch (error) {
  console.log('❌ Optional chaining is NOT supported:', error.message);
}

// Test nullish coalescing
try {
  const result = null ?? 'default';
  console.log('Nullish coalescing test:', result);
  console.log('✅ Nullish coalescing is supported');
} catch (error) {
  console.log('❌ Nullish coalescing is NOT supported:', error.message);
}
