import React, { useState } from 'react';
//components
import Body from '../components/mobile/single/index'

const Single = () => {
    // const [centerInfo,setCenterInfo] = useState({
    const [centerInfo] = useState({
        tele : '02144444444',
        services : ['رادیولوژی','قلب و عروق'],
        desc : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
        howOften : "هر روز",
        workHour : ' 9-12',
        address:'تهران-ستارخان-خسرو شمالی',
        imgs:['https://via.placeholder.com/60','https://via.placeholder.com/60','https://via.placeholder.com/60','https://via.placeholder.com/60']
    })  
    return (
        <>
            <Body 
                address = {centerInfo.address}
                workHour = {centerInfo.workHour}
                howOften = {centerInfo.howOften}
                services = {centerInfo.services}
                desc = {centerInfo.desc}
                tele = {centerInfo.tele}
                imgs = {centerInfo.imgs}
            />
        </>
    );
};

export default Single;