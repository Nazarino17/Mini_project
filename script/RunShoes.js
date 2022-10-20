class RunShoes {
    constructor(sale, discountSale, discount, price, src, parentSelector){
        this.sale = sale;
        this.discountSale = discountSale;
        this.discount = discount;
        this.price = price;
        this.src = src;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const runImg = document.createElement('div');

        runImg.innerHTML = `
        <div class="main__running">
            <div class="main__text">
                <div class="main__text-title">
                    ${this.sale}
                    <br>
                    <span>${this.discountSale}</span>
                </div>
                
                <button class="main__btn">
                    Смотреть модели
                </button>
            </div>

            <div class="main__run">
                <div class="main__img-price">
                    <span class="main__img-discount">${this.discount}</span>
                    <br>
                    <span class="main__img-normal">${this.price}</span>
                </div>
                <img class="main__img" src=${this.src} alt="run">
                
            </div>
        </div>
        `;

        this.parent.append(runImg);
    }
}

new RunShoes(
    "Летняя распродажа",
    "скидка до 50%",
    "5000грн",
    "2000грн",
    "img/airjordan.png",
    ".main .main__running"
).render();