import { DoubleAmountPipe } from './double-amount.pipe';

describe('DoubleAmountPipe', () => {
  it('create an instance', () => {
    const pipe = new DoubleAmountPipe();
    expect(pipe).toBeTruthy();
  });
});
