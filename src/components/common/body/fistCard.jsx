import React from 'react';
import { Card } from 'react-bootstrap';

const FistCard = (prop) => {
    return (
        <Card className="w-90 mt-n4 rounded-more mx-auto border-0 shadow-sm">
            <Card.Body className="rtl text-center pr-3">
                {prop.children}
            </Card.Body>
        </Card>
    );
};

export default FistCard;