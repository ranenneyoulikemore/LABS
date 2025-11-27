'use strict';

function seq(...funcs) {
    let composed = compose(funcs);

    function next(arg) {
        if (typeof arg === "number") {
            return composed(arg);
        }
        composed = compose([arg], composed);
        return next;
    }

    return next;
}

function compose(newFuncs, existing = x => x) {
    return newFuncs.reduce(
        (acc, fn) => x => acc(fn(x)),
        existing
    );
}

console.log(
    seq(x => x + 7)
       (x => x * 2)(5)
);

console.log(
    seq(x => x * 2)
       (x => x + 7)(5)
);

console.log(
    seq(x => x + 1)
       (x => x * 2)
       (x => x / 3)
       (x => x - 4)(7)
);