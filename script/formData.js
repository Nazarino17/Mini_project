
// 1) получаем все формы с которыми хотим работать
// 2) создаем функцию передаем аргументом форму
// 3) создаем в ней обработчик событий 'submit'
// 4) создаем сам запрос , открываем его передаем метод та url ,добавляем заголовки
// 5) создаем обработчик событий 'load' и провверяем на его статус
// 6) создаем новый обьект FormData и передаем туда форму з котрой хотим взять данные, и пустой обьект который будем передавать в норм формате, перебераем обьект
// 7) создаем обьект с смс загрузок и добавляем их на своем этапе

const forms = document.querySelectorAll('form');


const message = {
    loading: 'Загрузка!',
    success: 'Спасибо, скоро свяжемся',
    failure: 'Что то пошло не так!'
};

forms.forEach(item => {
    postData(item);
});

function postData(form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        statusMessage.textContent = message.loading;
        form.append(statusMessage);

        const request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'apllication/json');

        const formData = new FormData(form);
        const object = {};

        formData.forEach( function(value, key) {
            object[key] = value;
        });

        const json = JSON.stringify(object);
        request.send(json);

        request.addEventListener('load', () => {
            if (request.status === 200) {
                console.log(request.response);
                statusMessage.textContent = message.success;
                form.reset();
                setTimeout(() => {
                    statusMessage.remove();
                }, 2000);

            } else {
                statusMessage.textContent = message.failure;

            }
        }); // обработчик выполниться когда запрос загрузился
    });
}