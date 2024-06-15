// import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
// import React, {useState} from 'react';
/* eslint-disable jsx-a11y/anchor-is-valid */

function Java(){
    // const {course_id}=useParams();
    // const [courses, setCourses] = useState([]);
    // const addToCart = (name, link) =>{
    //     setCourses([...courses,{name, link}]);
    // };
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/assats/java.jpeg" className="img-thumbnail" alt="..." />
                </div>
                <div className="col-8">
                    <h3>Java</h3>
                    <p className="fw-bold">Java is a popular programming language, created in 1995.</p>
                    <p className="fw-bold">It is owned by Oracle, and more than 3 billion devices run Java.</p>
                    <p className="fw-bold">It is used for:</p>
                    <p className="fw-bold">    i)Mobile applications (specially Android apps)</p>
                    <p className="fw-bold">    i)Desktop applications</p>
                    <p className="fw-bold">    iii)Web servers and application servers,etc..</p>
                </div>
            </div>
            {/* Course Videos */}
            <div className="card mt-4">
                <div className="card-header">
                    <h3>Course Videos</h3>
                </div>
                <ul className="list-group list-group-flush">
                    <li className='list-group-item'>Programming with Mosh
                        <span className='float-end'>
                            <span className='me-5'>2 Hours 30 Minutes</span>
                            <Link to ="https://youtu.be/eIrMbAQSU34?si=BtoUHUyYLW6-gbrL"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                    <li className='list-group-item'>FreeCodeCamp 
                        <span className='float-end'>
                            <span className='me-5'>4 Hours </span>
                            <Link to ="https://youtu.be/A74TOX803D0?si=SxsU_uFR1FCQHqFA"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                    <li className='list-group-item'>SimpliLean 
                        <span className='float-end'>
                            <span className='me-5'>11 Hours</span>
                            <Link to ="https://www.youtube.com/live/CFD9EFcNZTQ?si=rzI38CSQyQiCtfJg"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                    <li className='list-group-item'>BroCode 
                        <span className='float-end'>
                            <span className='me-5'>12 Hours </span>
                            <Link to ="https://youtu.be/xk4_1vDrzzo?si=GVF3iZCMTqSswXvy"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                    <li className='list-group-item'>Telusko 
                        <span className='float-end'>
                            <span className='me-5'>12 Hours 30 minutes</span>
                            <Link to ="https://youtu.be/BGTx91t8q50?si=zdi2JEPxtfSPqh2E"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                </ul>
            </div>
            <h3 className="border-bottom pb-1 mt-4">Related Courses </h3> 
            <div className="row">
                <div className="col-12 col-md-3 col-sm-6">
                    <div className="card ">
                        <Link to='/detail/1'><img src="/assats/html.jpeg" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                        <Link to="/detail/1" className="btn btn-primary float-end">React</Link> 
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 col-sm-6">
                    <div className="card">
                    <Link to='/detail/1'><img src="/assats/css.jpeg" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                        <Link to="/detail/1" className="btn btn-primary float-end">React</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Java; 