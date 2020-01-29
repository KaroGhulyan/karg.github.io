document.querySelector("#searchPanel").oninput = function () {
    let val = this.value.trim();
    let searchItems = document.querySelectorAll(".search-menu li");
    if (val != "") {
        searchItems.forEach(function (elem) {
            if (elem.innerText.search(val) == -1) {
                elem.style.display = "none";
            } else {
                elem.style.display = "block";
            }
        });
    } else {
        searchItems.forEach(function (elem) {
            elem.style.display = "block";
        });
    }
};
