import React, { FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchPullCharacters } from '../../redux/slices/charactersSlice';
import { fetchPullEpisodes } from '../../redux/slices/episodesSlice';
import { fetchPullLocations } from '../../redux/slices/locationsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { ICharacter, ILocation } from '../../redux/types';
import Sidebar, { sidebarTypes } from '../Sidebar/Sidebar';
import Link from './Link/Link';

import "./List.scss";

const arrow_right = require("../../images/arrow-right.png");

export const listTypes = {
    characters: sidebarTypes.characters,
    locations: sidebarTypes.locations,
    episodes: sidebarTypes.episodes
}

interface IProps{
    type: 
        typeof listTypes.characters |
        typeof listTypes.locations |
        typeof listTypes.episodes
}

const List: FC<IProps> = (props) => {
    const dispatch = useAppDispatch();

    const listType = props.type;
    const listTypeID = Object.values(listTypes).indexOf(listType);
    const sidebarType = [sidebarTypes.characters, sidebarTypes.locations, sidebarTypes.episodes][listTypeID];
    const listTitle = ["Characters", "Locations", "Episodes"][listTypeID];
    const fetchPull = [fetchPullCharacters, fetchPullLocations, fetchPullEpisodes][listTypeID];

    const state = useAppSelector(state => {
        let slice;
        switch(listTypeID){
            case 0: {
                slice = state.charactersSlice;
                break;
            }
            case 1: {
                slice = state.locationsSlice;
                break;
            }
            case 2: {
                slice = state.episodesSlice
                break;
            }
        }
        return slice;
    })

    const pull = state?.results;
    const info = state?.info;

    return (
        <div className="list">
            <Sidebar type={sidebarType} />
            <div className="container">
                <div className="list__header">
                    <h1>{listTitle}</h1>
                    <NavLink to="../">
                        Назад
                        <img src={arrow_right} alt="" />
                    </NavLink>
                </div>

                <div className="list__pull">
                    { pull?.map((el) => {
                        
                        return(<Link data={el} key={el.id}>

                            <h1>{el.name}</h1>
                        </Link>)
                    })}

                    <div className="list__pull-nav">
                        { info?.prev ? 
                            <button onClick={() => {
                                dispatch(fetchPull(info?.prev))
                            }}>Prev</button> : <div></div>
                        } 
                        { info?.next ?
                            <button onClick={() => {
                                dispatch(fetchPull(info?.next))
                            }}>Next</button> : <div></div>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default List