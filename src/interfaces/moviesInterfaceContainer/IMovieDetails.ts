import {IGenre} from "../genresInterfaceContainer/IGenre";

export interface IMovieDetails {
    adult: string,
    backdrop_path: string,
    budget: number,
    genres: IGenre[],
    overview: string,
    popularity: number,
    status: string,
    title: string,
    vote_count: number,
    release_date: string,
    tagline: string
}