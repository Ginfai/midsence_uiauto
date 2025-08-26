import { initializeAgent } from './shared.js';
import * as fs from 'fs/promises';
import * as path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

Promise.resolve(
  (async () => {
    let agent;
    try {
      // Initialize the agent once for all tests
      const { agent: initializedAgent } = await initializeAgent();
      agent = initializedAgent;

      // ESM-compatible way to get the current directory
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);

      // Find all test files
      const allFiles = await fs.readdir(__dirname);
      const testFiles = allFiles.filter(file => file.startsWith('test_') && file.endsWith('.ts'));

      if (testFiles.length === 0) {
        console.log('No test files found. Exiting.');
        return;
      }
      
      console.log(`Found ${testFiles.length} test file(s):`, testFiles);

      // Run all found test suites sequentially
      for (const file of testFiles) {
        // Construct a full, absolute path and then convert it to a file URL
        const absolutePath = path.join(__dirname, file);
        const fileUrl = pathToFileURL(absolutePath).href;
        
        const testModule = await import(fileUrl);

        if (typeof testModule.default === 'function') {
          console.log(`\n--- Running test from: ${file} ---`);
          await testModule.default(agent);
        } else {
          console.warn(`⚠️  Warning: No default export function found in ${file}. Skipping.`);
        }
      }

      console.log('\n🎉 All tests completed successfully!');

    } catch (error) {
      console.error('🔥 A test has failed. Halting execution.', error);
      process.exit(1); // Exit with a failure code
    } finally {
      // If a disconnect method is added, it should be called here.
    }
  })()
);
