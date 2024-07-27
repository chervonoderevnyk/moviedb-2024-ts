import axios from "axios";
import {IUrls} from "../interfaces/IUrls";
import {IdUserMe} from "../env";

let apiService = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers:
        {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2RjMjhlNjM1YTg5NmNkNjI2OTg3MWQxYTQyNGYzNiIsIm5iZiI6MTcyMTg5NjA3NC40ODc2MzYsInN1YiI6IjYzZjVjN2Q5N2RmZGE2MDBiNTMxNDM0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hnRIRxdbRwHLXjZeb8D96zNIOdqFgwSiCiEWw09NAD8',
            accept: 'application/json'
        }
});

let account_id = IdUserMe;

const movies = '/discover/movie?'
const genres = '/genre/movie/list'
const me = `/account/${account_id}`

const urls:IUrls = {

    movies: {
        base: movies
    },
    genres: {
        base: genres
    },
    me: {
        base: me
    }
}

export {apiService, urls}

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODJlN2Q1M2M3MTQ3OTFmZjczZmU4NzA3ODdmMDgxNSIsInN1YiI6IjU3ZWE0NjY0OTI1MTQxMTA4OTAwOGZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lEEivZliSc_G_UGJbP8p1LRlPXWu3U9erTCsUnRWP_U
// {
//     "avatar": {
//     "gravatar": {
//         "hash": "a44ad45500d0474142b991fcd21e75d2"
//     },
//     "tmdb": {
//         "avatar_path": null
//     }
// },
//     "id": 17833816,
//     "iso_639_1": "uk",
//     "iso_3166_1": "UA",
//     "name": "",
//     "include_adult": false,
//     "username": "Chervonoderevnyk"
// }