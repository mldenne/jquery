$(document).ready(function(){

  $.getJSON('https://gentle-basin-30331.herokuapp.com/posts', function(data){
    displayData(data.posts)
    console.log(data)
  })
})

function displayData(arr) {
    $.each(arr, function(i, posts){
      // console.log(posts)
      $('#chirps').append("<div class='row'><div class='col-md-2'><img class='img-responsive' src=" + posts.user.bio_image + "/></div><div class='col-md-10'><p>" + posts.body + "</p><p> created by" + posts.user.username + "created at" + posts.created_at + "</p></div></div>")
  })
}
