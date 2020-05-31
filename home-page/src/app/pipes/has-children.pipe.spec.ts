import { HasChildrenPipe } from './has-children.pipe';

describe('HasChildrenPipe', () => {
  it('create an instance', () => {
    const pipe = new HasChildrenPipe();
    expect(pipe).toBeTruthy();
  });
});
