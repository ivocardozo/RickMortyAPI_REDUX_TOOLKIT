import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import Sidebar, { sidebarTypes } from '../Sidebar/Sidebar';
import { ICharacter } from "../../redux/types";

import "./elementPage.scss";
import { fetchLocation } from '../../redux/slices/locationsSlice';

const arrow_right = require("../../images/arrow-right.png");

const LocationPage = () => {
    const dispatch = useAppDispatch();
    const {id = "0"} = useParams();

    const el = useAppSelector(state => state.locationsSlice.active);

    useEffect(() => {
        dispatch(fetchLocation(id));
    }, [])

    return (
        <div className="element-page">
            <Sidebar type={sidebarTypes.elementpage} />
            <div className="container">
                <div className="element-page__header">
                    <h1>Element Page</h1>
                    <NavLink to="../locations/">
                        Назад
                        <img src={arrow_right} alt="" />
                    </NavLink>
                </div>

                <div className="element-page__info">
                    <div>
                        <h2>{el?.name}</h2>
                        <p>Type: {el?.type}</p>
                        <p>Dimension: {el?.dimension}</p>
                    </div>
                </div>

                <div className="element-page__episodes">
                    <h2 className="element-page__episodes-title">Residents</h2>

                    { el?.residents?.map( (resident) => {
                        resident = resident as ICharacter;

                        return (
                            <NavLink 
                                to={"../characters/"+resident.id} 
                                className="element-page__episodes-item"
                                key={resident.id}
                            >
                                <img src={resident.image} />
                                <h3>{resident.name}</h3>
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default LocationPage;