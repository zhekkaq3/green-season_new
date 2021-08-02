
window.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".catalog").addEventListener("click", (event) => {

        let path = event.target.closest('.catalog__card').dataset.path

        let target = document.querySelector(`[data-target="${path}"]`)
        let card = document.querySelector(`[data-path="${path}"]`)
        let img = document.querySelector(`[data-img="${path}"]`)
        let link = document.querySelector(`[data-link="${path}"]`)
        let text = document.querySelector(`[data-text="${path}"]`)

        if (card.classList.contains('card__active')) {
            card.classList.remove('card__active')
            target.classList.remove('box__active')
            img.classList.remove('img__active')
            link.classList.add('link_active')
            text.classList.add('none')
        } else {
            document.querySelectorAll(".catalog__card").forEach(function (e) {
                if (e.classList.contains('card__active')) {
                    e.classList.remove("card__active");
                    e.querySelector('.name-box').classList.remove('box__active')
                    e.querySelector('.catalog__card-img').classList.remove('img__active')
                    e.querySelector('.card__logo').classList.add('link_active')
                    e.querySelector('.active_description').classList.add('none')

                }
            });
            card.classList.add('card__active')
            target.classList.add('box__active')
            img.classList.add('img__active')
            link.classList.remove('link_active')
            text.classList.remove('none')
        }

    });
    document.querySelectorAll('.active_description').forEach( (el)=>{
        el.addEventListener('click', (e) =>{
            e.stopPropagation()
            e.target.closest('.span').classList.toggle('acti')
            console.log(e.target.closest('.span'))

        })
    })
});

