$(document).ready(function(){
    // $("button").click(function(){
    //     $("p").toggle();
    // });
    $("#b1").click(function(){
        $("#div1").fadeToggle();
    });
    $("#div2").click(function(){
        $("#panel").slideToggle("5000",function () {
            alert("！")
        });
    });
    $("#b2").click(function (){
        $("#div3").animate({
            left:'250px',
            // opacity:'0.5',
            height:'+=80px',
            width:'toggle'
        });
    });
    $("#stop").click(function(){
        $("#panel").stop();
    });
    $("#show").click(function () {
        alert($("#text").text());
    })
    $("#show2").click(function () {
        alert($("#text2").val());
    })
    $("#set").click(function () {
        $("#text3").text("Hello world!");
    })
    
  });