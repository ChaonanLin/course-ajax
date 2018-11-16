/* eslint-env jquery */

(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
        $.ajax({
            url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`,
            headers: {
                Authorization: 'Client-ID 67cb76aae7448eba4e939b3bcb169d31f01ae3033634e74d61e53891702b0c35'
            }
        }).done(addImage);
    });

    function addImage(image) {
        const firstImage = image.results[0];
        responseContainer.insertAdjacentHTML('afterbegin', `<figure>
        <img src="${firstImage.urls.small}" alt="${searchedForText}">
        <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
        </figure>`
        );
    }
})();
