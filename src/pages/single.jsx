import React from 'react';
//components
import Header from '../components/header/index'

const Single = ({logo}) => {
    const name = "مرکز تصویربرداری و آزمایشگاه تخصصی پارسیان"
    return (
        <>
            <Header logo={logo} name={name}/>
        </>
    );
};

export default Single;