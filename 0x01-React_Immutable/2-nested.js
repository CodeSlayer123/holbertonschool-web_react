import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const map = fromJS(object).getIn(array);
  return map;
}
