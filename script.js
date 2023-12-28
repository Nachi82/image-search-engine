const accessKey = "4PD2joXiPBrTgL1ie8N7WEVI5Azs6V3N2r_7x86DDqQ";


const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");


let KeyWord ="";
let page = 1;

async function searchImages(){
    KeyWord = searchBox.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
}

searchForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    page = 1;
    searchImages();

})