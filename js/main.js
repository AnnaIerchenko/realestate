/**
 * NodeList.prototype.foreach() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEachPolyfill
 */
if (window.NodeList &&!NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}



/*filter on mobile devices*/

const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');


//show/hide filter
sidebarToggleBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
}

/*document.querySelector('.menu-icon-wrapper').onclick = function () {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
};*/

/*show 3more cards*/
const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');

btnShowMoreCards.addEventListener('click', function () {
    hiddenCards.forEach(function (card) {
        card.classList.remove('card-link--hidden');

    })
   
})

/*show/hide widget's inside*/
const widgets = document.querySelectorAll('.widget');

//find all widgets on the page
widgets.forEach(function (widget) {

    //listen click inside widget
    widget.addEventListener('click', function (e) 
    {
     //if click on title- hide/show widget's body

        if (e.target.classList.contains('widget__title')) {
           e.target.classList.toggle('widget__title--active'); 
           e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }

    })
})
//location - buttom "Any"

const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');


/*click bottom "Any" - switchoff other checkbox*/

  checkBoxAny.addEventListener('change', function () {
      if (checkBoxAny.checked) {
          topLocationCheckboxes.forEach(function (item){
              item.checked = false;
          })
      }

 })

//switchoff buttom "Any" , during choose other parameters

topLocationCheckboxes.forEach(function (item) {
    item.addEventListener('change', function () {
        if (checkBoxAny.checked) {
            checkBoxAny.checked = false;
        }
    })

})


/*show 3 more optons with checkbox in filter*/

const showMoreOptions = document.querySelector('.widget__btn-show-hidden');
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.onclick = function (e) {
       e.preventDefault;


    //if blocks were hidden-than show it
    if (showMoreOptions.dataset.options == 'hidden') {
        hiddenCheckBoxes.forEach(function (item) {
            item.style.display = 'block';
        });
        showMoreOptions.innerText = 'Скрыть дополнительные опции';
        showMoreOptions.dataset.options = 'visible';
    }
    //if blocks were showed-then hide it
    else if (showMoreOptions.dataset.options == 'visible') {
        hiddenCheckBoxes.forEach(function (item) {
            item.style.display = 'none';
        });
        showMoreOptions.innerText = 'Показать ещё';
        showMoreOptions.dataset.options = 'hidden';
    }
}