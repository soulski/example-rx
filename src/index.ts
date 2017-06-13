import { readdir, lstat } from 'fs';
import { Observable } from 'rxjs/Rx';

const readdirAsync = Observable.bindNodeCallback(readdir);
const lstatAsync = Observable.bindNodeCallback(lstat);

const path = Observable.of('node_modules')
    .mergeMap(path => readdirAsync(path));

    .map((dirs: string[]) => {
        console.log(dirs);
        const tasks = dirs.map(lstatAsync);
        return Observable.merge(tasks);
    })
    .subscribe((stats) => {
        console.log(stats);    
    });

