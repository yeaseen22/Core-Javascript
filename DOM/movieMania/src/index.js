import { getMoviewReviewData } from "./data.js";


console.log(getMoviewReviewData());

let sortDes = false;

function init() {
    const movieReviewData = getMoviewReviewData();

    registerHandlers(movieReviewData);
    paintStatistics(movieReviewData);
    paintMoviewData(movieReviewData);

}

function paintStatistics(movieReviewData) {
    const flateReviewData = movieReviewData.flat();

    const totalMovies = movieReviewData.length;
    const totalReviews = flateReviewData.length;

    const totalRating = flateReviewData.reduce((acc, cur) => {
        return acc + cur.rating;
    }, 0)

    const avgRating = (totalRating / totalReviews).toFixed(2);


    const totalMoviesEl = document.getElementById("tmoviesId")

    const avgRatingEl = document.getElementById("tAvgRattingId")

    const totalReviewsEl = document.getElementById("tReviewsId")


    addStatistics(totalMoviesEl, totalMovies)
    addStatistics(avgRatingEl, avgRating)
    addStatistics(totalReviewsEl, totalReviews)
}


function addStatistics(element, value) {
    const spanEl = document.createElement("span");
    spanEl.classList.add('text-6xl')
    spanEl.innerText = value;
    element.appendChild(spanEl)
}

function paintMoviewData(movieReviewData) {
    const flatMovieData = movieReviewData.flat();
    const sorted = flatMovieData.toSorted((a, b) => b.on - a.on)

    const movieListEl = document.querySelector("#movieListId UL")

    addMovieReviewData(movieListEl, sorted)
}

function registerHandlers(movieReviewData) {
    const sortBtn = document.getElementById("sortBtnId");
    const groupBtn = document.getElementById("groupBtnId");

    sortBtn.addEventListener('click', () => sortByReview(movieReviewData));
    groupBtn.addEventListener('click', () => groupReviewByTitle(movieReviewData));
}

function sortByReview(movieReviewData) {
    sortDes = !sortDes;
    const flatMovieData = movieReviewData.flat();

    let sortReviewData = sortDes
        ? flatMovieData.toSorted((a, b) => b.rating - a.rating)
        : flatMovieData.toSorted((a, b) => a.rating - b.rating)

    const movieListEl = document.querySelector("#movieListId UL")
    removeAllChildNode(movieListEl)
    addMovieReviewData(movieListEl, sortReviewData)
}

function groupReviewByTitle(movieReviewData){
    const flatMovieData = movieReviewData.flat();
    const groupedReviews = Object.groupBy(flatMovieData, ({title}) => title);

    const titleKeys = Reflect.ownKeys(groupedReviews);

    const movieListEl = document.querySelector("#movieListId UL")
    removeAllChildNode(movieListEl)
    titleKeys.forEach((title) => {
        const liEl = document.createElement("li")
        liEl.classList.add("card", "p-2", "my-2")

        const hEl = document.createElement("h2")
        
    })

    console.log('group review data', movieReviewData);
    
}

function addMovieReviewData(movieListEl, movieReviewData) {
    movieReviewData.map((movie) => {
        const liEl = document.createElement("li")
        liEl.classList.add("card", "p-2", "my-2")

        const titleEl = document.createElement("p")
        titleEl.classList.add("text-xl", "mb-2")
        titleEl.innerText = `${movie.title} - ${movie.rating}`
        liEl.appendChild(titleEl)

        const ReivewEl = document.createElement("p")
        ReivewEl.classList.add("mx-2", "mb-2")
        ReivewEl.innerText = movie.content;
        liEl.appendChild(ReivewEl)

        const byElement = document.createElement("p")
        byElement.classList.add("mx-2", "mb-2")
        byElement.innerText = `By ${movie.by} on ${new Intl.DateTimeFormat('en-IN').format(movie.on)}`;
        liEl.appendChild(byElement)

        movieListEl.appendChild(liEl)
    })
}

function removeAllChildNode(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

init();