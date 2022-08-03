//Common Js only file is module (by default)
//Modules - Encapsulate code (only share minimum )

const names = require('./4-names');
const sayHello = require('./5-utils');
const data = require('./6-alternative-flavor');
//console.log(data)
require('./7-mind-grenade');
sayHello('Ebube')
sayHello(names.john)
sayHello(names.peter)
