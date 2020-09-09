import React from 'react';
import { Card,Col,Form,Row } from 'react-bootstrap';

const SetHour = ({availableHour,definedHour,setDefinedHour}) => {
    const handleOnChange = (e) => {
        setDefinedHour(e.target.value);
    }
    return (
        <Card  className="w-90 mb-3 px-3 rounded-more mx-auto py-2 text-right border-0 shadow animate__animated animate__fadeIn">
            <Form.Group as={Row}>
                <Col className="text-center">
                    {availableHour.map((item,id)=>(
                        <Form.Check 
                            key={id}
                            custom
                            type="radio"
                            label={item}
                            value={item}
                            className={id !== availableHour.length-1 ?'border-bottom my-3 pb-3':' '}
                            name="Hour"
                            id={id+1}
                            onChange={handleOnChange}
                            checked={item===definedHour}
                        />
                    ))}
                </Col>
            </Form.Group>
        </Card>
    );
};

export default SetHour;