
import {Link} from 'react-router-dom';
function Home() {
    return (
      /* eslint-disable jsx-a11y/anchor-is-valid */
      <div className="container my-4">
        {/* Latest Course */}
        <h3 className="border-bottom pb-1 mt-4">Latest Courses </h3> 
        <div className="row justify-content-center row-cols-auto">
          <div className="col-12 col-md-2 col-sm-4">
            <div className="card ">
              <div className="image"><Link to='./python'><img src="/assats/python.jpeg" className="card-img-top" alt="..." /></Link></div>
              
              <div className="card-body">
                {/* <h5 className="card-title"><Link to="/detail/1">React</Link></h5> */}
                <Link to="./python" className="btn btn-primary float-end">Python</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 col-sm-4">
            <div className="card">
              <div className="image"><Link to='./c'><img src="/assats/C.jpeg" className="card-img-top" alt="..." /></Link></div>
              
              <div className="card-body">
              <Link to="./c" className="btn btn-primary float-end">C</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 col-sm-4">
            <div className="card">
            <div className="image"><Link to='./mysql'><img src="/assats/mysql.jpeg" className="card-img-top" alt="..." /></Link></div>
              <div className="card-body">
              <Link to="./mysql" className="btn btn-primary float-end">MySQL</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 col-sm-4">
            <div className="card">
            <div className="image"><Link to='./html'><img src="/assats/html.jpeg" className="card-img-top" alt="..." /></Link></div>
              <div className="card-body">
              <Link to="./html" className="btn btn-primary float-end">HTML </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 col-sm-4">
            <div className="card">
            <div className="image"><Link to='./css'><img src="/assats/css.jpeg" className="card-img-top" alt="..." /></Link></div>
              <div className="card-body">
              <Link to="./css" className="btn btn-primary float-end">CSS </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End Latest Course */}
        {/* Random Course */}
        <h3 className="border-bottom pb-1 my-4 mt-3">Offered Courses </h3>
        <div className="row justify-content-center row-cols-auto">
          <div className="col-12 col-md-2 col-sm-4">
            <div className="card">
            <div className="image"><Link to='./mongodb'><img src="/assats/mongodb.jpeg" className="card-img-top" alt="..." /></Link></div>
              <div className="card-body">
              <Link to="./mongodb" className="btn btn-primary float-end">Mongodb </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 col-sm-4">
            <div className="card">
            <div className="image"><Link to='./javascript'><img src="/assats/js.jpeg" className="card-img-top" alt="..." /></Link></div>
              <div className="card-body">
              <Link to="./javascript" className="btn btn-primary float-end">Javascript </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 col-sm-4">
            <div className="card">
            <div className="image"><Link to='./r'><img src="/assats/r.jpeg" className="card-img-top" alt="..." /></Link></div>
              <div className="card-body">
              <Link to="./r" className="btn btn-primary float-end">R </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 col-sm-4">
            <div className="card">
            <div className="image"><Link to='./java'><img src="/assats/java.jpeg" className="card-img-top" alt="..." /></Link></div> 
              <div className="card-body">
              <Link to="./java" className="btn btn-primary float-end">JAVA </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 col-sm-4">
            <div className="card">
            <div className="image"><Link to='./php'><img src="/assats/php.jpeg" className="card-img-top" alt="..." /></Link></div>
              <div className="card-body">
              <Link to="./php" className="btn btn-primary float-end">PHP </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End Random Course */}
        {/* featured Teachers */}
        {/* <h3 className="border-bottom pb-1 my-4 mt-3">Featured Teachers  </h3>
        <div className="row justify-content-center row-cols-auto">
          <div className="col-12 col-md-2 col-sm-4">
            <div className="card">
              <Link to='/detail/11'><img src="logo512.png" className="card-img-top" alt="..." /></Link>
              <div className="card-body">
              <Link to="/detail/11" className="btn btn-primary float-end">React</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 col-sm-4">
            <div className="card">
              <Link to='/detail/12'><img src="logo512.png" className="card-img-top" alt="..." /></Link>
              <div className="card-body">
              <Link to="/detail/12" className="btn btn-primary float-end">React</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 col-sm-4">
            <div className="card">
              <Link to='/detail/13'><img src="logo512.png" className="card-img-top" alt="..." /></Link>
              <div className="card-body">
              <Link to="/detail/13" className="btn btn-primary float-end">React</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 col-sm-4">
            <div className="card">
              <Link to='/detail/14'><img src="logo512.png" className="card-img-top" alt="..." /></Link>
              <div className="card-body">
              <Link to="/detail/14" className="btn btn-primary float-end">React</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 col-sm-4">
            <div className="card">
              <Link to='/detail/1'><img src="logo512.png" className="card-img-top" alt="..." /></Link>
              <div className="card-body">
              <Link to="/detail/15" className="btn btn-primary float-end">React</Link>
              </div>
            </div>
          </div>
        </div> */}
        {/* End Featured Teachers */}
        {/* <a className="float-end" href="#">See All</a>  */}
        {/* Student Testimonial */}
        <h3 className="border-bottom pb-1 my-4 mt-3">About </h3>
        <div id="carouselExampleControls" className="carousel slide bg-dark text-white py-4" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>KGIT Services  is a leading global information technology, consulting, and business process services company.</p>
                </blockquote> 
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>We connect the power of intelligent computing, robotics, cloud, analytics, quantum computing and emerging technologies to help our clients adapt to the digital world and make them successful.</p>
                </blockquote>
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A company recognized globally for its wide range of services, a strong assurance of sustainability, and good corporate citizenship, we have 30+ dedicated employees serving clients. Together, we discover ideas and connect the dots to build a better and bold new future.</p>
                </blockquote>
              </figure>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* Student Testimonial */}

      </div>
    );
  }
  export default Home;