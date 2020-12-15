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


## Setup requirements (If required).

...... A brief explanation of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

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

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][cardlink]
>Shows detailed information on a movie by a card animation flip. Clicking the 'Add to favourites' button will add the movie to the favourites page.

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][reviewlink]
>Shows the review for a movie. 

![][review]
>Shows the full text for a movie review. 

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/:id (public) - display movies page details.
+ /reviews/form (protected) - add movie review onto a specific movie.
+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ /movies/upcoming (public) - displays upcoming movies.
+ /movies/nowplaying (public) - displays now playing movies.
+ /movies/popular (public) - displays popular movies.
+ /movies/toprated (public) - displays top rated movies.


### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png
