describe('the canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true('The canary did not fly through the infrastructure tunnel.');
  });
});
