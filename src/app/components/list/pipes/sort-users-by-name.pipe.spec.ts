import { SortUsersByNamePipe } from './sort-users-by-name.pipe';

describe('SortUsersByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new SortUsersByNamePipe();
    expect(pipe).toBeTruthy();
  });
});
