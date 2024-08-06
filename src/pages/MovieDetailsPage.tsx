import { useNavigate } from "react-router-dom";
import { MovieDetails } from "../components/movieContainer/movieDetails/MovieDetails";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate(-1); // Повертає користувача на попередню сторінку
    };

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if ((e.target as HTMLDivElement).className.includes(css.modal)) {
            handleClose();
        }
    };

    return (
        <div className={css.modal} onClick={handleClickOutside}>
            <div className={css.modalContent}>
                <MovieDetails />
            </div>
        </div>
    );
};

export { MovieDetailsPage };
