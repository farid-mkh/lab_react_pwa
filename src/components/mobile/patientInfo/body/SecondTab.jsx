import React from 'react';
import {Form, Col} from 'react-bootstrap';
//date
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
//phone
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

const SecondTab = ({newUser,GenderChange,InputChanges,DateChange,PhoneChange}) => {
    return (
        <Form>
            <Form.Row className="mb-3">
                <Col>
                    <Form.Control onChange={InputChanges} name="name" value={newUser.name} placeholder="نام *" />
                </Col>
                <Col xs={7}>
                    <Form.Control onChange={InputChanges} name="family" value={newUser.family} placeholder="نام خانوادگی *" />
                </Col>
            </Form.Row>
            <PhoneInput
                defaultMask="... ... .. .."
                country={'ir'}
                areaCodes={{ir: ['2694', '2647']}}
                value={newUser.tele}
                onChange={PhoneChange}
                name="tele"
                inputClass="text-muted w-100 text-left mt-5"
                className="mt-5"
                placeholder="+98 912 191 1234"
            />
            <Form.Row className="mt-3">
                <Col xs={7}>
                    <DatePicker 
                        shouldHighlightWeekends
                        locale="fa"
                        inputPlaceholder="تاریخ تولد"
                        inputClassName="form-control"
                        value={newUser.bornDate}
                        onChange={DateChange}
                    />
                </Col>
                <Col className="px-0 mt-2">
                    <Form.Check
                        custom
                        inline
                        label="مرد"
                        type="radio"
                        name="Gender"
                        id="custom-inline-radio-1"
                        value="مرد"
                        onChange={GenderChange}
                        checked={newUser.gender === 'مرد'? true:false}
                    />
                    <Form.Check
                        custom
                        inline
                        label="زن"
                        type="radio"
                        name="Gender"
                        id="custom-inline-radio-2"
                        value="زن"
                        onChange={GenderChange}
                        checked={newUser.gender === 'زن'? true:false}
                    />
                </Col>
            </Form.Row>
        </Form>
    );
};

export default SecondTab;