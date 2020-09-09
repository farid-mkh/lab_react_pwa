import React from 'react';
import { Button,Card,Form,Col,Row} from 'react-bootstrap';
//icons
import {  MdPermContactCalendar, MdArrowBack } from 'react-icons/md';
//calender
import {Calendar,utils} from 'react-modern-calendar-datepicker';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

const SetTime = ({showHour,selectedDay,setDate,disabledDays,definedHour,setDefinedHour,availableHour,setShowHours}) => {
    const nowTime = utils('fa').getToday();
    const handleOnChange = (e) => {
        setDefinedHour(e.target.value);
    }
    return (
        <div className="mt-3 mb-5 d-flex justify-content-center">
            {!showHour?(
                <Calendar
                    locale="fa"
                    value={selectedDay}
                    colorPrimary="#95e1d3"
                    onChange={setDate}
                    shouldHighlightWeekends
                    minimumDate={nowTime}
                    disabledDays={disabledDays}
                />):
            (
                <Card className="border-0 shadow-yellow w-90 mx-auto rounded-more bg-white pb-3">
                    <div className="pt-3 bg-yellow-low pb-3 shadow-yellow mx-0 rounded-more text-center">
                        <p className="font-sm">لطفا زمان مورد نظر را انتخاب کنید</p>
                        <MdPermContactCalendar className="ml-2 text-lightblue"/>
                        {selectedDay.day} / {selectedDay.month}                        
                    </div>
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
                    <div className="text-center">
                        <Button className="btn-yellow border-0 text-muted rtl" onClick={()=>setShowHours(false)}>
                            <span className="font-sm ml-2"> بازگشت به تعیین تاریخ</span>
                            <MdArrowBack/>
                        </Button>
                    </div>
                </Card>
            )}
        </div>
    );
};

export default SetTime;