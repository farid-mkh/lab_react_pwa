import React from 'react';
import { Card } from 'react-bootstrap';
//components
import FirstCard from './firstcard/index';
import Location from './secondcard/location';
import Services from './secondcard/services';
import Desc from './secondcard/desc';
//icons
import { MdAlarm } from 'react-icons/md'

const Index = ({address,workHour,howOften,services,desc,tele,imgs}) => {
    return (
        <div>
            <FirstCard tele={tele} imgs={imgs}/>
            <Card className="w-90 my-4 rounded-more mx-auto py-2 text-right border-0 shadow">
                <p className="text-muted mt-0 mb-1 mr-3 font-sm rtl">
                    <MdAlarm className="ml-1 text-lightblue"/>
                    {howOften} / <span className="font-weight-bold">{workHour}</span>
                </p>
                <Location address={address}/>
                <Services services={services}/>
                <span className="border-bottom w-90 mx-auto my-2"></span>
                <Desc desc={desc}/>
            </Card>
        </div>
    );
};

export default Index;