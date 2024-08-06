import { FC } from "react";
import css from "./Star.module.css";

interface IStarRatingProps {
    rating: number;
    maxRating?: number;
}

const StarRating: FC<IStarRatingProps> = ({ rating, maxRating = 8 }) => {

    const adjustedRating = Math.max(0, Math.min(rating, 10000));
    const fullStars = Math.floor((adjustedRating / 10000) * maxRating);
    const partialStar = (adjustedRating / 10000) * maxRating - fullStars;

    const stars = Array.from({ length: maxRating }, (_, index) => {
        if (index < fullStars) {
            return <span key={index} className={`${css.star} ${css.starFilled}`}>★</span>;
        } else if (index === fullStars) {
            return (
                <span key={index} className={`${css.star} ${css.starPartial}`}>
                    <span className={css.starPartialFilled} style={{ width: `${partialStar * 100}%` }}>★</span>
                    <span className={css.starEmpty}>★</span>
                </span>
            );
        } else {
            return <span key={index} className={`${css.star} ${css.starEmpty}`}>★</span>;
        }
    });

    return <div className={css.starRatingContainer}>{stars}</div>;
};

export { StarRating };
