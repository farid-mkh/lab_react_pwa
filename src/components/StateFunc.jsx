import { useState } from 'react';
import firebase from 'firebase'

const StateFunc = () => {
    //userInfo
    const [user,setUser] = useState()
    const center ={
        name: "مرکز تصویربرداری و آزمایشگاه تخصصی پارسیان",
        hour: '8-10',
        howOften:'شنبه - پنجشنبه',
        services : ['رادیولوژی','قلب و عروق'],
        address:'تهران-ستارخان-خسرو شمالی',
        imgs:['https://via.placeholder.com/50','https://via.placeholder.com/50',
            'https://via.placeholder.com/50','https://via.placeholder.com/50']
    }
    const [prescription,setPrescription] = useState();
    const [newUser,setNewUser] = useState(
        {
            name:'',
            family:'',
            tele:'',
            bornDate:null,
            gender:''
        }
    )
    const [selectedDay, setSelectedDay] = useState(null);
    const [definedHour,setDefinedHour] = useState('');
    //
    const SendRequest = () =>{
        if(navigator.onLine){
            firebase.database().ref("shafadoc").set({
                name:newUser.name,
                family:newUser.family,
                tele:newUser.tele,
                borndate:newUser.bornDate,
                gender:newUser.gender,
                image:prescription,
                date:selectedDay,
                hour:definedHour
            })
            alert("با موفقیت انجام شد");
        }
        else{
            alert('مشکل در برقراری ارتباط!')
        }
    }
    return {
        user,
        setUser,
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
    }
};

export default StateFunc;