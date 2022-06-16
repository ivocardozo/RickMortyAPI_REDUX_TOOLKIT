import React, { useEffect, useState } from 'react'
import { fetchPullCharacters } from '../../../redux/slices/charactersSlice';
import { fetchPullEpisodes } from '../../../redux/slices/episodesSlice';
import { fetchPullLocations } from '../../../redux/slices/locationsSlice';
import { useAppDispatch } from '../../../redux/store';

import "./filter.scss";



export const Characters_filter = () => {
    const dispatch = useAppDispatch();

    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [gender, setGender] = useState("");
    const [species, setSpecies] = useState("");
    const [type, setType] = useState("");

    let url = "https://rickandmortyapi.com/api/character/?"
        + ("name=" + name)
        + ("&status=" + status)
        + ("&gender=" + gender)
        + ("&species=" + species)
        + ("&type=" + type);

    useEffect(() => {
        dispatch(fetchPullCharacters(url));
    }, []);

    return (
        <div className="filter filter-characters">
            <div className="filter__name">
                <label>Name</label>
                <input placeholder="name" value={name} 
                    onChange={(e) => {setName(e.target.value)}}>
                </input>
            </div>
            <div className="filter__par">
                <div className="filter__par-status">
                    <label>Status</label>
                    <select onChange={ (e) => {setStatus(e.target.value)}}>
                        <option value="">Not Matter</option>
                        <option value="alive">Alive</option>
                        <option value="dead">Dead</option>
                        <option value="unknow">unknow</option>
                    </select>
                </div>
                <div className="filter__par-species">
                    <label>Species</label>
                    <select onChange={ (e) => {setSpecies(e.target.value)}}>
                        <option value="">Not Matter</option>
                        <option value="human">Human</option>
                        <option value="alien">Alien</option>
                        <option value="humanoid">Humanoid</option>
                        <option value="robot">Robot</option>
                        <option value="poopybutthole">Poopybutthole</option>
                        <option value="mythological">Mythological Creature</option>
                        <option value="disease">Disease</option>
                        <option value="cronenberg">Cronenberg</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
                <div className="filter__par-type">
                    <label>Type</label>
                    <select onChange={ (e) => {setType(e.target.value)}}>
                        <option value="">Not Matter</option>
                        <option value="genetic">Genetic Experiment</option>
                        <option value="parasite">Parasite</option>
                        <option value="superhuman">Superhuman</option>
                        <option value="cat-person">Cat-Person</option>
                        <option value="cromulon">Cromulon</option>
                        <option value="mytholog">Mytholog</option>
                        <option value="bepisian">Bepisian</option>
                        <option value="fish">Fish Person</option>
                        <option value="elephant">Elephant Human</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird-person">Bird Person</option>
                        <option value="boobloosian">Boobloosian</option>
                        <option value="gromflomite">Gromflomite</option>
                        <option value="vampire">Vampire</option>
                        <option value="microverse">Microverse</option>
                        <option value="light">Light bulb-Alien</option>
                        <option value="demon">Demon</option>
                        <option value="clone">Clone</option>
                        <option value="shapeshifter">Shapeshifter</option>
                        <option value="zombodian">Zombodian</option>
                        <option value="god">Goddess</option>
                        <option value="garblovian">Garblovian</option>
                        <option value="Eat">Eat shiter-Person</option>
                        <option value="Cyborg">Cyborg</option>
                        <option value="plutonian">Plutonian</option>
                        <option value="zigerion">Zigerion</option>
                        <option value="krootabulan">Krootabulan</option>
                        <option value="monster">Monster</option>
                        <option value="meeseeks">Meeseeks</option>
                        <option value="bread">Bread</option>
                        <option value="scrotian">Scrotian</option>
                        <option value="slug">Slug</option>
                        <option value="giant">Giant</option>
                    </select>
                </div>
                <div className="filter__par-gender">
                    <label>Gender</label>
                    <select onChange={ (e) => {setGender(e.target.value)}}>
                        <option value="">Not Matter</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="genderless">Genderless</option>
                        <option value="unknown">Unknow</option>
                    </select>
                </div>
            </div>
            <button 
                onClick={() => {dispatch(fetchPullCharacters(url))}} 
                className="filter__find"
            >FIND</button>
        </div>
    )
}

export const Locations_filter = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPullLocations());
    }, []);

    let url = "https://rickandmortyapi.com/api/location/?"
        + ("name=" + name)
        + ("&type=" + type)

    return (
        <div className="filter filter-location">
            <div className="filter__name">
                <label>Name</label>
                <input placeholder="name" value={name} 
                    onChange={(e) => {setName(e.target.value)}}>
                </input>
            </div>
            <div className="filter__type">
                <label>Type</label>
                <select onChange={(e) => {setType(e.target.value)}}>
                    <option value="">Not Matter</option>
                    <option value="planet">Planet</option>
                    <option value="space">Space Station</option>
                    <option value="microverse">Microverse</option>
                    <option value="dream">Dream</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="cluster">Cluster</option>
                    <option value="tv">TV</option>
                    <option value="resort">Resort</option>
                    <option value="artificially">Artificially Generated World</option>
                    <option value="nigthmare">Nightmare</option>
                    <option value="country">Country</option>
                    <option value="hell">Hell</option>
                    <option value="elemental">Elemental Rings</option>
                    <option value="human">Human</option>
                    <option value="asteroid">Asteroid</option>
                    <option value="spacecraft">Spacecraft</option>
                    <option value="consciousness">Consciousness</option>
                </select>
            </div>

            <button 
                onClick={() => {dispatch(fetchPullLocations(url))}}
                className="filter__find">
            FIND</button>
        </div>
    )
}

export const Episodes_filter = () => {
    const [name, setName] = useState("");
    const [season, setSeason] = useState("");

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchPullEpisodes());
    }, []);

    let url = "https://rickandmortyapi.com/api/episode/?"
        + ("name=" + name)
        + ("&episode=" + season);

    return (
        <div className="filter filter-episode">
            <div className="filter__name">
                <label>Name</label>
                <input placeholder="name" value={name} 
                    onChange={(e) => {setName(e.target.value)}}>
                </input>
            </div>
            <div className="filter__season">
                <label>Season</label>
                <select onChange={ (e) => {setSeason(e.target.value)}}>]
                    <option value="">Not Matter</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <button
                onClick={() => {
                    dispatch(fetchPullEpisodes(url));
                }}
                className="filter__find">
            FIND</button>
        </div>
    )
}


