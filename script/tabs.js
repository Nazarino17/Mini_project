const parentItem = document.querySelector('.tabs__header-menu');
const listItem = document.querySelectorAll('.tabs__header-item');
const tabsContent = document.querySelectorAll('.tabs__cont-block');



parentItem.addEventListener('click', (event) => {
    const target = event.target;

        if (target && target.classList.contains('tabs__header-item')) {
            listItem.forEach( (item,i) => {

                if (target == item) {
                    hideContent();
                    showContent(i);
                }

            });

        }
});


function hideContent() {
    tabsContent.forEach( item => {
        item.classList.add('hide-content');
        item.classList.remove('show-content');
    }); 

    listItem.forEach( item => {
        item.classList.remove('active__item');
    });

}

function showContent(i = 0) {
    tabsContent[i].classList.add('show-content');
    tabsContent[i].classList.remove('hide-content');

    listItem[i].classList.add('active__item');
}

hideContent();
showContent();