import React,{useState} from 'react';
import { Card, Col, Row, Button} from 'react-bootstrap';
//img
import img from '../assets/img/desktop.png';
//icons
import { MdAddAPhoto } from 'react-icons/md';
//form Handling function 
import FormHandling from '../components/mobile/patientInfo/FormHandling/FormHandling';
//components
import RightNav from '../components/desktop/rightNav/rightNav'
import SecondTab from '../components/mobile/patientInfo/body/SecondTab';
import FirstTab from '../components/mobile/patientInfo/body/FirstTab';
import ContinueBtn from '../components/common/footer/continueBtn'
//time
import SetTime from '../components/desktop/setTime';
////////func and states
import StateFunc from '../components/StateFunc'
import { useEffect } from 'react';

const Desktop = ({user,...props}) => {
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
    //prescript
    const [loaded,setLoad] = useState(false) 
    const ChangeImage = (event) =>{
        setPrescription(URL.createObjectURL(event.target.files[0]))
        setLoad(true)
        console.log(props);
    }
    //fields
    const [showNewUserBox,setShowNewUserBox] = useState(false);
    useEffect(()=>{
        if(!user){
            setShowNewUserBox(true)
        }
    },[user])
    const {
        GenderChange,
        DateChange,
        PhoneChange,
        InputChanges
    } = FormHandling({newUser,setNewUser})
    //time
    const [showHour,setShowHours] = useState(false);
        //date 
        const disabledDays = [{year: 1399,month: 5,day: 30,}]
        const setDate = (e) => {
            setSelectedDay(e);
            setShowHours(true)
        }
        //hour
        const availableHour = ['10-12','13-15','17-19']
    return (
        <div className="min-vh-100 bg-light pt-4">
            <Card className="col-lg-8 col-md-12 mx-auto rounded-more border-0 shadow-sm">
                <div className="bubble position-absolute bg-yellow absolute-top"></div>
                <div className="bubble position-absolute bg-lightgreen absolute-bottom-right"></div>
                <div className="bubble position-absolute bg-red absolute-center opacity-10"></div>
                <Row>
                    <Col md={9}>
                        <Row>
                            <Col className="animate__animated animate__fadeIn">
                                <div className="mb-5 w-100 animate__animated animate__fadeIn">
                                    <SetTime  disabledDays={disabledDays} showHour={showHour} selectedDay={selectedDay} setShowHours={setShowHours}
                                            setDate={setDate} availableHour={availableHour} definedHour={definedHour} setDefinedHour={setDefinedHour}/>
                                </div>
                                
                                <img width="400" src={img} alt=""/>
                            </Col>
                            <Col className="pt-3 rtl">
                                <Card className="border-0 shadow-yellow w-90 mx-auto rounded-more animate__animated animate__fadeIn">
                                    <div className="row pt-3 pr-5 bg-yellow-low pb-3 shadow-yellow mx-0 rounded-more">
                                        <div className={`py-2 text-right ${!showNewUserBox ?'text-red border-bottom-red font-weight-bolder':'text-silver'}`}>
                                            <span className="cursor font-lg font-titr" onClick={()=>setShowNewUserBox(false)}>خودم</span>
                                        </div>
                                        <div className={`py-2 text-right mr-5 ${showNewUserBox ?'text-red border-bottom-red font-weight-bolder':'text-silver'}`}>
                                            <span className="cursor font-lg  font-titr" onClick={()=>setShowNewUserBox(true)}>شخص دیگر</span>
                                        </div>
                                    </div>
                                    {!showNewUserBox ? 
                                    (<>
                                        {user?
                                            <div className="pr-5 mt-3 pt-3 pb-5">
                                                <FirstTab name={user.name} tele={user.tele}/>
                                                </div>:
                                            <div className="center pt-3 pb-5">
                                                <Button className="rounded-pill px-4 btn-red border-0">ورود</Button><br/>
                                                <small className="text-muted w-100 text-center">برای ورود با حساب کاربری خود بر روی دکمه بالا کلیک کنید</small>
                                            </div>
                                        }
                                    </>) : 
                                    (<div className="px-4 py-5">
                                        <SecondTab PhoneChange={PhoneChange} DateChange={DateChange} InputChanges={InputChanges} newUser={newUser} GenderChange={GenderChange}/>
                                    </div>)
                                    }
                                </Card>
                                <div className="mt-5">
                                    <div className="text-center pt-3">
                                        {!loaded ? 
                                            (<label className="mb-3 rtl cursor-pointer mt-4 w-100">
                                                <div className="py-3 border-dashed rounded-more w-90 mx-auto text-center">
                                                    <input onChange={ChangeImage} value={prescription} type="file" className="d-none"/>
                                                    <MdAddAPhoto className="text-muted" style={{fontSize:100}}/>
                                                    <p className="ml-3 font-weight-bold text-muted mt-3">ارسال نسخه</p>
                                                </div>
                                            </label>):
                                            (<div className="d-flex justify-content-center">
                                                <img alt="تصویر نسخه" className="w-90 rounded-more" height="192" src={prescription}/>
                                            </div>)
                                        }
                                    </div>
                                    <p className="text-muted rtl text-right pr-3 mt-4 font-sm">نسخه شما بعد از ارسال بررسی خواهد شد و متعاقبا نتیجه آن اعلام می شود.</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <RightNav center={center}/>
                        <ContinueBtn onClick={SendRequest} className="mt-5 animate__animated animate__fadeIn">بررسی و ثبت</ContinueBtn>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default Desktop;