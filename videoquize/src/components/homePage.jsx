
import { useState } from "react";

import VideoPlayer from "./VideoMarkers.jsx";
import NavBar from "./navbar";
import VideoList from "./videoLIst.jsx"
import Card from 'react-bootstrap/Card';
export const HomePage = () => {
    return (
        <>
            <div className="bg-dark h-100">
                <NavBar />
                <div className="d-flex">
                    <div className=" m-3 border border-dark rounded-5 h-100 shadow-lg">
                        <VideoPlayer />
                    </div>
                    <div className="w-25 p-3 d-none d-lg-block">
                        <VideoList />
                    </div>

                </div>
                <h3 className="text-white m-3"> تجربة روبوت الفرشاة</h3>
                <div>
                    <Card className="mx-3 bg-black opacity-75 text-white">
                        <Card.Body>
                            <Card.Title>
                                11,276 views  Mar 22, 2020  اساسيات ريادة الاعمال</Card.Title>
                            <Card.Text>
                                في الحلقة عثمان بدران هايتكلم عن مبادئ البراندينج و التسويق بالتركيز على شركات الناشئة. ازاي تصنع براند ناجح و مستدام؟ ازاي تخلي براند شركتك معاصر و تستخدم كل أنواع التسويق بطريقة ناجحة لشركتك؟ بخبرته مع شركات الكبيرة و الصغيرة، عثمان هايسعدك تبني براند شركتك!
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
}