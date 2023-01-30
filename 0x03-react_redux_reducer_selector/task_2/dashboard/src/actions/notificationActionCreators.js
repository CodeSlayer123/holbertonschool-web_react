import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
const { bindActionCreators } = require('redux');


export function markAsAread(index){
    return {type: MARK_AS_READ, index: index}
}

export function setNotificationFilter(filter){
    return {type: SET_TYPE_FILTER, filter: filter}

}
export function bound(){
    bindActionCreators({markAsAread, setNotificationFilter}, dispatch)
}