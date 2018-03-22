import {LowerCasePipe} from '@angular/common';

describe('LowerCasePipe tests',()=>{
    let pipe = new LowerCasePipe();

    it('Should capitalise',()=>{
        expect(pipe.transform('MEAN')).toEqual('mean');
    })
})