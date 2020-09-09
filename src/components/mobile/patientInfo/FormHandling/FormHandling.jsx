// import React from 'react';

const FormHandling = ({newUser,setNewUser}) => {
    const GenderChange = (e) => {
        setNewUser({...newUser,gender: e.target.value});
    }
    const DateChange = (e) => {
        setNewUser({...newUser,bornDate: e});
    }
    const PhoneChange = (e) => {
        setNewUser({...newUser,tele: e});
    }
    const InputChanges = e =>
    {
        const {name,value} = e.target
        const fieldValue = {[name]:value}
        setNewUser({...newUser,...fieldValue});
    }
    
    return {
        GenderChange,
        DateChange,
        PhoneChange,
        InputChanges
    }
};

export default FormHandling;