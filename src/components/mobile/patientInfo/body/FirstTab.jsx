import React from 'react';
//icons
import { MdPerson, MdPhoneAndroid } from 'react-icons/md'

const FirstTab = ({name,tele}) => {
    return (
        <div className="text-right">
            <div>
                <span className="text-muted">
                    <MdPerson className="ml-1 text-lightblue"/>
                    <span className="font-sm">نام شما    </span>
                </span>
                <span className="mr-4">{name}</span>
            </div>
            <div className="mt-3">
                <span className="text-muted">
                    <MdPhoneAndroid className="ml-1 text-lightblue"/>
                    <span className="font-sm">تلفن شما  </span>
                </span>
                <span className="mr-4">{tele}</span>
            </div>
        </div>
    );
};

export default FirstTab;