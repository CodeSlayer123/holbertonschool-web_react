import $ from "jquery";
const _ = require('lodash');
import css from './body.css';

let count = 0



$('body').append('<p>Dashboard data for the students</p>');
$('body').append(`<button>Click here to get started</button>`);
$('body').append(`<p id='count'></p>`);
$("button").on("click", _.debounce(updateCounter, 500, {leading: true}))

function updateCounter(){
    count++
    $('#count').html(`${count} clicks on the button`);

}
