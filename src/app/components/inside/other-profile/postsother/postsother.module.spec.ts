import { PostsotherModule } from './postsother.module';

describe('PostsotherModule', () => {
  let postsotherModule: PostsotherModule;

  beforeEach(() => {
    postsotherModule = new PostsotherModule();
  });

  it('should create an instance', () => {
    expect(postsotherModule).toBeTruthy();
  });
});
