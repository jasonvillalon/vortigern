import { Counter } from 'models/counter';
import { Stars } from 'models/stars';

export interface Store {
  counter: Counter;
  stars: Stars;
}
