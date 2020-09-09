import React from 'react';
import { Card} from 'react-bootstrap';
//icon
import { MdAddAlarm } from 'react-icons/md';
//components
import Location from '../../mobile/single/secondcard/location'
import Services from '../../mobile/single/secondcard/services'

const RightNav = ({center}) => {
    return (
        <Card className="animate__animated animate__fadeIn my-3 border-0 shadow-yellow rounded-more pb-4">
            <div className="border-bottom border-light mx-3 pt-3 py-0 rtl text-right" style={{height:90}}>
                <img width="50" height="50" className="rounded-circle border-white" src="//via.placeholder.com/50x50" alt="profile"/>
                <div className="font-sm w-75 float-left text-center text-muted">
                    <p className="line-height-25 font-weight-bold">{center.name}</p>
                    <span className="position-absolute absolute-centerTime font-xsm">
                        <MdAddAlarm className="text-lightblue ml-2"/>
                        {center.howOften} / {center.hour}
                    </span>
                </div>
            </div>
            <div className="row pt-3 pr-3 mx-0 d-flex justify-content-center">
                {center.imgs.map((item,id)=>(
                    <div key={id} className="col-3">
                        <img className="rounded-more" src={item} alt=""/>
                    </div>
                ))}
            </div>
            <div className="mt-4 text-center">
                <Location address={center.address}/>
                <Services services={center.services}/>
            </div>
        </Card>
    );
};

export default RightNav;