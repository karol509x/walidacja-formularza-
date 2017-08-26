'use strict';

var wyslijBtn = document.getElementById('wyslij');
var wszystkieZgody = document.getElementById('wszystkie-zgody');
var zgodamarketingowa1 = document.getElementById('zgoda-marketingowa-1');
var zgodamarketingowa2 = document.getElementById('zgoda-marketingowa-2');

function stanCheckbox() {
    zgodamarketingowa1.checked = this.checked;
    zgodamarketingowa2.checked = this.checked;
}

//document.getElementById('wszystkie-zgody').onchange =

function waliduj() {
    if (document.getElementById('name').value.trim == "") {
        alert('Wypełnijimie');
    }

    if (document.getElementById('email').value.trim == "") {
        alert('Wypełnijemail');
    }

    if (document.getElementById('zgoda-marketingowa-1').checked != true) {
        alert('Zaznacz pierwszą zgodę!');
    }
}
wyslijBtn.addEventListener('click', waliduj);
wszystkieZgody.addEventListener('change', stanCheckbox);