import React from 'react';
import img from '../../../assets/img/blood-sample.png';
import { Link } from 'react-router-dom';

const Index = ({name}) => {
    return (
        <header className="nav header center" >
            <img alt="lab" src={img}/>
            <Link to={`/steps/single/${name}`} className="text-muted mt-2">{name}</Link>
        </header>
    );
};

export default Index;