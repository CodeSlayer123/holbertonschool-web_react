import { Map } from 'immutable';

const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

const map2 = map.withMutations(function (map) {
  map.set(2, "Benjamin").set(4, "Oliver");
});

module.export = map, map2;
