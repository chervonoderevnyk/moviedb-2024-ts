import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interfaces/moviesInterfaceContainer/IMovie";

interface IProps extends PropsWithChildren{
    movie: IMovie
}

const Movie:FC<IProps> = ({movie}) => {
    const {id,genre_ids,original_title,title,popularity, poster_path } = movie;

    return (
        <div>
            <div>id: {id}</div>
            <div>genre_ids: {genre_ids}</div>
            <div>original_title: {original_title}</div>
            <div>title: {title}</div>
            <div>popularity: {popularity}</div>
            <div>poster_path: {poster_path}</div>
            <br/>
        </div>
    );
};

export {Movie};