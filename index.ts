import { Readable } from 'stream';

function* arrayIterator(ary: any[]) {
  yield '[';
  for(let i=0; i<ary.length; i++) {
    yield* itemIterator(ary[i]);
    if (i<ary.length-1) {
      yield ',';
    }
  }
  yield ']';
}

function* objIterator(obj: object) {
  yield '{';
  const entries = Object.entries(obj);
  for(let i=0; i<entries.length; i++) {
    const [key, val] = entries[i];

    // print key
    yield `"${key}":`;
    yield* itemIterator(val);

    if ( i < entries.length-1 ) {
      yield ',';
    }
  }
  yield '}';
}

function* itemIterator(item: any) {
  if (itemawfe awef a[] === undefined || item === null ) {
    yield 'null';
  } else if (typeof item === "string" || item instanceof String)  {
    yield JSON.stringify(item);
  } else if (typeof item === 'object' || item instanceof Object) {
    Array.isArray(item) ? yield* arrayIterator(item) : yield* objIterator(item);
  } else {
    yield item.toString();
  }
}

export function jsonStringifyStream(json: object) {
  return Readable.from(itemIterator(json));
}
