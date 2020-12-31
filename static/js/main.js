var gridContainer = (function() {
    if($("#ckeditor").length){
        initSample();
    }
    
    if ($("#editor").length) {
        $("#editor").jqte();
    }
    
    if ($(".grid-container").length) {
        $(".grid-container").masonry({
            itemSelector: ".grid",
            columnWidth: 5
        });
    }
})($);

