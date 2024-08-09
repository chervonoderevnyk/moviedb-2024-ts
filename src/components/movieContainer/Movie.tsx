import { FC, PropsWithChildren, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { IMovie } from '../../interfaces/moviesInterfaceContainer/IMovie';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { movieActions } from '../../redux/slices/moviesSlicesContainer/MovieSlice';
import { StarRating } from '../ratingContainer/StarRating';
import css from './Movie.module.css';

interface IProps extends PropsWithChildren {
    movie: IMovie;
}

const Movie: FC<IProps> = ({ movie }) => {
    const { id, popularity } = movie;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { images } = useAppSelector(state => state.movies);
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page') || '1'; // Отримуємо поточну сторінку

    useEffect(() => {
        if (!images[id]) {
            dispatch(movieActions.getImageByMovie(String(id)));
        }
    }, [dispatch, id, images]);

    const imageUrl = images[id]?.[0]?.file_path;

    const handleClick = () => {
        // Додаємо параметр page до маршруту
        navigate(`/movie/${id}?page=${page}`);
    };

    return (
        <div
            className={css.movieContainer}
            style={{
                backgroundImage:
                    imageUrl ? `url(https://image.tmdb.org/t/p/w500${imageUrl})` : 'none'
            }}
            onClick={handleClick}
        >
            <StarRating rating={popularity} />
        </div>
    );
};

export { Movie };
