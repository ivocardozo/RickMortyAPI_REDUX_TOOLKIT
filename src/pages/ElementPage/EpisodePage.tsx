import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { fetchCharacter } from '../../redux/slices/charactersSlice';
import { fetchEpisode } from '../../redux/slices/episodesSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { ICharacter } from '../../redux/types';
import Sidebar, { sidebarTypes } from '../Sidebar/Sidebar';
import "./elementPage.scss";

const arrow_right = require("../../images/arrow-right.png");

const EpisodePage = () => {
    const dispatch = useAppDispatch();
    const {id = "0"} = useParams();

    const el = useAppSelector(state => state.episodesSlice.active);

    useEffect(() => {
        dispatch(fetchEpisode(id));
    }, [])

    return (
        <div className="element-page">
            <Sidebar type={sidebarTypes.elementpage} />
            <div className="container">
                <div className="element-page__header">
                    <h1>Element Page</h1>
                    <NavLink to="../episodes/">
                        Назад
                        <img src={arrow_right} alt="" />
                    </NavLink>
                </div>

                <div className="element-page__info">
                    <div>
                        <h2>{el?.name}</h2>
                        <h4>{el?.episode}</h4>
                        <p><strong>Date: </strong>{el?.air_date}</p>
                    </div>
                        
                </div>

                <div className="element-page__episodes">
                    <h2 className="element-page__episodes-title">Episodes</h2>

                    { el?.characters?.map( (character) => {
                        character = character as ICharacter;

                        return (
                            <NavLink 
                                to={"../characters/"+character.id} 
                                className="element-page__episodes-item"
                                key={character.id}
                            >
                                <img src={character.image} />
                                <h3>{character.name}</h3>
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default EpisodePage