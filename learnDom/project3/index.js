const faq = document.querySelector(".faq")

function closeAll() {
    const allAnswer = document.querySelectorAll(".answer.show")
    allAnswer.forEach(answer => answer.classList.remove('show'))
}

faq.addEventListener('click', function (e) {

    if (e.target.classList.contains('question')) {

        e.stopPropagation();
        const currentItem = e.target.parentElement;
        const currentAnswer = currentItem.querySelector(".answer")
        console.log(e);

        const isOpen = currentAnswer.classList.contains('show')
        if (currentAnswer.classList.contains("show")) {
            closeAll()
        }
        if (!isOpen) {
            currentAnswer.classList.toggle('show')
        }


    }
})

document.addEventListener('click', function () {
    closeAll()
})