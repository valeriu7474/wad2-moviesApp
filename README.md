# Assignment 1 - ReactJS app.

Name: Valeriu Blascu

## Features.
 
 + Feature 1 - Upcoming Movies
 + Feature 2 - Now Playing
 + Feature 3 = Popular
 + Feature 3 = Top Rated
 + Feature 4 = UI Redesign
 + Feature 5 = Card UI Animation
 + Feature 6 = Bootstrap Design Grid Change
 + Feature 7 = Color Change
 + Feature 8 = Navigation Bar Change




## API Data Model.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/movie/${id}/reviews - get movie reviews
+ https://api.themoviedb.org/3/movie/upcoming - get upcoming movies
+ https://api.themoviedb.org/3/movie/now_playing - get now playing movies
+ https://api.themoviedb.org/3/movie/popular - get popular movies
+ https://api.themoviedb.org/3/movie/top_rated - get top rated movies

## App Design.

### Component catalogue (If required).

![][stories]

### UI Design.

![][cardlink]
>Shows detailed information on a movie by a card animation flip. Clicking the 'Add to favourites' button will add the movie to the favourites page.

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][reviewlink]
>Shows the review for a movie. 

![][review]
>Shows the full text for a movie review. 

![][toprated]
>Shows Top Rated movies

![][upcoming]
>Shows Upcoming movies

![][popular]
>Shows popular movies

![][nowplaying]
>Shows now playing movies

## Routing.

+ /movies/:id (public) - display movies page details.
+ /reviews/form (protected) - add movie review onto a specific movie.
+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ /movies/upcoming (public) - displays upcoming movies.
+ /movies/nowplaying (public) - displays now playing movies.
+ /movies/popular (public) - displays popular movies.
+ /movies/toprated (public) - displays top rated movies.


### Data hyperlinking.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

![][addfavorite]
>Clicking the 'Add to favorite' button will add that movie to the favorite page view.

## Independent learning (If relevant).

Improved my card flip design using "transform-style" from this link.
https://www.w3schools.com/howto/howto_css_flip_card.asp

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewlink]: ./public/reviewlink.png
[cardlink]: ./public/cardlink.png
[stories]: ./public/storybook.png
[toprated]: ./public/toprated.png
[upcoming]: ./public/upcoming.png
[popular]: ./public/popular.png
[nowplaying]: ./public/nowplaying.png
[addfavorite]: ./public/addfavorite.png
