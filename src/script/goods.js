$(".size").click(function(event){  
    if(event.target==this){
        $(".msize").slideToggle('slow');
    }
});

$(".comments").click(function(event){  
    if(event.target==this){
        $(".wcomments").slideToggle('slow');
    }
});
