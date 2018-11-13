$(document).ready(function(){


    var key = "AIzaSyB90nzT-0F7xbOR0NpIU1N5HVhDJy0zEic";
    var playlistId = "PL5ZDxMFT4aldNMe9An83jJJH4GOXIrt2X"
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

        var options ={
            part: 'snippet',
            key: key,
            maxResults: 20,
            playlistId: playlistId,

        }

        loadVids();


        function  loadVids(){
            $.getJSON(URL, options, function(data){
                console.log(data);
            })
        }

});
