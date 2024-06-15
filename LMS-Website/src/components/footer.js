function Footer() {
    return (
    /* eslint-disable jsx-a11y/anchor-is-valid */
    <footer className="footer bg-dark text-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>Navigating education seamlessly. Explore our LMS platform for an enriched learning experience.</p>
          </div>
          <div className="col-md-4">
            <h5>Social Media</h5>
            <ul className="list-inline">
            <li>Website - <a href="https://kgitservices.com/about-us/">KG IT Services</a></li>
            <li >linkedIn - <a href="#">kgit_it_services</a></li>  
            <li>Phone.no - <a href="#">+91 8123096140</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <address>
            TOWER-2,G-02,SLV BRUNDAVAN,
            HEELALIGE, 
            CHANDAPURA, 
            BENGALURU 560099 <br/>
            Phone.no - +91 8123096140
            </address>
          </div>
        </div>
      </div>
    </footer>
    );
  }
  
  export default Footer;