$(document).ready(function(){

    console.log("Cargado");

    $('.ui.rating').rating();
    $('.ui.dropdown').dropdown();

    //$('.ui.modal').modal();

    $(".appWrapper").on("click", ".iniciarBtn", function() {

        $('.ui.modal').modal('show');
    });

    $(".appWrapper").on("click", '.special.cards .image', function() {

        $('.special.cards .image').dimmer({

            on: 'hover'
        });

    });
});
