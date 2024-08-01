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
const list = '/list/:list_id';
const image = '/movie/:movie_id/images'

const urls:IUrls = {

    movies: {
        base: movies
    },
    genres: {
        base: genres
    },
    me: {
        base: me
    },
    list: {
        base: list
    },
    image: {
        base: image
    }
}

export {apiService, urls}
