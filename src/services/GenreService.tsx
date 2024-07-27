import {IRes} from "../types/IRes";
import {IGenresList} from "../interfaces/genresInterfaceContainer/IGenresList";
import {IGenre} from "../interfaces/genresInterfaceContainer/IGenre";
import {apiService, urls} from "../constants/urls";

const genreService = {
    getAllGenres1: ():IRes<IGenresList<IGenre>> => apiService.get(urls.genres.base)
}

export {genreService}