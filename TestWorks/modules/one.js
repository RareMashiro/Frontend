import {multiply} from './two.js';
import { createObject } from './two.js';
import { getUrl } from './two.js';

let obj = new createObject(11, 14);

multiply(obj.first, obj.second);

getUrl();