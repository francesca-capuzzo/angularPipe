import { SortUsersByRankingPipe } from './sort-users-by-ranking.pipe';

describe('SortUsersByRankingPipe', () => {
  it('create an instance', () => {
    const pipe = new SortUsersByRankingPipe();
    expect(pipe).toBeTruthy();
  });
});
