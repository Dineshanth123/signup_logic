// import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useState} from 'react';
/* eslint-disable jsx-a11y/anchor-is-valid */

function C(){
    // const {course_id}=useParams();
    const [courses, setCourses] = useState([]);
    const addToCart = (name, link) =>{
        setCourses([...courses,{name,link}]);
    };
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/assats/c.jpeg" className="img-thumbnail" alt="..." />
                </div>
                <div className="col-8">
                    <h3>C</h3>
                    <p className="fw-bold">C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972.</p>
                    <p className="fw-bold">It is a very popular language, despite being old. The main reason for its popularity is because it is a fundamental language in the field of computer science.</p>
                    <p className="fw-bold">C is strongly associated with UNIX, as it was developed to write the UNIX operating system.</p>
                </div>
            </div>
            {/* Course Videos */}
            <div className="card mt-4">
                <div className="card-header">
                    <h3>Course Videos</h3>
                </div>
                <ul className="list-group list-group-flush">
                    <li className='list-group-item'>Programming with Harry
                        <span className='float-end'>
                            <span className='me-5'>11 Hours</span>
                            <Link to="https://youtu.be/_MF8L7ZxwRE?si=gHt6RZRgN_vCSz_g"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button onClick={() => addToCart("Programming with Harry","https://youtu.be/_MF8L7ZxwRE?si=gHt6RZRgN_vCSz_g")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                    <li className='list-group-item'>CodeIO
                        <span className='float-end'>
                            <span className='me-5'>6 Hours 30 Minutes</span>
                            <Link to="https://youtu.be/fmSnLiAv-zc?si=ZySSVaYfOQmey5eP"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button onClick={()=>addToCart("CodeIO","https://youtu.be/fmSnLiAv-zc?si=ZySSVaYfOQmey5eP")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                    <li className='list-group-item'>BROCODE
                        <span className='float-end'>
                            <span className='me-5'>4 Hour 5 Minutes</span>
                            <Link to ="https://youtu.be/87SH2Cn0s9A?si=71qleO6tq2VEsjfR"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button onClick={()=>addToCart("BROCODE","https://youtu.be/87SH2Cn0s9A?si=71qleO6tq2VEsjfR")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                    <li className='list-group-item'>Freecodecamp
                        <span className='float-end'>
                            <span className='me-5'>3 Hours 45 Minutes</span>
                            <Link to ="https://youtu.be/KJgsSFOSQv0?si=aB4w4wr8750PXbag"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button onClick={()=>addToCart("Freecodecamp","https://youtu.be/KJgsSFOSQv0?si=aB4w4wr8750PXbag")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                    <li className='list-group-item'>Programmiz
                        <span className='float-end'>
                            <span className='me-5'>4 Hours 45 Minutes</span>
                            <Link to ="https://youtu.be/0Sg6QHmlFJE?si=lUt5lH_rj5LAlpwH"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button onClick={()=>addToCart("Programmiz","https://youtu.be/0Sg6QHmlFJE?si=lUt5lH_rj5LAlpwH")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
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

export default C; 