import $ from "jquery";
const _ = require('lodash');
import css from '../css/main.css';


let count = 0


$('body').append(`<div id="logo"></div>`);
$('body').append('<p>Holberton Dashboard!!!!!!!</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append(`<button>Click here to get started</button>`);
$('body').append(`<p id='count'></p>`);
$('body').append('<p>Copyright - Holberton School</p>');
$("button").on("click", _.debounce(updateCounter, 500, {leading: true}))

function updateCounter(){
    count++
    $('#count').html(`${count} clicks on the button`);

}




