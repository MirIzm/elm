'use strict';

var inputs = document.querySelectorAll('.main-form__input');

function actionDescription(elem) {
    if(elem.value.length > 0) {
        elem.classList.add('active');
    } else {
        if(elem.classList.contains('active')) {
            elem.classList.remove('active')
        }
    }
}


