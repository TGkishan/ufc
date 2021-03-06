import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPagePro = () => {
  return (
    <MDBFooter color="unique-color-dark" className="page-footer font-small pt-0">
      <div style={{ backgroundColor: "#364948" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 white-text">
                Get connected with us on social networks!
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <a className="fb-ic ml-0">
                <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter white-text mr-lg-4"> </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram white-text mr-lg-4"> </i>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left" >
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4"  >
            <h6 className="text-uppercase font-weight-bold" >
              <strong>About</strong>
            </h6>
            <hr className="deep-white accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
            Gymnasium with Multi Gym facilities is available at campus for utilization by students and staff from 7:00 am to 7:00 pm. It has an area of about 275 sq. m. Another Fitness Centre is also in the physiotherapy institute building in the healthcare zone of the campus.
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4" >
            <h6 className="text-uppercase font-weight-bold">
              <strong>Developers</strong>
            </h6>
            <hr className="deep-white accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!">19CE064</a>
            </p>
            <p>
              <a href="#!">19CE117</a>
            </p>
            <p>
              <a href="#!">19CE123</a>
            </p>
            <p>
              <a href="#!">19CE125</a>
            </p>
            <p>
              <a href="#!">19CE130</a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Quick links</strong>
            </h6>
            <hr className="deep-white accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!">ABOUT</a>
            </p>
            <p>
              <a href="#!">FEE</a>
            </p>
            <p>
              <a href="#!">CLASSES</a>
            </p>
            <p>
              <a href="#!">SCHEDULES</a>
            </p>
            <p>
              <a href="#!">CONTACT</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr className="deep-white accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px"}} />
            <p>
              <i className="fa fa-home mr-3" /> CHARUSAT UNIVERSITY,GUJRAT
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@example.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 99567815422
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 9875614233
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a> UFC </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;