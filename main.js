$(document).ready(function(){

    let data = new Date();
    data.setTime(data.getTime() + (3 + 1000));
    $.cookie("Nombre", "Richard", {expires : data});
    console.log($.cookie("Nombre"));
    
    
       
       
        $.ajax({
            type: "POST",
            url: "Api.php",
            success: function (response) {
                console.log(response);
            }
        });
    });