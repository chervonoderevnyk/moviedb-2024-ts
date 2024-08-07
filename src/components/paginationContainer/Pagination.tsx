import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

import css from "./Pagination.module.css";


interface PaginationProps {
    totalPages: number;
}

const Pagination = ({ totalPages }: PaginationProps) => {
    const [query, setQuery] = useSearchParams({ page: '1' });

    useEffect(() => {
        if (!query.get('page')) {
            setQuery({ page: '1' });
        }
    }, [query, setQuery]);

    const currentPage = query.get('page') ? +query.get('page') : 1;

    const handlePrev = () => {
        if (currentPage > 1) {
            setQuery({ page: (currentPage - 1).toString() });
        }
    };

    const handleNext = () => {
        if (currentPage <= totalPages) {
            setQuery({ page: (currentPage + 1).toString() });
        }
    };

    return (
        <div className={css.paginationContainer}>
            <button onClick={handlePrev} disabled={currentPage <= 1}>Prev</button>
            <div className={css.currentPage}>{currentPage}</div>
            <button onClick={handleNext} disabled={currentPage >= totalPages}>Next</button>
        </div>
    );
};

export { Pagination };