import '../feature/slide.js'
import './footer.js'
import data from '../data/data.js'

const categoryListDOM = $(".h-category-list").get(0)

setTimeout(() => {
    const cateItemDOMs = $(".h-category-item")
    for(let i = 0; i < cateItemDOMs.length; i++) {
        cateItemDOMs.get(i).addEventListener('click', function(e) {
            const cateName = e.target.parentElement.lastElementChild.innerText
            window.location.href = `./products.html?cate=${cateName}`;
        })
    }
}, 1)

let categoryList = []
data.map((item) => {
    const { category, img } = item
    if(!categoryList.some(_item => _item.category === category)) {
        const cateItem = { category, img }
        categoryList = [ ...categoryList, cateItem ]
    }
})

categoryListDOM.innerHTML = categoryList.map(({ category, img }) => {
    return `<li class="h-category-item col-xl-4 col-lg-4 col-md-6 col-md-6">
        <div class="wrap_img_h3">
            <img src="${img}" alt="" class="h-category_img">
            <h3 class="h-category_info_name">${category}</h3>
        </div>
    </li>`
}).join("")