
const imgContainer = document.querySelector('#image-container');
const urlAPI = 'https://picsum.photos/v2/list';

const getPicture = () => {
    fetch(urlAPI).then(res => res.json()).then(data => {
        data.forEach(function (photo) {
            const newContainer = document.createElement('div');
            newContainer.classList.add('image-container-item')

            const newImg = document.createElement('img');
            newImg.src = photo?.download_url;
            newContainer.appendChild(newImg)

            const newAuthor = document.createElement('p');
            newAuthor.textContent = photo.author;

            newContainer.appendChild(newAuthor)
            imgContainer.appendChild(newContainer)
        })
    })
}
getPicture();
