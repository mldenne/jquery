$(document).ready(function(){

  $.getJSON('https://gentle-basin-30331.herokuapp.com/posts', function(data){
    displayData(data.posts)
    console.log(data)
  })
})

function displayData(arr) {
    $.each(arr, function(i, posts){
      // console.log(posts)
      $('#chirps').append("<div class='row'><div class='col-md-1'><img class='img-responsive img-thumbnail' src=" + posts.user.bio_image + "/></div><div class='col-md-11'><h4>" + posts.body + "</h4><p> created by " + "<strong>" + posts.user.username + "</strong>" + " on " + moment(posts.created_at).format("dddd, MMMM Do YYYY") + " at " + moment(posts.created_at).format("h:mm a") + "</p></div></div>")
  })
}
