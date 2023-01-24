import * as data from '../../notifications.json';
import { normalize, schema } from 'normalizr';

export function getAllNotificationsByUser(userId){
    const list = Object.values(normal.entities.notifications).filter((obj ) => obj.author == userId)
    .map((obj) => normal.entities.messages[obj.context]);
    return list;
}



const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {idAttribute: 'guid'});
const notification  = new schema.Entity('notifications ', {author: user, context: message});
export const normal = normalize(data, [notification]);