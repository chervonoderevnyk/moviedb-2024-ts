import {IRes} from "../types/IRes";
import {IPagination} from "../interfaces/moviesInterfaceContainer/IPagination";
import {IMovie} from "../interfaces/moviesInterfaceContainer/IMovie";
import {apiService, urls} from "../constants/urls";

const movieService={
    getAllMovies1: ():IRes<IPagination<IMovie>> =>
        apiService.get(urls.movies.base)
}

export {movieService}