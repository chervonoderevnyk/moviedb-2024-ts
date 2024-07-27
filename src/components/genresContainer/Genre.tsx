import {FC, PropsWithChildren} from "react";
import {IGenre} from "../../interfaces/genresInterfaceContainer/IGenre";

interface IProps extends PropsWithChildren{
    genre: IGenre
}

const Genre:FC<IProps> = ({genre}) => {

    const {
        // id,
        name} = genre;

    return (
        <div>
            {/*<div>id: {id}</div>*/}
            <div>{name}</div>
        </div>
    );
};

export {Genre};