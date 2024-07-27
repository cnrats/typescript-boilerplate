import 'module-alias/register';
import { Operations } from './modules';

console.log(`2 + 3 = ${Operations.sum(2, 3).result}`);
