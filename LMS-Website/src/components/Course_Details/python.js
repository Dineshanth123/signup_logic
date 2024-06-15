// import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import React,{useState} from "react";
/* eslint-disable jsx-a11y/anchor-is-valid */

function Python(){
    // const {course_id}=useParams();
    const [courses, setCourses] = useState([]);
    const addToCart = (name, link) =>{
        setCourses([...courses,{name, link}]);
    };

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/assats/Python.jpeg" className="img-thumbnail" alt="..." />
                </div>
                <div className="col-8">
                    <h3>Python</h3>
                    <p className="fw-bold">Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.</p>
                    <p className="fw-bold">It is used for:</p>
                    <p className="fw-bold">   i) web development (server-side)</p>
                    <p className="fw-bold">    ii)software development,</p>
                    <p className="fw-bold">    iii)mathematics,</p>
                    <p className="fw-bold">    iv)system scripting.</p>
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
                            <span className='me-5'>6 Hours 15 Minutes</span>
                            <Link to="https://youtu.be/_uQrJ0TkZlc?si=0et5yNSJtDp7wE94"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button onClick={() => addToCart("Programming with Mosh","https://youtu.be/_uQrJ0TkZlc?si=0et5yNSJtDp7wE94")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                    <li className='list-group-item'>Brocode
                        <span className='float-end'>
                            <span className='me-5'>12 Hours </span>
                            <Link to="https://youtu.be/XKHEtdqhLK8?si=pWHeDxXuu9Fc8nQD"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button onClick={() => addToCart("Brocode","https://youtu.be/XKHEtdqhLK8?si=pWHeDxXuu9Fc8nQD")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                    <li className='list-group-item'>CodeIO
                        <span className='float-end'>
                            <span className='me-5'>2 Hours</span>
                            <Link to="https://youtu.be/xErUnOKQbFw?si=YijdGEzYYlmjyX6o"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button onClick={() => addToCart("CodeIO","https://youtu.be/xErUnOKQbFw?si=YijdGEzYYlmjyX6o")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                    <li className='list-group-item'>Freecodecamp
                        <span className='float-end'>
                            <span className='me-5'>4 Hours 30 Minutes</span>
                            <Link to="https://youtu.be/rfscVS0vtbw?si=EzdZKJ4O7j5pICxn"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button onClick={() => addToCart("Freecodecamp","https://youtu.be/rfscVS0vtbw?si=EzdZKJ4O7j5pICxn")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                    <li className='list-group-item'>Simplilearn
                        <span className='float-end'>
                            <span className='me-5'>12 Hours</span>
                            <Link to="https://youtu.be/ITSMDeOgXxw?si=IXemhfJENQB_e_9w"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button onClick={() => addToCart("Simplilearn","https://youtu.be/ITSMDeOgXxw?si=IXemhfJENQB_e_9w")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                </ul>
            </div>
            <h3 className="border-bottom pb-1 mt-4">Related Courses </h3> 
            <div className="row">
                <div className="col-12 col-md-3 col-sm-6">
                    <div className="card ">
                        <Link to='./html'><img src="/assats/html.jpeg" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                        <Link to="./html" className="btn btn-primary float-end">HTML</Link> 
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 col-sm-6">
                    <div className="card">
                    <Link to='./css'><img src="/assats/css.jpeg" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                        <Link to="./css" className="btn btn-primary float-end">React</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Python; 