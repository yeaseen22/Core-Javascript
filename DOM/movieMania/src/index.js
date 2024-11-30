import { getMoviewReviewData } from "./data.js";


console.log(getMoviewReviewData());


function init() {
    const movieReviewData = getMoviewReviewData();

    paintStatistics(movieReviewData);
}

function paintStatistics(movieReviewData) {
    const flateReviewData = movieReviewData.flat();

    const totalMovies = movieReviewData.length;
    const totalReviews = flateReviewData.length;

    const totalRating = flateReviewData.reduce((acc, cur) => {
        return acc + cur.rating;
    }, 0)

    const avgRating =( totalRating / totalReviews).toFixed(2);


    const totalMoviesEl = document.getElementById("tmoviesId")

    const avgRatingEl = document.getElementById("tAvgRattingId")

    const totalReviewsEl = document.getElementById("tReviewsId")


    addStatistics(totalMoviesEl, totalMovies)
    addStatistics(avgRatingEl, avgRating)
    addStatistics(totalReviewsEl, totalReviews)
}


function addStatistics(element, value){
    const spanEl = document.createElement("span");
    spanEl.classList.add('text-6xl')
    spanEl.innerText = value;
    element.appendChild(spanEl)
}

init();