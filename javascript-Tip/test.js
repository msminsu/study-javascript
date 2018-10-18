$(document).ready(function(){

    var opts = {
        element:"#contents",
        position:"center",
        margin:0,
        fix:100,
        speed:600,
        quickAni:false
    }

  $.each(opts, function(index, value) { 
        opts = index;
    });

    console.log(opts);

});