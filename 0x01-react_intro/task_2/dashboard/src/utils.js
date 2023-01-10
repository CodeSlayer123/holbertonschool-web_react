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

module.exports = {getFullYear, getFooterCopy}