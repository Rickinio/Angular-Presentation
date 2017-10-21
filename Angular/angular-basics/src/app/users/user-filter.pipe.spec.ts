import { UserFilterPipe } from './user-filter.pipe';

describe('USerFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new UserFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
