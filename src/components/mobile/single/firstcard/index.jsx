import React from 'react';
//icons
import { MdPhoneInTalk} from 'react-icons/md'
//component
import FirstCard from '../../../common/body/fistCard';

const Index = ({tele,imgs}) => {
    return (
        <FirstCard>
            <small className=" text-muted">
                <MdPhoneInTalk className="mirror ml-1 text-lightblue"/>
                {tele}
            </small>
            <div className="row pt-3 d-flex justify-content-center">
                {imgs.map((item,id)=>(
                    <div key={id} className="col-3">
                        <img className="rounded-more" src={item} alt=""/>
                    </div>
                ))}
            </div>
        </FirstCard>
    );
};

export default Index;