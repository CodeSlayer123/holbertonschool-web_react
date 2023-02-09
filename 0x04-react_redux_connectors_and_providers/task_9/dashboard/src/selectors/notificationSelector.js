
function filterTypeSelected(state){
    return state.get('filter')
}
function getNotifications(state){
    return state.get('notifications')
}
function getUnreadNotifications(state){
    return state.notifications.get('notifications').filter((notification) => notification.isRead == false)
}
function getUnreadNotificationsByType(state){
    const filter = state.get('filter')
    if (filter == 'DEFAULT'){
        return getUnreadNotifications()
    }
    if (filter == 'URGENT'){
        return getUnreadNotifications()

    }
}
export {
    filterTypeSelected,
    getNotifications,
    getUnreadNotifications
}