
function readMore(number) {
    let dots = document.querySelector(`.about-box[data-number="${number}"] .dots`);
    let moreText = document.querySelector(`.about-box[data-number="${number}"] .moreText`); 
    let btnText = document.querySelector(`.about-box[data-number="${number}"] .readMore`);

    if (dots.style.display === "none") {
        dots.style.display = "block";
        btnText.textContent = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read less"; 
        moreText.style.display = "block";
        moreText.style.padding = "0px 0px 40px 0px";
    }
}