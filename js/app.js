M.AutoInit();

//Slider
$('.carousel.carousel-slider').carousel({
   fullWidth: true,
   indicators:true
 }); 

 $(document).ready(function(){
    $('.tap-target').tapTarget();
  });

   $(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: {
        "Apple": null,
        "Microsoft": null,
        "Proteco": null
      },
    });
  });
        