'use strict';

let dosomething = (() => {
  var _ref = _asyncToGenerator(function* () {
    try {
      var _path = path.join(__dirname, "../tmp/hello1.txt");

      yield fsp.writeFile(_path, 'hello world');

      var contents = yield fsp.readFile(_path, { encoding: 'utf8' });

      console.log(contents);
    } catch (err) {
      console.log(err);
    }
  });

  return function dosomething() {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const fsp = require('fs-promise');
const path = require('path');

dosomething();