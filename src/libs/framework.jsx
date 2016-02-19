import assign from 'object-assign';
import ucfirst from 'ucfirst';

let includes = ['store', 'model', 'view', 'lib'];
let basePath = './../';

includes.map((i) => {
  global[`rq${ucfirst(i)}`] = function(name) {
    let mod = require('./../' + i + 's/' + name + '.jsx');
    return (mod.default !== undefined) ? mod.default : mod;
  }
});
