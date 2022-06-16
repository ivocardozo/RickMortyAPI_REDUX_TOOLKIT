import React, { FC } from 'react'
import { NavLink } from 'react-router-dom';
import { ICharacter, ILocation, IEpisode } from '../../../redux/types'

import "./Link.scss";

interface IProps{
    data: any;
    children: React.ReactNode
}

const Link: FC<IProps> = (props) => {
    let {data} = props;
    let path = "";
    let listClassName="";

    if(data.image){
        path = "/characters/"
        listClassName = "character"
    } 
    if(data.air_data){
        path = "/episodes/";
        listClassName = "episode"
    } 
    if(data.dimension){
        path = "/locations/";
        listClassName = "location"
    } ;
    path+= data.id;

    return (
        <NavLink to={path} className={"el-link "+listClassName}>
            { data.image ? <img src={data.image}></img> : ""}        
            <h3>{data.name}</h3>
            { data.air_date ? <h5>{data.episode}</h5> : ""}
            { data.dimension ? <h5>{data.type}</h5> : ""}
        </NavLink>
    )
}

export default Link