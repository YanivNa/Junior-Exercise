$(document).ready(function(){

$("form").submit(function(e) {
    e.preventDefault();
});
    
    $('#submit').on('click',function(){
        
        $('.loading').show();

    })
});