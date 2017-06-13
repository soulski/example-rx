"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const Rx_1 = require("rxjs/Rx");
const readdirAsync = Rx_1.Observable.bindNodeCallback(fs_1.readdir);
const lstatAsync = Rx_1.Observable.bindNodeCallback(fs_1.lstat);
Rx_1.Observable.of('node_modules')
    .mergeMap(path => readdirAsync(path))
    .map((dirs) => {
    console.log(dirs);
    const tasks = dirs.map(lstatAsync);
    return Rx_1.Observable.merge(tasks);
})
    .subscribe((stats) => {
    console.log(stats);
});
//# sourceMappingURL=index.js.map