import React from 'react';
import { Button } from 'react-bootstrap';

const ContinueBtn = ({onClick,className,...prop}) => {
    return (
        <div className="pb-4 w-100 d-flex justify-content-center">
            <Button onClick={onClick} variant="yellow" className={`font-weight-bold text-muted w-75 rounded-pill py-3 ${className}`}>
                {prop.children}
            </Button>
        </div>
    );
};

export default ContinueBtn;