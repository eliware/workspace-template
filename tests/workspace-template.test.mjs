test('workspace-template.mjs can be imported without error', async () => {
  process.env.LOG_LEVEL = 'none';
  await import('../workspace-template.mjs');
  expect(true).toBe(true);
});
