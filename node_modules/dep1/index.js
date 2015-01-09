var Primus = require('primus');

try {
    var simple = require('sockjs-client-node');
} catch (e) {
    console.error(e);
}

try {
    var primus = Primus.require('sockjs-client-node');
} catch (e) {
    console.error(e);
}

console.log(simple);
console.log(primus);
