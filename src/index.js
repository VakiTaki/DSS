import "./index.html";
import "./index.scss";
import { encode, decode } from "./modules/utils";

const str = "Рр3р4к9а99,№8твор3![[]]]";

const encodeStrind = encode(str);
const decodeString = decode(encodeStrind);
console.log(`Исходная строка "${str}" равна результату декодирования "${decodeString}" ? `, str === decodeString);
