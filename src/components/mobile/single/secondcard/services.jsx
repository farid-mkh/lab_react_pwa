import React,{useState} from 'react';
import { Card,Button,Modal } from 'react-bootstrap';
//icons
import { MdQuestionAnswer,MdReceipt } from 'react-icons/md'

const Services = ({services}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <p className="text-muted mt-0 mb-1 mr-3 font-weight-bold font-titr font-sm rtl text-right">
                <MdReceipt className="ml-1 text-lightblue"/>
                خدمات
            </p>
            <div className="w-75 text-center mx-auto my-2">
                {services.map((item,id) =>(
                    <Card key={id} className="my-1 pt-2 border-0 shadow-sm">
                        <Button onClick={handleShow} className="bg-transparent border-0 text-muted">
                            {item}
                        </Button>
                        <Modal className="info" scrollable centered show={show} onHide={handleClose}>
                            <Modal.Header className="text-center pt-5">
                                <span className="position-absolute modal-leftTop">هزینه : 25,000</span>
                                <span className="position-absolute modal-rightTop">دسته رادیولوژی</span>
                                <Modal.Title>{item}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="text-right">
                                <div className="text-red my-3 mr-3 font-sm rtl">
                                    <MdQuestionAnswer className="ml-1"/>
                                    راهنما    
                                </div>
                                <p className="px-4 line-height-28 rtl">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در... شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </p>
                            </Modal.Body>
                            <Modal.Footer className="d-flex justify-content-center">
                                <Button variant="light" className="px-5 py-2" onClick={handleClose}>بستن</Button>
                            </Modal.Footer>
                        </Modal>
                    </Card>
                ))}
            </div>
        </div> 
    );
};

export default Services;