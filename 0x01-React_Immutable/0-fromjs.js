//const { fromJS } = require('immutable');
const { Map } = require('immutable');
import { fromJS } from 'immutable'

export default function getImmutableObject(object){
    const map = fromJS(object);
    return map

}