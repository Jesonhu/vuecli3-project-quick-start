import cTools from './cTools';

const { getFullYear } = cTools.Date;
let fullYear = getFullYear();
const text = `COPYRIGHT © ${fullYear}　技术支持：xx科技`;

const GLOBAL_DATA = {
  copyright: text
}

export default GLOBAL_DATA;

