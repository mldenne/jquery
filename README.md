# Intro to jQuery & AJAX

In this assignment, the Chirp API is adjusted to output a public timeline using jQuery and JavaScript.

## Deliverables

* A site that uses the Chirp API to dynamically display a public timeline
* A link to a GitHub repo or a GitHub Pages URL for said site

## Requirements

### Explorer Mode (completed)

* Chirp API should show a timeline of all posts if a request is made to the timeline endpoint with any authentication.

  * Endpoint: `GET /posts`

```{
  "posts": [
    {
      "id": 1,
      "body": "Example text",
      "created_at": "2016-07-25T15:31:27.813Z",
      "user": {
        "id": 1,
        "name": "Example Example",
        "username": "example",
        "bio_image": "example image",
        "bio": "Example bio.",
        "post_count": 20,
        "followers_count": 0,
        "followees_count": 1
      }
    }
  ]
}
  ```

* Deploy adjustment to Heroku.

  * https://gentle-basin-30331.herokuapp.com/posts

* Update documentation.

* Use of HTML, JavaScript and CSS for formatting. Bootstrap is preferred.

* Display includes:

  * User avatar (posts.user.bio_image)
  * Body of the chirp (posts.body)
  * Username of the user who posted the chirp (posts.user.username)
  * Created by time and date stamp (posts.created_by)

* Use JQuery

### Adventure Mode (partially completed)

  * Deploy your site to GitHub pages (under construction at https://mldenne.github.io/jquery/)

  * Format the timestamp using moment.js (completed)

  * Use Handlebars as a template for chirps (downloaded template)
