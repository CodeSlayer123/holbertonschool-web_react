const { fromJS } = require('immutable');
// const { Map } = require('immutable');
import { Map } from 'immutable'


export default function getImmutableObject(object){
    const map = Map(object);
    return map

}