import { MReverseStrPipe } from './reverse-str.pipe';
describe('MReverseStrPipe', () => {
  let pipe: MReverseStrPipe;
  beforeEach(() => {
    pipe = new MReverseStrPipe();
  })
  it('should reverse string', () => {
    expect(pipe.transform('abcd')).toEqual('dcba');
    expect(pipe.transform('abcd aa')).toEqual('aa dcba');
    expect(pipe.transform('hello world')).toEqual('dlrow olleh');
  })
  it('should reverse string when complex chars', () => {
    expect(pipe.transform('foo 𝌆 bar mañana mañana')).toEqual(
      'anañam anañam rab 𝌆 oof'
    );
  })
  it('should return the value unchanged when single letter', () => {
    expect(pipe.transform('a')).toEqual('a');
  })
  it('should return value unchanged when is not string', () => {
    expect(pipe.transform(1)).toEqual(1);
  })
})
