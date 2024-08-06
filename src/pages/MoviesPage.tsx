import { Outlet } from "react-router-dom";
import {Movies} from "../components/movieContainer/Movies";

const MoviesPage = () => {
    return (
        <div>
            <Movies/>
            <Outlet/> {/* Додати Outlet для рендерингу дочірніх маршрутів */}
        </div>
    );
};

export {MoviesPage};

