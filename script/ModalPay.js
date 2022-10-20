const btnPay = document.querySelectorAll('.header__payment');
const modalClose = document.querySelector('.close__modal');
const modalPay = document.querySelector('.modal');

btnPay.forEach( btn => {
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


