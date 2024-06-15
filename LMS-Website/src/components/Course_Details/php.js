// import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
// import React, {useState} from 'react';
/* eslint-disable jsx-a11y/anchor-is-valid */

function Php(){
    // const {course_id}=useParams();
    // const [courses, setCourses] = useState([]);
    // const addToCart = (name, link) =>{
    //     setCourses([...courses,{name, link}]);
    // };
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/assats/php.jpeg" className="img-thumbnail" alt="..." />
                </div>
                <div className="col-8">
                    <h3>php</h3>
                    <p className="fw-bold">PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.</p>
                    <p className="fw-bold">PHP is a widely-used, free, and efficient alternative to competitors such as Microsoft's ASP.</p>
                    </div>
            </div>
            {/* Course Videos */}
            <div className="card mt-4">
                <div className="card-header">
                    <h3>Course Videos</h3>
                </div>
                <ul className="list-group list-group-flush">
                    <li className='list-group-item'>Simplilearn 
                        <span className='float-end'>
                            <span className='me-5'>6 Hours 30 Minutes</span>
                            <Link to ="https://www.youtube.com/live/6EukZDFE_Zg?si=B1EElNd5_pT2tqsp"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                    <li className='list-group-item'>Freecodecamp 
                        <span className='float-end'>
                            <span className='me-5'> 4 Hours 30 minutes  </span>
                            <Link to ="https://youtu.be/OK_JCtrrv-c?si=fmTuA3NZzZ7t2CIo"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                    <li className='list-group-item'>BroCode 
                        <span className='float-end'>
                            <span className='me-5'>4 Hours</span>
                            <Link to ="https://youtu.be/zZ6vybT1HQs?si=Yy4QEv8niRc1ZBvA"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                    <li className='list-group-item'>Edureka
                        <span className='float-end'>
                            <span className='me-5'>4 Hours 30 Minutes</span>
                            <Link to ="https://youtu.be/hx38tnlYGlA?si=2wlgY-bbLcdkZUFE"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
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

export default Php; 