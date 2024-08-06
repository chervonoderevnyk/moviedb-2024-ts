import {IRes} from "../types/IRes";
import {IPagination} from "../interfaces/moviesInterfaceContainer/IPagination";
import {IMovie} from "../interfaces/moviesInterfaceContainer/IMovie";
import {apiService, urls} from "../constants/urls";
import {IMovieImages} from "../interfaces/moviesInterfaceContainer/IMovieImages";
import {IMovieDetails} from "../interfaces/moviesInterfaceContainer/IMovieDetails";

const movieService={
    getAllMovies1: (page:string):IRes<IPagination<IMovie>> =>
        apiService.get(urls.movies.base, {params: {page:page}}),

    getMovieImages1: (movie_id: string):IRes<IMovieImages> =>
        apiService.get(`/movie/${movie_id}/images`),

    getDetailsByMovie1: (movie_id: string): IRes<IMovieDetails> =>
        apiService.get(`/movie/${movie_id}`)
}

export {movieService}