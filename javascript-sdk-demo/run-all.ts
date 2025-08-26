import { initializeAgent } from './shared';
import { runSwitchLayerTest } from './switch_layer';

// Add all your test functions here
const testSuites = [
  runSwitchLayerTest,
  // e.g., runLoginTest,
  // e.g., runSearchTest,
];

Promise.resolve(
  (async () => {
    let agent;
    try {
      // Initialize the agent once for all tests
      const { agent: initializedAgent } = await initializeAgent();
      agent = initializedAgent;

      // Run all test suites sequentially
      for (const runTest of testSuites) {
        await runTest(agent);
      }

      console.log('🎉 All tests completed successfully!');

    } catch (error) {
      console.error('🔥 A test has failed. Halting execution.', error);
      process.exit(1); // Exit with a failure code
    } finally {
      // Disconnect seems not available in the provided shared code.
      // If a disconnect method is added, it should be called here.
    }
  })()
);
