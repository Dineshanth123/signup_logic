// import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
// import React, {useState} from 'react';
/* eslint-disable jsx-a11y/anchor-is-valid */

function Javascript(){
    // const {course_id}=useParams();
    // const [courses, setCourses] = useState([]);
    // const addToCart = (name, link) =>{
    //     setCourses([...courses,{name, link}]);
    // };
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/assats/js.jpeg" className="img-thumbnail" alt="..." />
                </div>
                <div className="col-8">
                    <h3>JavaScripy</h3>
                    <p className="fw-bold">JavaScript is the world's most popular programming language.</p>
                    <p className="fw-bold">JavaScript is the programming language of the Web.</p>
                    <p className="fw-bold">JavaScript is easy to learn.</p>
                </div>
            </div>
            {/* Course Videos */}
            <div className="card mt-4">
                <div className="card-header">
                    <h3>Course Videos</h3>
                </div>
                <ul className="list-group list-group-flush">
                    <li className='list-group-item'>Free code camp
                        <span className='float-end'>
                            <span className='me-5'>3 Hours 30 Minutes</span>
                            <Link to ="https://youtu.be/PkZNo7MFNFg?si=gkk9bfG8AvIGcROg"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                    <li className='list-group-item'>Super simple Dev 
                        <span className='float-end'>
                            <span className='me-5'>12 Hours </span>
                            <Link to ="https://youtu.be/SBmSRK3feww?si=QKDnwTsu03GLv72q"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                    <li className='list-group-item'>Programming with Mosh
                        <span className='float-end'>
                            <span className='me-5'>1 Hour</span>
                            <Link to ="https://youtu.be/W6NZfCO5SIk?si=4dasd2mt5ny2YzkD"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                    <li className='list-group-item'>Traversy media
                        <span className='float-end'>
                            <span className='me-5'>12 Hours</span>
                            <Link to ="https://youtu.be/BI1o2H9z9fo?si=5YpfuSmzXzqr0vKj"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
                            <button className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
                        </span>
                    </li>
                    <li className='list-group-item'>Brocode 
                        <span className='float-end'>
                            <span className='me-5'>8 Hours</span>
                            <Link to ="https://youtu.be/8dWL3wF_OMw?si=A_vHz-6xWmsH88EH"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
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

export default Javascript; 