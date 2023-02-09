import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE, NotificationTypeFilters} from '../actions/notificationActionTypes';
const { Map } = require('immutable');
import { notificationNormalizer } from '../schema/notifications';


const initialState = Map({
    notifications: [],
    filter: NotificationTypeFilters.DEFAULT,
    loading: false
})
export function notificationReducer(state = initialState, action){

    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS: {
            return state.mergeDeep(
                notificationNormalizer(action.data)
                )
        }
        case MARK_AS_READ: {
            return Map(state).setIn(
                [(action.index).toString(),
                    'isRead'],true)
          }

        case SET_TYPE_FILTER: {
            return state.set('filter', action.filter)
        }
        case SET_LOADING_STATE: {
            return state.set('loading', action.loading)
        }

        default: {
            return state
        }
    }


}