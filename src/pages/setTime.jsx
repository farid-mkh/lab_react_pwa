import React, { useState } from 'react';
import {Button} from 'react-bootstrap'
//common components
import GoBack from '../components/common/header/goBack';
import ContinueBtn from '../components/common/footer/continueBtn';
import FistCard from '../components/common/body/fistCard';
//components
import SetHour from '../components/mobile/setTime/setHour';
//icon
import { MdDateRange, MdArrowBack } from 'react-icons/md';
//calender
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import {Calendar,utils} from 'react-modern-calendar-datepicker';

const SetTime = ({selectedDay,setSelectedDay,disabledDays,definedHour,setDefinedHour,availableHour,...props}) => {
    const [showHour,setShown] = useState(false);
    //date 
    const nowTime = utils('fa').getToday();
    //
    const Continue = () =>{
        props.history.push('/mobile/final')
    }
    const setDate = (e) => {
        setSelectedDay(e);
        setShown(true)
    }
    return (
        <>
            <GoBack onClick={()=>props.history.goBack()}/> 
            <FistCard>
                <h5>{showHour?'ساعت مراجعه':'روز مراجعه'}</h5>
                <small>
                    {!showHour?
                        'از بین زمان های انتخاب شده، زمان مورد نظر را انتخاب کنید.'
                        :(
                            <div className="font-weight-boldc">
                                <MdDateRange className="h6 mt-1 ml-2 text-lightblue"/>
                                {selectedDay.month+"/"+selectedDay.day}
                            </div>
                        )} 
                </small>
            </FistCard>
            <div className="mt-3 mb-3 d-flex justify-content-center">
                {!showHour?(
                <Calendar
                    locale="fa"
                    value={selectedDay}
                    colorPrimary="#95e1d3"
                    onChange={setDate}
                    shouldHighlightWeekends
                    minimumDate={nowTime}
                    disabledDays={disabledDays}
                    className="animate__animated animate__fadeIn"
                />):
                (<SetHour definedHour={definedHour} setDefinedHour={setDefinedHour} availableHour={availableHour}/>)}
            </div>
            {showHour?(
                <>
                    <ContinueBtn className={!selectedDay?'disabled':''} onClick={Continue}>ادامه</ContinueBtn>
                    <div className="text-center mt-5 mr-3">
                        <Button className="btn-light border text-muted rtl" onClick={()=>setShown(false)}>
                            <span className="font-sm ml-2"> بازگشت به تعیین تاریخ</span>
                            <MdArrowBack/>
                        </Button>
                    </div>
                </>
            ):null}
        </>
    );
};

export default SetTime;