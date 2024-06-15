import {Link} from "react-router-dom";
import Sidebar from "./sidebar";
function FavouriteCourse(){
    return(
        /* eslint-disable jsx-a11y/anchor-is-valid */
        <div className="container mt-4">
            <div className="row">
                <aside>
                    <Sidebar/>
                </aside>
                <div className="container my-4">
        {/* Favourite Course */}
            <h3 className="border-bottom pb-1 mt-4">Favourite Courses  </h3> 
            <div className="row justify-content-center row-cols-auto">
                <div className="col-12 col-md-2 col-sm-4">
                <div className="card ">
                    <Link to='/about'><img src="logo512.png" className="card-img-top" alt="..." /></Link>
                    <div className="card-body">
                    <Link to="/detail/1" className="btn btn-primary float-end">React</Link>
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-2 col-sm-4">
                <div className="card">
                <a href='#'><img src="logo512.png" className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                    <Link to="/detail/1" className="btn btn-primary float-end">React</Link>
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-2 col-sm-4">
                <div className="card">
                <a href='#'><img src="logo512.png" className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                    <Link to="/detail/1" className="btn btn-primary float-end">React</Link>
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-2 col-sm-4">
                <div className="card">
                <a href='#'><img src="logo512.png" className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                    <Link to="/detail/1" className="btn btn-primary float-end">React</Link>
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-2 col-sm-4">
                <div className="card">
                <a href='#'><img src="logo512.png" className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                    <Link to="/detail/1" className="btn btn-primary float-end">React</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    );
}

export default FavouriteCourse;