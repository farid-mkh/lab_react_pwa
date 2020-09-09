import React from 'react';
//common
import Header from '../components/common/header/index';
//component: pages
import PatientIfo from '../pages/patientIfo'
import SendReq from '../pages/sendReq'
import SetTime from '../pages/setTime'
import Single from '../pages/single'
////////func and states
import StateFunc from '../components/StateFunc'
//route
import {Route,Switch} from 'react-router-dom';


const Mobile = ({user,...props}) => {
    const {
        center,
        prescription,
        setPrescription,
        newUser,
        setNewUser,
        selectedDay,
        setSelectedDay,
        definedHour,
        setDefinedHour,
        SendRequest
    } = StateFunc()
    //time
    //date
        const disabledDays = [{year: 1399,month: 5,day: 30,}]
    //hour
        const availableHour = ['10-12','13-15','17-19']
    return (
        <>
            <Header name={center.name}/>
            <Switch>
                <Route  exact path="/mobile/" 
                        render={(props)=><PatientIfo {...props}  person={user} newUser={newUser} setNewUser={setNewUser}/>}/>
                <Route  exact path="/mobile/second" 
                        render={(props)=><SetTime {...props} disabledDays={disabledDays} definedHour={definedHour} setDefinedHour={setDefinedHour} availableHour={availableHour} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />}/>
                <Route exact path="/mobile/final" 
                        render={(props)=><SendReq {...props} SendRequest={SendRequest} prescription={prescription} setPrescription={setPrescription}/>}/>
                <Route exact path={`/mobile/single/${center.name}`} component={Single}/>
            </Switch>
        </>
    );
};

export default Mobile;