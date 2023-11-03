let cache = new WeakMap();

// calculate and remember the result
function process(obj) {
  if (!cache.has(obj)) {
    let result = obj;

    cache.set(obj, result);
    return result;
  }

  return cache.get(obj);
}
