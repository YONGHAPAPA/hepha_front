
import {of} from 'rxjs';
import {switchMap, map, first} from 'rxjs/operators';


let prefix = 'test';

export const ADD1 = prefix + 'ADD';
export const ADD2 = `${prefix}/ADD`;
// export default {
//     ADD: '@prefix/ADD', 
// }


export const ADD3 = '@prefix/ADD';
export const TOGGLE = '@prefix/TOGGLE';
// export default ({
//     ADD: '@prefix/ADD',
// } as const)





export const switch_test = () => {
    console.log('switch_test');

    const $switched = of(1, 2, 3).pipe(
         switchMap((x: number) => of(x, x**2))
         );
    
    $switched.subscribe(x => console.log(x));

    // const switched = of(1, 2, 3).pipe(
    //     switchMap((x: number) => of(x, x ** 2, x ** 3))
    //     );
    // switched.subscribe(x => console.log(x));
}

export const map_test = () => {
    //map(x => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`value : ${v}`));
    first()(of(1, 2, 3)).subscribe((v) => console.log(`value : ${v}`));
}




export type Unmutated = Readonly<{
    counterPairs: ReadonlyArray<Readonly<{
        immutableCount1: number, 
        immutableCount2: number,
    }>>,
}>;

const Temp = (t: Unmutated) => {
    //t.counterPairs[0].immutableCount1 = 1; //TS Error 발생 ReadOnly 이므로
    //t.counterPairs[0].immutableCount2 = 2; //TS Error 발생 ReadOnly 이므로....
}

function mumble(check: boolean){
    let x: number;
    //x;

}





