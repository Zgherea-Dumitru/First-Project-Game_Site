const favorButton1 = document.getElementById("favoriteButtonId");
let chechFavorButton = 0;

favorButton1.addEventListener('click', function () {
    if (chechFavorButton === 0) {
        favorButton1.classList.remove("favoriteUnchecked");
        favorButton1.classList.add("favoriteChecked");
        favorButton1.innerHTML = "✓";
        return chechFavorButton = 1;
    } else {
        favorButton1.classList.remove("favoriteChecked");
        favorButton1.classList.add("favoriteUnchecked");
        favorButton1.innerHTML = "&#9829";
        return chechFavorButton = 0;
    }
});