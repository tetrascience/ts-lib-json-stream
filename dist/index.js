"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonStringifyStream = void 0;
const stream_1 = require("stream");
function* arrayIterator(ary) {
    yield '[';
    for (let i = 0; i < ary.length; i++) {
        yield* itemIterator(ary[i]);
        if (i < ary.length - 1) {
            yield ',';
        }
    }
    yield ']';
}
function* objIterator(obj) {
    yield '{';
    const entries = Object.entries(obj);
    for (let i = 0; i < entries.length; i++) {
        const [key, val] = entries[i];
        // print key
        yield `"${key}":`;
        yield* itemIterator(val);
        if (i < entries.length - 1) {
            yield ',';
        }
    }
    yield '}';
}
function* itemIterator(item) {
    if (item === undefined || item === null) {
        yield 'null';
    }
    else if (typeof item === "string" || item instanceof String) {
        yield JSON.stringify(item);
    }
    else if (typeof item === 'object' || item instanceof Object) {
        Array.isArray(item) ? yield* arrayIterator(item) : yield* objIterator(item);
    }
    else {
        yield item.toString();
    }
}
function jsonStringifyStream(json) {
    return stream_1.Readable.from(itemIterator(json));
}
exports.jsonStringifyStream = jsonStringifyStream;
//# sourceMappingURL=index.js.map