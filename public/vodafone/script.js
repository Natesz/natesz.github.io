$(document).ready(function(){

	$(".hide").hide();

	$('.tarifa').click(function(){

		var $this = $(this);
		
		$this.siblings(".hide").toggle();

		$this.toggleClass('SeeMore2');
		if($this.hasClass('SeeMore2')){
			$this.html('<p class="tarifa SeeMore2">Tarifarészletek<i class="fa fa-angle-down"></i></p>');         
		} else {
			$this.html('<p class="tarifa SeeMore2">Elrejt<i class="fa fa-angle-up"></i></p>');
		}
	});

	$("#vehicle1").change(function(){
		if(this.checked){
			$(".check").html('7 990 Ft<span class="small">/hó</span>');
		}else{
			$(".check").html('8 990 Ft<span class="small">/hó</span>');
		}
	})

	/* $('body').bind('beforeunload',function(){
		$(".hide-section").hide();
	 }); */

	$(window).on("unload", function(){
		$(".hide-section").hide();
	});

});