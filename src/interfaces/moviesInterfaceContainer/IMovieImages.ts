// export interface IMovieImages<T> {
//     id: number,
//     posters:T
// }

import {IPosterImage} from "./IPosterImage";

export interface IMovieImages {
    id: number;
    posters: IPosterImage[];
}
