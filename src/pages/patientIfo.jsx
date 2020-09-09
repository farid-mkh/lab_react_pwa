import React, { useState,useEffect } from 'react';
import { Card, Modal,Button} from 'react-bootstrap';
//common components
import GoBack from '../components/common/header/goBack';
import FirstCard from '../components/common/body/fistCard';
import ContinueBtn from '../components/common/footer/continueBtn';
//components
import TopCard from '../components/mobile/patientInfo/body/topCard';
import FirstTab from '../components/mobile/patientInfo/body/FirstTab';
import SecondTab from '../components/mobile/patientInfo/body/SecondTab';
//form Handling function 
import FormHandling from '../components/mobile/patientInfo/FormHandling/FormHandling';
//icons
import { MdError } from 'react-icons/md';

const PatientIfo = ({person,newUser,setNewUser,...props}) => {
    const [alert,setAlert] = useState(false);
    const [show,setShow] = useState(true);
    //funcs
    const {
        GenderChange,
        DateChange,
        PhoneChange,
        InputChanges
    } = FormHandling({newUser,setNewUser})
    useEffect(()=>{
        if(!person){
            setShow(false)
        }
    },[person])
    const GoToNext = () =>{
        if(!show){
            if(!newUser.name || !newUser.family || !newUser.tele){
                setAlert(true)
            }
            else
                props.history.push('/mobile/second')
        }
        else
            props.history.push('/mobile/second')
    }
    return (
        <>
            <Modal className="alert" scrollable centered show={alert} onHide={()=>setAlert(false)}>
                <Modal.Header className="text-center pt-3">
                    <MdError size="30"/>
                </Modal.Header>
                <Modal.Body className="text-right rtl mb-4">
                         فیلد های ستاره دار و شماره تلفن را الزامی است!
                </Modal.Body>
            </Modal>
            <GoBack onClick={()=>props.history.goBack()}/> 
            <FirstCard>
                <TopCard className="text-center animate__animated animate__fadeIn"/>
                <div className="border px-0 row w-75 mx-auto mt-3 rounded-more">
                    <div className={`col-6 py-2 rounded-right-more text-center ${show ?'bg-lightgreen':''}`}>
                        <span className="btn" onClick={()=>setShow(true)}>خودم</span>
                    </div>
                    <div className={`col-6 py-2 rounded-left-more text-center ${!show ?'bg-lightgreen':''}`}>
                        <span className="btn px-0" onClick={()=>setShow(false)}>شخص دیگر</span>
                    </div>
                </div>
            </FirstCard>
            <Card className="rtl p-4 w-90 mt-3 mb-5 rounded-more mx-auto py-2 text-right border-0 shadow animate__animated animate__fadeIn">
                {show ? 
                (<>
                    {person ?
                        <div className="pr-5 mt-3 pt-3 pb-5">
                            <FirstTab name={person.name} tele={person.tele}/>
                            </div>:
                        <div className="center pt-3 pb-5">
                            <Button className="rounded-pill px-4 btn-red border-0">ورود</Button><br/>
                            <small className="text-muted w-100 text-center">برای ورود با حساب کاربری خود بر روی دکمه بالا کلیک کنید</small>
                        </div>
                    }
                </>) : 
                (<SecondTab PhoneChange={PhoneChange} DateChange={DateChange} InputChanges={InputChanges} newUser={newUser} GenderChange={GenderChange}/>)
                }
            </Card>
            <ContinueBtn onClick={GoToNext}>ادامه</ContinueBtn>
        </>
    );
};

export default PatientIfo;