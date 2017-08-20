'use strict';

var wyslijBtn = document.getElementById('wyslij');

function waliduj() {
    if(document.getElementById('name').value.trim == "") {
        alert('Wypełnijimie');
 }

wyslijBtn.addEventListener('click', waliduj);