// import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import React,{useState} from 'react';
/* eslint-disable jsx-a11y/anchor-is-valid */

function R(){
    // const {course_id}=useParams();
    const [courses, setCourses] = useState([]);
    const addToCart = (name, link) =>{
        setCourses([...courses,{name, link}]);
    };

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/assats/r.jpeg" className="img-thumbnail" alt="..." />
                </div>
                <div className="col-8">
                    <h3>R</h3>
                    <p className="fw-bold">R is often used for statistical computing and graphical presentation to analyze and visualize data.</p>
                    <p className="fw-bold">It is a great resource for data analysis, data visualization, data science and machine learning</p>
                    <p className="fw-bold">It is easy to draw graphs in R, like pie charts, histograms, box plot, scatter plot, etc++</p>
                    </div>
            </div>
            {/* Course Videos */}
            <div className="card mt-4">
                <div className="card-header">
                    <h3>Course Videos</h3>
                </div>
                <ul className="list-group list-group-flush">
                    <li className='list-group-item'>PSimpliLearn 
                        <span className='float-end'>
                            <span className='me-5'>10 Hours 10 Minutes</span>
                            <Link href="https://www.youtube.com/live/Q5g6lYUn6Q4?si=KcC9DhpjXA1cm_6m"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button onClick={() => addToCart("PSimpliLearn","https://www.youtube.com/live/Q5g6lYUn6Q4?si=KcC9DhpjXA1cm_6m")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                    <li className='list-group-item'>FreeCodeCamp
                        <span className='float-end'>
                            <span className='me-5'>2 Hours </span>
                            <Link to ="https://youtu.be/_V8eKsto3Ug?si=kHdzR5JbOZ2-BUb-"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button onClick={() => addToCart("FreeCodeCamp","https://youtu.be/_V8eKsto3Ug?si=kHdzR5JbOZ2-BUb-")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                    <li className='list-group-item'>R Programming 
                        <span className='float-end'>
                            <span className='me-5'>1 Hour</span>
                            <Link to="https://youtu.be/eR-XRSKsuR4?si=t7gQsxXBGwfcP8tU"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button onClick={() => addToCart("R Programming","https://youtu.be/eR-XRSKsuR4?si=t7gQsxXBGwfcP8tU")}  className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
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

export default R; 