import data from "../../data/data.js";
import display from "../displayProducts.js";
import displayBtnPag from './displayBtnPag.js'
import setupPaginate from "./setupPaginate.js";

const paginate = () => {
    let index = 0
    let page = []

    const setupUI = () => {
        display(page[index], $(".product-list").get(0))
        displayBtnPag($(".pagination").get(0), page, index)
    }
    page = setupPaginate(data);
    setupUI()

    $(".pagination").get(0).addEventListener("click", (e) => {
        if(e.target.classList.contains('paginate')) return
        if(e.target.classList.contains('num-page')) {
            index = parseInt(e.target.dataset.index);
        }
        if(e.target.classList.contains('next-page')) {
            index++;
            if(index > page.length - 1) {
                index = 0
            }
        }
        if(e.target.classList.contains('prev-page')) {
            index--;
            if(index < 0) {
                index = page.length - 1
            }
        }
        setupUI();
    })

}

export default paginate