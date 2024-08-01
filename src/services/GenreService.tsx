import {IRes} from "../types/IRes";
import {IGenres} from "../interfaces/genresInterfaceContainer/IGenres";
import {IGenre} from "../interfaces/genresInterfaceContainer/IGenre";
import {apiService, urls} from "../constants/urls";
import {IMovie} from "../interfaces/moviesInterfaceContainer/IMovie";
import {IGenreList} from "../interfaces/genresInterfaceContainer/IGenreList";

const genreService = {
    getAllGenres1: (): IRes<IGenres<IGenre>> => apiService.get(urls.genres.base),
    getMoviesByGenre1: (genreId: string): IRes<IGenreList<IMovie>> => apiService.get(`/list/${genreId}`)
};
export {genreService}