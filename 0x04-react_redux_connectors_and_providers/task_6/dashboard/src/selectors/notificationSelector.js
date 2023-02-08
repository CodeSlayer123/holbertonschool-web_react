
function filterTypeSelected(state){
    return state.get('filter')
}
function getNotifications(state){
    return state.get('notifications')
}
function getUnreadNotifications (state){
    return state.notifications.get('notifications').filter((notification) => notification.isRead == false)
}

export {
    filterTypeSelected,
    getNotifications,
    getUnreadNotifications
}