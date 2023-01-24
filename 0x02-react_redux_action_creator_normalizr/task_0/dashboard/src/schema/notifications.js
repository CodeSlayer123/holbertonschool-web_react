import * as data from '../../notifications.json';

function getAllNotificationsByUser(userId){
    const list = data.filter((obj ) => obj.author.id == userId)
    .map((obj) => obj.context);
    return list;
}