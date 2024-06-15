import {Link} from "react-router-dom";

function Sidebar(){
    return(
        <div className="card">
        <h5 className="card-header">Dashboard</h5> 
            <div className="list-group-flush">
                <Link to="/user-mycourses" className="list-group-item list-group-item-action">My Courses</Link>
                <Link to="/user-favourite_course" className="list-group-item list-group-item-action">Favorite Courses</Link>
                <Link to="/profile-setting" className="list-group-item list-group-item-action">Profile Setting</Link>
                <Link to="/change-password" className="list-group-item list-group-item-action">Change Password</Link>
                <Link to="/logout" className="list-group-item list-group-item-action text-danger">Logout</Link>
            </div>
    </div>
    );
}
    

export default Sidebar;