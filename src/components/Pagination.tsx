import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

interface PaginationProps {
    totalPages: number;
}

const Pagination = ({ totalPages }: PaginationProps) => {
    const [query, setQuery] = useSearchParams({ page: '1' });

    // Якщо параметр 'page' відсутній, встановлюю його в 1
    useEffect(() => {
        if (!query.get('page')) {
            setQuery({ page: '1' });
        }
    }, [query, setQuery]);

    const currentPage = query.get('page') ? +query.get('page') : 1;

    const handlePrev = () => {
        // Перевірка, чи сторінка більше 1, перш ніж зменшувати
        if (currentPage > 1) {
            setQuery({ page: (currentPage - 1).toString() });
        }
    };

    const handleNext = () => {
        // Перевірка, чи сторінка менша або рівна загальній кількості сторінок
        if (currentPage <= totalPages) {
            setQuery({ page: (currentPage + 1).toString() });
        }
    };

    return (
        <div>
            {/* Відключаю кнопку Prev, якщо сторінка 1 */}
            <button onClick={handlePrev} disabled={currentPage <= 1}>Prev</button>
            {/* Відключаю кнопку Next, якщо поточна сторінка є останньою */}
            <button onClick={handleNext} disabled={currentPage >= totalPages}>Next</button>
        </div>
    );
};

export { Pagination };
