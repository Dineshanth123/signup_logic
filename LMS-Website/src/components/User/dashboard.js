// import {Link} from "react-router-dom";
import Sidebar from "./sidebar";
import MyCourses from "./mycourses"; 
import {Routes,Route} from 'react-router-dom';
/* eslint-disable jsx-a11y/anchor-is-valid */ 
function Dashboard(){
    return(
        <div className="container">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
                <section className="col-md-9">
                <Routes>
                    <Route path="/user-mycourses" element={<MyCourses />}></Route>
                    
                </Routes>
                </section>
            </div>
        </div>
    );
}

export default Dashboard;