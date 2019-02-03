import { StrengthPipe } from './strength.pipe';

describe('Strength pipe', () => {

  it('should display weak if strength is 5', () => {
    const pipe: StrengthPipe = new StrengthPipe();
    expect(pipe.transform(5)).toEqual('5 (weak)');
  });

  it('should display strong if strength is 10', () => {
    const pipe: StrengthPipe = new StrengthPipe();
    expect(pipe.transform(10)).toEqual('10 (strong)');
  });

  it('should display unbelievable if strength is 20', () => {
    const pipe: StrengthPipe = new StrengthPipe();
    expect(pipe.transform(20)).toEqual('20 (unbelievable)');
  });
});
