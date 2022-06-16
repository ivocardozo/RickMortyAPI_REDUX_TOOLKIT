import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { fetchCharacter } from '../../redux/slices/charactersSlice';
import { fetchEpisode } from '../../redux/slices/episodesSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { IEpisode } from '../../redux/types';
import Sidebar, { sidebarTypes } from '../Sidebar/Sidebar';
import "./elementPage.scss";

const arrow_right = require("../../images/arrow-right.png");

const CharacterPage = () => {
    const dispatch = useAppDispatch();
    const {id = "0"} = useParams();

    const el = useAppSelector(state => state.charactersSlice.active);

    useEffect(() => {
        dispatch(fetchCharacter(id));
    }, [])

    return (
        <div className="element-page">
            <Sidebar type={sidebarTypes.elementpage} />
            <div className="container">
                <div className="element-page__header">
                    <h1>Element Page</h1>
                    <NavLink to="../characters/">
                        Назад
                        <img src={arrow_right} alt="" />
                    </NavLink>
                </div>

                <div className="element-page__info">
                    <img src={el?.image} />
                    <div>
                        <h2>{el?.name}</h2>
                        <p><strong>STATUS</strong>: {el?.status}</p>
                        <p>Species: {el?.species}</p>
                        <p>Type: {el?.type}</p>
                        <p>Gender: {el?.gender}</p>
                    </div>
                </div>

                <div className="element-page__episodes">
                    <h2 className="element-page__episodes-title">Episodes</h2>

                    { el?.episode?.map( (episode) => {
                        episode = episode as IEpisode;

                        return (
                            <NavLink 
                                to={"../episodes/"+episode.id} 
                                className="element-page__episodes-item"
                                key={episode.id}
                            >
                                <h3>{episode.name}</h3>
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CharacterPage