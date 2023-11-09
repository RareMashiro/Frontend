import {multiply} from './two.js';
import {createObject} from './two.js';
export {getUrl} from './two.js';
export {default as Help} from './two.js';

// ! реэкспортируемые файлы не инициализируются здесь

let obj = new createObject(11, 14);

multiply(obj.first, obj.second);