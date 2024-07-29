import {FC, PropsWithChildren} from "react";

import {IMovie} from "../../interfaces/moviesInterfaceContainer/IMovie";
import css from "./Movie.module.css"

interface IProps extends PropsWithChildren{
    movie: IMovie
}

const Movie:FC<IProps> = ({movie}) => {
    const {id,genre_ids,original_title,title,popularity, poster_path } = movie;

    return (
        <div className={css.movieContainer}>
            <div>id: {id}</div>
            <div>genre_ids: {genre_ids}</div>
            <div>original_title: {original_title}</div>
            <div>title: {title}</div>
            <div>popularity: {popularity}</div>
            <div>poster_path: {poster_path}</div>
        </div>
    );
};

export {Movie};