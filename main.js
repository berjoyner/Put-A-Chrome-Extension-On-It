$(document).ready(function(){

$.get("https://reddit.com", function(data) {
  console.log(data);

}

$(function(){
  $('#searchForm').on('submit', function(event){
    event.preventDefault();
    $('#redditContent').html();
     
    var domain = $('#s').val();
    var newdomain = domain.replace(/\//g, ''); // remove all slashes
    var requrl = "http://www.reddit.com/domain/";
     
    var fullurl = requrl + domain + ".json";


// $.getJSON(reddit.com, function(json){
//    var listing = json.data.children;
//    var html = '<ul class="linklist">\n';



// //   chrome.devtools.panels.create(
// //     "Reddit Your Way", 
// //     "redditiconpng", 
// //     "index.html",
// //     function() {
 
// //     }
// // );

});