const btnDelivery = document.querySelectorAll('.header__delivery');
const modalCloseDelivery = document.querySelector('.close__modal');
const modalDelivery = document.querySelector('.modalDelivery');

btnDelivery.forEach( btn => {
    btn.addEventListener('click', showModal);
});


modalClose.addEventListener('click', closeModal);

modalPay.addEventListener('click', (event) => {
    if (event.target === modalPay) {
        closeModal();
    }
}); 

function showModal() {
    modalPay.classList.add('show');
    modalPay.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalPay.classList.add('hide');
    modalPay.classList.remove('show');
}

