
class  Card {
    constructor(srcImage, title, subtitle, parentSelector) {
        this.srcImage = srcImage;
        this.title = title;
        this.subtitle = subtitle;
        this.parent = document.querySelector(parentSelector);
    }

    renderCard() {

        const element = document.createElement('div');
        element.classList.add('main__card');

        element.innerHTML = `
            
            <div>
                <img class="main__img" src=${this.srcImage}>
                <h2 class="main__title">${this.title}</h2>
                <div class="main__subtitle">${this.subtitle}</div>
                <button>Click me</button>
            </div>
           
        `;
        this.parent.append(element);
    }
}

new Card(
    "img/king.jpg",
    "Лев",
    "вид хищных млекопитающих, один из пяти представителей рода пантер (Panthera), относящегося к подсемейству больших кошек в составе семейства кошачьих. Наряду с тигром — самая крупная из ныне живущих кошек",
    '.container .main__content'
).renderCard();


new Card(
    "img/bilka.jpg",
    "Белка",
    "Бе́лки (лат. Sciurus) — род грызунов семейства беличьих. Кроме собственно рода Sciurus, белками называют ещё целый ряд представителей семейства беличьих из родов красные белки (Tamiasciurus), пальмовые белки (Funambulus) и многих других.",
    '.container .main__content'
).renderCard();


new Card(
    "img/papyga.jpg",
    "Папугай",
    "Попугаевые[1] (лат. Psittacidae) — семейство птиц отряда попугаеобразных",
    '.container .main__content'
).renderCard();