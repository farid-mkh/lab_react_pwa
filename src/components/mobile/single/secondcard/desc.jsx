import React from 'react';
//icons
import { MdList } from 'react-icons/md'

const Desc = ({desc}) => {
    return (
        <div className="pt-2">
            <p className="text-muted mb-2 mr-3 font-sm font-weight-bold rtl">
                <MdList className="mirror ml-1 text-lightblue"/>
                معرفی مرکز
            </p>
            <p className="mx-4 font-md line-height-28">
                {desc}
            </p>
        </div>
    );
};

export default Desc;