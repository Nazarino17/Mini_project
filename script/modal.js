
const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {

        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);


        trigger.forEach(item => {
            item.addEventListener('click', (event) => {
                if(event.target) {
                    event.preventDefault();
                }
                modal.classList.add('show');
                modal.classList.remove('hide');

                document.body.style.overflow = 'hidden';
            });
        });
        
        
        close.addEventListener('click', () => {
            modal.classList.add('hide');
            modal.classList.remove('show');

            document.body.style.overflow = '';
        });
        
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.add('hide');
                document.body.style.overflow = '';

            }
        }); 
    }

    function timeModal(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).classList.add('show');
            document.body.style.overflow = 'hidden';

        }, time);
    }


    bindModal('.header__payment', '.modal', '.modal .close__modal');
    bindModal('.header__delivery', '.modalDelivery', '.modalDelivery .close__modal');
    // timeModal('.modal', 3000);
}; 

modals();