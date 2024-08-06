import { FC, PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Додати useNavigate
import { IMovie } from "../../interfaces/moviesInterfaceContainer/IMovie";
import css from "./Movie.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { movieActions } from "../../redux/slices/moviesSlicesContainer/MovieSlice";
import { StarRating } from "../ratingContainer/StarRating";

interface IProps extends PropsWithChildren {
    movie: IMovie;
}

const Movie: FC<IProps> = ({ movie }) => {
    const { id, popularity } = movie;
    const dispatch = useAppDispatch();
    const navigate = useNavigate(); // Ініціалізація useNavigate

    const { images } = useAppSelector(state => state.movies);

    useEffect(() => {
        if (!images[id]) {
            dispatch(movieActions.getImageByMovie(String(id)));
        }
    }, [dispatch, id, images]);

    const imageUrl = images[id]?.[0]?.file_path;

    // Функція для обробки кліку по фільму
    const handleClick = () => {
        navigate(`/movie/${id}`);
    };

    return (
        <div
            className={css.movieContainer}
            style={{
                backgroundImage:
                    imageUrl ? `url(https://image.tmdb.org/t/p/w500${imageUrl})` : 'none'
            }}
            onClick={handleClick} // Додати обробник кліку
        >
            <StarRating rating={popularity}/>
        </div>
    );
};

export { Movie };
