import { Map, List} from 'immutable';

export function concatElements(page1, page2) {
  const list = List(page1.concat(page2));
  return list;
}

export function mergeElements(page1, page2) {
  const map = Map(page1);
  const list = map.merge(map, page2);
  return list;
}
