$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
// mostra sinopse
$('.info').click(function(){
    $('.hide').show();
});
//esconde botao sinopse ao clicar
$('.info').click(function(){
    $(this).hide();
});
//esconde sinopse após sair da div
$('.item').mouseleave(function(){
    $('.hide').hide();
});
//mostra botão sinopse apos sair da div
$('.item').mouseleave(function(){
    $('.info').show();
});
// Estado Hover
const img = document.querySelectorAll('.item')

img.forEach(function(imgs){
    const imgOver = imgs.querySelector('.box-filme')

    imgOver.addEventListener("mouseover", function(){
        img.forEach(function(item){
            if(item !== imgs){
                item.classList.remove('open-caixa')
            }
        });
        imgs.classList.toggle('open-caixa');
});
});
