import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "../components/headerContainer/Header";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { meActions } from "../redux/slices/MeSlice";
import css from "./MainLayout.module.css";

const MainLayout = () => {
    const dispatch = useAppDispatch();
    const isDarkMode = useAppSelector(state => state.darkMode.isDarkMode);

    useEffect(() => {
        dispatch(meActions.getMe());
    }, [dispatch]);

    return (
        <div className={`${css.mainContainer} ${isDarkMode ? css.darkModeMainContainer : ''}`}>
            <Header />
            <Outlet />
        </div>
    );
};

export { MainLayout };
