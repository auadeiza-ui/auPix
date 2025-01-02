// const accesskey = "FGYisCJkUYBaoTXSv-obU-5OADnnn0QK_S4IAuO9CsI"

// const searchForm = document.getElementById("search-form")
// const searchBox = document.getElementById("search-box")
// const searchResult = document.getElementById("search-result")
// const searchMoreBtn = document.getElementById("show-more-btn")


// let keyword = ""
// let page = 1;

// async function searchImages() {
//     keyword = searchBox.value;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;

//     const response = await fetch(url);
//     const data = await response.json();

//     const results = data.results;

//     results.map(result => {
//         const imgElement = document.createElement("img");
//         imgElement.src = result.urls.small;
//         imgElement.alt = result.alt_description;
//         searchResult.appendChild(imgElement);
//     });
// }

// searchForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     page = 1;
//     searchImages();
// })




const accesskey = "FGYisCJkUYBaoTXSv-obU-5OADnnn0QK_S4IAuO9CsI";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`; 

    const response = await fetch(url);
    const data = await response.json();

    // Clear previous search results if it's the first page
    if (page === 1) {
        searchResult.innerHTML = '';
    }

    // Display images
    data.results.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image.urls.small;
        imgElement.alt = image.alt_description;
        searchResult.appendChild(imgElement);
    });

    // Show the "show more" button only if there are more pages to load
    if (data.total_pages > page) {
        searchMoreBtn.style.display = 'block';
    } else {
        searchMoreBtn.style.display = 'none';
    }
}

// Fetch more images on clicking "Show More"
searchMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
});

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});
