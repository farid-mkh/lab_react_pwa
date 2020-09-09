import React, { useState,useRef } from 'react';
import { Overlay,Popover } from 'react-bootstrap';
//common components
import GoBack from '../components/common/header/goBack';
import FirstCard from '../components/common/body/fistCard';
import ContinueBtn from '../components/common/footer/continueBtn';
//icons
import { MdAddAPhoto, MdHelpOutline } from 'react-icons/md';

const SendReq = ({prescription,setPrescription,SendRequest,...props}) => {
    const [loaded,setLoad] = useState(false) 
    const ChangeImage = (event) =>{
        setPrescription(URL.createObjectURL(event.target.files[0]))
        setLoad(true)
    }
    //help popup
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };
    return (
        <>
            <GoBack onClick={()=>props.history.goBack()}/> 
            <FirstCard>
                <p>ارسال نسخه</p>
                <small className="text-muted">لطفا نسخه خود را در محل تعیین شده قرار دهید</small>   
            </FirstCard> 
            <div className="text-right p-4 text-muted">
                <p>
                    <span onClick={handleClick}><MdHelpOutline className="mirror mr-1"/></span>
                    {/* help popup */}
                    <Overlay
                        show={show}
                        target={target}
                        placement="bottom"
                        container={ref.current}
                        containerPadding={20}
                    >
                        <Popover id="popover-contained" className="rounded-more">
                            <Popover.Content className="rtl text-right text-muted">
                            نسخه های باید بررسی گردند سپس  به شما اطلاع رسانی خواهد شد.
                            </Popover.Content>
                        </Popover>
                    </Overlay>
                    <span className="ml-1">نیاز به بررسی نسخه</span>
                </p>
            </div>
            {!loaded ? 
                (<label className="mb-3 rtl cursor-pointer mt-4 w-100 animate__animated animate__fadeIn">
                    <div className="py-3 border-dashed rounded-more w-90 mx-auto text-center">
                        <input onChange={ChangeImage} value={prescription} type="file" className="d-none"/>
                        <MdAddAPhoto className="text-muted" style={{fontSize:100}}/>
                        <p className="ml-3 font-weight-bold text-muted mt-3">ارسال نسخه</p>
                    </div>
                </label>):
                (<div className="d-flex justify-content-center mb-4 animate__animated animate__fadeIn">
                    <img alt="تصویر نسخه" className="w-90 rounded-more" height="192" src={prescription}/>
                </div>)
            }
            <ContinueBtn onClick={SendRequest}>
                ارسال و بررسی
            </ContinueBtn>
        </>
    );
};

export default SendReq;