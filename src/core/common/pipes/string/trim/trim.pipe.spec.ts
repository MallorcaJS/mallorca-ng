import { MTrimPipe } from './trim.pipe';
describe('MTrimPipe', () => {
  let pipe: MTrimPipe;
  beforeEach(() => {
    pipe = new MTrimPipe();
  })
  it('should return trimmed string', () => {
    const result = pipe.transform('  aaa   ')
    expect(result).toEqual('aaa');
  })
  it('should return the value unchanged when is not string', () => {
    expect(pipe.transform(1)).toEqual(1);
  })
})
