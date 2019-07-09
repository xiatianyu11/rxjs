import {from } from 'rxjs'
import { map } from 'rxjs/operators'

from([1,3,5]).pipe(map(x => x*x)).subscribe(val => console.log(val))
