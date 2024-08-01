import { FC, PropsWithChildren, useEffect } from "react";

import { IMovie } from "../../interfaces/moviesInterfaceContainer/IMovie";
import css from "./Movie.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { movieActions } from "../../redux/slices/moviesSlicesContainer/MovieSlice";

interface IProps extends PropsWithChildren {
    movie: IMovie;
}

const Movie: FC<IProps> = ({ movie }) => {
    const { id, title, popularity } = movie;
    const dispatch = useAppDispatch();

    const { images } =
        useAppSelector(state => state.movies);

    useEffect(() => {
        if (!images[id]) {
            dispatch(movieActions.getImageByMovie(String(id)));
        }
    }, [dispatch, id, images]);

    const imageUrl = images[id]?.[0]?.file_path; // Використовуємо перше зображення

    return (
        <div className={css.movieContainer}>
            <div>title: {title}</div>
            <div>popularity: {popularity}</div>
            {imageUrl ? (
                <img src={`https://image.tmdb.org/t/p/w500${imageUrl}`} alt={title} />
            ) : (
                <div>Loading image...</div>
            )}
        </div>
    );
};

export { Movie };
