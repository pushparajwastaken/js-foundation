Array.prototype.customForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
Array.prototype.forEachTwo = function (callback, thiscontext) {
  if (typeof callback !== "function") {
    throw "not a function";
  }

  const length = this.length;
  let i = 0;

  while (i < length) {
    if (this.hasOwnProperty) {
      callback.call(thiscontext, this[i], i, this);
    }
    i++;
  }
};
