import React from 'react';
//icons
import { MdPinDrop } from 'react-icons/md'

const Location = ({address}) => {
    return (
        <>
            <img alt="address" height="105" className="w-90 mx-auto rounded" src="https://img3.oastatic.com/img2/32588987/728x410c/karteninformationen_pro.jpg?cachebust=IueFzYtHUuc"/>
            <p className="text-right text-muted mt-3 mr-3 font-sm rtl">
                <MdPinDrop className="ml-1 text-lightblue"/>
                {address}    
            </p>
        </>
    );
};

export default Location;