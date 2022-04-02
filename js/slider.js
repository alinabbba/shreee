
const clientSliderNode = document.querySelectorAll("[data-target='#testimonial_slider']");
const clientSlider = Array.from(clientSliderNode)

for(var i = 0; i < clientSlider.length; i++){

    clientSlider[i].addEventListener('click', function (event) {
        let activeClient = event.target;
        activeClient.classList.add('active');
 

        if (activeClient === clientSlider[0]) {
            const clientReview = document.querySelectorAll('#clientReview');
            activeClient.nextElementSibling.classList.remove('active');
            clientReview[0].classList.add('active');
            clientReview[1].classList.remove('active')
        }
        if (activeClient === clientSlider[1]) {
            activeClient.previousElementSibling.classList.remove('active');
            clientReview[1].classList.add('active');
            clientReview[0].classList.remove('active')}
    })

}















  





