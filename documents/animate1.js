
		$(document).ready(function (){
            $("#col").click(function (){
                $('html, body').animate({
                    scrollTop: $("#columns").offset().top
                }, 2000);
            });
        });
		
		$(document).ready(function (){
            $("#feat").click(function (){
                $('html, body').animate({
                    scrollTop: $("#FeatWork").offset().top
                }, 2000);
            });
        });
		
		$(document).ready(function (){
            $(".tab").click(function (){
                $('html, body').animate({
                    scrollTop: $("#tabs").offset().top
                }, 4000);
            });
        });
		
		$(document).ready(function (){
            $("#touc").click(function (){
                $('html, body').animate({
                    scrollTop: $("#touch").offset().top
                }, 4000);
            });
        });
		
		$(document).ready(function (){
            $("#foot").click(function (){
                $('html, body').animate({
                    scrollTop: $("#map").offset().top
                }, 5000);
            });
        });