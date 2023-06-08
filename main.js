let menu = document.querySelector('.menu')
let row = document.querySelector('.row')

const getProducts = (categoryId) => {
    fetch(`https://api.escuelajs.co/api/v1/categories/${categoryId === 0 ? 1 : categoryId}/products`)
        .then((res) => res.json())
        .then((res) => {
            res.forEach((item) => {
                row.innerHTML += `
                <div class="card">
                <img class="card__img" src="${item.images[0]}" alt="">
                <h2 class="card__title">${item.title}</h2>
                <p class="card__subtitle">${item.description}</p>
                <p class="card__category">Категория: ${item.category.name}</p>
                <p class="card__price"> цена: ${item.price}</p>
                </div>`
})
})
}

getProducts(1)

const getCategories = () => {
    fetch('https://api.escuelajs.co/api/v1/categories')
        .then((res) => res.json())
        .then((res) => {
            res.forEach((item) => {
                menu.innerHTML += `<li class='menu-item' id='${item.id}'>${item.name}</li>`
            })
            let menuItems = document.querySelectorAll('.menu-item')

            Array.from(menuItems).forEach((item) => {
                item.addEventListener('click', () => {
                    row.innerHTML = ''
                    getProducts(item.id)
                })
            })
        })
}
getCategories()