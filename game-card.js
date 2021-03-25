const favorButton1 = document.getElementById("favoriteClass1");
const favorButton2 = document.getElementById("favoriteClass2");
const favorButton3 = document.getElementById("favoriteClass3");
changeButton(favorButton1);
changeButton(favorButton2);
changeButton(favorButton3);

console.log(favorButton1);
function changeButton (wichButton){
    let chechFavorButton = 0;
    wichButton.addEventListener('click', function () {
        if (chechFavorButton === 0) {
            wichButton.classList.add("favoriteChecked");
            wichButton.classList.remove("favoriteUnchecked");
            wichButton.innerHTML = "✓";
            return chechFavorButton = 1;
        } else {
            wichButton.classList.add("favoriteUnchecked");
            wichButton.classList.remove("favoriteChecked");
            wichButton.innerHTML = "&#9829";
            return chechFavorButton = 0;
        }
    });
}


