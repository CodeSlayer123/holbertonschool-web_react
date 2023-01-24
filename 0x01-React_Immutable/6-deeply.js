import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const map = Map(page1);
  const list = map.mergeDeep(map, page2);
  return list;
}
