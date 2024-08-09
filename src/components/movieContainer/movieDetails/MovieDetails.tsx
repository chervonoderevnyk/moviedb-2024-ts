import { FC, useEffect, useCallback, useState } from 'react';
import { useParams, useOutletContext, useNavigate, useSearchParams } from 'react-router-dom';

import css from './MovieDetails.module.css';
import {MovieDetail} from "./MovieDetail";

const MovieDetails: FC = () => {
    const { movie_id } = useParams<{ movie_id: string }>();
    const { setIsModalOpen } = useOutletContext<{ setIsModalOpen: (isOpen: boolean) => void }>();
    const [isClosing, setIsClosing] = useState(false);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page') || '1'; // Зберігаємо номер сторінки

    const handleCloseModal = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLDivElement).classList.contains(css.modal)) {
            setIsClosing(true);
            setTimeout(() => {
                setIsModalOpen(false);
                // Повертаємось на ту саму сторінку зі списком фільмів
                navigate(`/movies?page=${page}`);
            }, 600); // Затримка для завершення анімації
        }
    }, [setIsModalOpen, navigate, page]);

    useEffect(() => {
        setIsModalOpen(true);
        return () => {
            if (!isClosing) {
                setIsModalOpen(false);
            }
        };
    }, [setIsModalOpen, isClosing]);

    return (
        <div className={`${css.modal} ${isClosing ? css.modalClosing : ''}`} onClick={handleCloseModal}>
            <div className={`${css.modalContent} ${isClosing ? css.modalContentClosing : ''}`}>
                <MovieDetail key={movie_id} />
            </div>
        </div>
    );
};

export { MovieDetails };
