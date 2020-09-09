import React from 'react';
import { Button } from 'react-bootstrap';
//icon
import { MdArrowBack } from 'react-icons/md';

const goBack = ({onClick}) => {
    return (
        <Button className="absolute-top position-absolute bg-transparent border-0" 
                onClick={onClick}>
                 <MdArrowBack size="25" color="#000"/>   
        </Button>
    );
};

export default goBack;