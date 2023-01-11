function getFullYear(){
    return new Date().getFullYear()
}

function getFooterCopy(isIndex){
    if (isIndex === true){
        return 'Holberton School'
    }
    if (isIndex === false){
        return 'Holberton School main dashboard' 
    }
}

function getLatestNotification(){
    return `<strong>Urgent requirement</strong> - complete by EOD`
}

module.exports = {getFullYear, getFooterCopy, getLatestNotification }