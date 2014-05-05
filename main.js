$(document).ready(function(){

$(function(){
  $('#searchForm').on('submit', function(event){
    event.preventDefault();
    
    var userSubreddit = $('#find').val();
    var completeUrl = "http://www.reddit.com/r/" + userSubreddit + ".json"
    
    $.getJSON(completeUrl, function(json){
      var listing = json.data.children;
      var html = '';
      
      for(var i=0, l=listing.length; i<l; i++) {
        var obj = listing[i].data;

        
        var title     = obj.title;
        var thumb     = obj.thumbnail;
        var redditurl = "http://www.reddit.com"+obj.permalink;
        var extUrl    = obj.url;
        

        if(obj.thumbnail === 'default' || obj.thumbnail === 'nsfw' || obj.thumbnail === 'self' || obj.thumbnail === '')
          thumb = 'redditReplace.jpg';
      
       
        html += '<img src="'+thumb+'" class="thumbImg">\n';
        html += '<div class="linkDetails"><a href="'+extUrl+'" target="_blank"><h5>'+title+'</h5></a>\n';
      

    } // end for{} loop
      
  $('#redditContent').html(html);

    }); // end getJSON()
  }); // end .on(submit) listener
 
});

});