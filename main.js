$(document).ready(function(){

  $.getJSON('https://gentle-basin-30331.herokuapp.com/posts', function(data){
    displayData(data.posts)
    console.log(data)
  })
})

function displayData(arr) {
    // $('#stuff h1').remove()
    $.each(arr, function(i, posts){
      console.log(posts)
      $('#chirps').append("<p>" + posts.body + "</p>")
    })
  }
