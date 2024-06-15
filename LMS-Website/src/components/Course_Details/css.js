// import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import React,{useState} from 'react';
/* eslint-disable jsx-a11y/anchor-is-valid */

function Css(){
    // const {course_id}=useParams();
    const [courses, setCourses] = useState([]);
    const addToCart = (name, link) =>{
        setCourses([...courses,{name, link}]);
    };
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/assats/css.jpeg" className="img-thumbnail" alt="..." />
                </div>
                <div className="col-8">
                    <h3>CSS</h3>
                    <p className="fw-bold">CSS stands for Cascading Style Sheets</p>
                    <p className="fw-bold">CSS describes how HTML elements are to be displayed on screen, paper, or in other media</p>
                    <p className="fw-bold">CSS saves a lot of work. It can control the layout of multiple web pages all at once</p>
                    <p className="fw-bold">External stylesheets are stored in CSS files</p>
                </div>
            </div>
            {/* Course Videos */}
            <div className="card mt-4">
                <div className="card-header">
                    <h3>Course Videos</h3>
                </div>
                <ul className="list-group list-group-flush">
                    <li className='list-group-item'>Freecode camp
                        <span className='float-end'>
                            <span className='me-5'>11 Hours</span>
                            <Link to ="https://youtu.be/OXGznpKZ_sA?si=o5jYo7PQJji56hvO"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button onClick={()=>addToCart("Freecode camp","https://youtu.be/OXGznpKZ_sA?si=o5jYo7PQJji56hvO")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                    <li className='list-group-item'>SuperSimpleDev 
                        <span className='float-end'>
                            <span className='me-5'>6 Hours 30 Minutes</span>
                            <Link to ="https://youtu.be/G3e-cpL7ofc?si=DV63pjPHX8XB_kBh"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button onClick={() =>addToCart("SuperSimpleDev","https://youtu.be/G3e-cpL7ofc?si=DV63pjPHX8XB_kBh")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                    <li className='list-group-item'>SimpliLearn 
                        <span className='float-end'>
                            <span className='me-5'>3 Hours</span>
                            <Link to ="https://www.youtube.com/live/J5KxiOnIrKg?si=LRHIFA2a8HJ6H1yB"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button onClick={()=>addToCart("SimpliLearn","https://www.youtube.com/live/J5KxiOnIrKg?si=LRHIFA2a8HJ6H1yB")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
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

export default Css; 