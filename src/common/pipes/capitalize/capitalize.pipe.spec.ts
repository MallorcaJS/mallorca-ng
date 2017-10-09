import { MCapitalizePipe } from './capitalize.pipe';
describe('MCapitalizePipe', () => {
    let pipe: MCapitalizePipe;
    beforeEach(() => {
       pipe = new MCapitalizePipe();
    });
    it('should capitalize single word', () => {
       expect(pipe.transform('abcd', false)).toEqual('Abcd');
    });
    it('should capitalize first word from sentence', () => {
       expect(pipe.transform('abcd aa', false)).toEqual('Abcd aa');
       expect(pipe.transform('abCD aA', false)).toEqual('Abcd aa');
    });
    it('should capitalize each word from sentence', () => {
       expect(pipe.transform('abCD aA', true)).toEqual('Abcd Aa');
    });
    it('should capitalize when undefined', () => {
       expect(pipe.transform('abCD aA', undefined)).toEqual('Abcd aa');
    });
});
