describe('my first test', () => {
  let t: boolean ;

  beforeEach(() => {
    t = false;
  });

  it('it should be true', ()=> {
    t = true;
    expect(t).toBeTruthy();
  });
});
