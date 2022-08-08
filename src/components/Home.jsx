import React, { Component } from "react";
import { Col, Row, CardGroup, Card, CardHeader, CardBody, CardImg, CardImgOverlay, CardText } from 'reactstrap';
import "./Home.css";
import Testimonials from './Testimonials/Testimonials.jsx'
import mainPhoto from '../assets/img/mainPhoto.png';
import logo from '../assets/img/logo.png';
import hero from '../assets/img/hero-devices.svg';
import design from '../assets/img/design.png';
import dev from '../assets/img/web-dev-icon-980x846.png';
import backend from '../assets/img/backend.png';
import knight from '../assets/img/knight.png';
import home from '../assets/img/home.png';
import twitter from '../assets/img/twitter.png';
import github from '../assets/img/github.png'


class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container-fluid white-bg">
          <Row className="justify-content-center w100 white-bg">
            <Col md="12" lg="12">
              <img className="logo" src={logo} alt="G" />
            </Col>
            <Col md="12" lg="12" className='desc-holder white-bg'>
              <h1 className="desc">Full Stack Developer and pencil artist</h1>
              <p className="desc-text">Full stack developer with pencil artist as a pass time hobby</p>
              <img className="mainPhoto" src={mainPhoto} alt="" /><br />
            </Col>
          </Row>
        </div>
        <div className="hero-container container-fluid">
          <img className="hero" src={hero} alt="" />
        </div>
        <div className="container-fluid hello-section">
          <h1>Hi, I'm George. Nice to meet you.</h1>
          <div className="hello-desc">
            <p>
              Since begining my journey into the world of development in 2018, I have come
              accross many projects both tasking and fun and have undertaken them with the same
              commitement. I'm naturally talented with an eye for the pretty. However I also ensure not to leave
                out the functionality. I'm working tirelessly to improve and so far, I am. <br />
                When I'm not coding, I enjoy pencil drawing.
              </p>
          </div>
        </div>

        {/* The stack and tool session begins here */}
        <CardGroup className="stackGroup">
          <Card className="stack">
            <CardHeader>
              <img className="design" src={design} alt="" /><br />
              <h4 className="card-header">Web Design</h4>
            </CardHeader>
            <CardBody>
              <p className="w60">I value design thinking as well as delivering catchy UIs for to keep useers glued to your sight.
              I also understand the need to design responsively to suit the various device siezes available.
                </p>
              <h5>Design tools</h5>
              <p>
                Figma <br />
                  Canva <br />
                  Font Awesome
                </p>
            </CardBody>
          </Card>
          <Card className="stack">
            <CardHeader>
              <img className="dev" src={dev} alt="" /> <br />
              <h4 className="card-header">Frontend Development</h4>
            </CardHeader>
            <CardBody>
              <p className="w60">
                I very well love to code things from scratch, and enjoy bringing ideas to life in the browser. <br />
                I'm proficient with HTML, CSS, Git and JavaScript
              </p>
              <h5>Developer tools</h5>
              <p>
                VS Code <br />
                Bootstrap <br />
                React <br />
                Github
              </p>
            </CardBody>
          </Card>
          <Card className="stack">
            <CardHeader>
              <img className="backend" src={backend} alt="" /> <br />
              <h4 className="card-header">Backend Development</h4>
            </CardHeader>
            <CardBody>
              <p className="w60">
                I'm also interested in the server side of things - making sure everything is rendered to satisfaction oof both client and user.
              </p>
              <h5>Developer tools</h5>
              <p>
                Node <br />
                Express
              </p>
            </CardBody>
          </Card>
        </CardGroup>
        <div className="container-fluid text-center recent white-bg">
          <h1>My Recent Work</h1>
          <p>Here are a few design projects I've worked on. You want to see more? <a href="mailto:gimhandegbelo@gmail.com">Email me.</a></p>
          <div className="container portfolio">
            <Row>
              <Col sm="12" md="6" lg="6">
                <Card inverse className="portfolio-item">
                  <CardImg
                    alt=""
                    src={knight}
                    className="card-image"
                    style={{ height: 300 }}
                    width="100%"
                  />
                  <CardImgOverlay className="hidden-text">
                    <CardText tag="p" className="portfolio-text">
                      Knight is an eloquent design made for some ESport lovers. Perfect colour combination and really friendly to the eyes.
                    </CardText>
                    <CardText>
                      <a target="blank" href="https://www.canva.com/design/DAFHkZAiPAQ/8OflK4XV6KhFq1vMvBqGJg/view?utm_content=DAFHkZAiPAQ&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu">
                        <button className="small-btn margin-t50">Visit</button>
                      </a>
                    </CardText>
                  </CardImgOverlay>
                </Card>
              </Col>
              <Col sm="12" md="6" lg="6" className="">
                <Card inverse className="portfolio-item">
                  <CardImg
                    alt=""
                    src={home}
                    className="card-image"
                    style={{ height: 300 }}
                    width="100%"
                  >
                  </CardImg>
                  <CardImgOverlay >
                    <CardText tag='p' className="portfolio-text">
                      Home is a perfect place to carry out all transactions surrounding the home. Including buying and furnishing
                    </CardText>
                    <CardText>
                      <a href="https://canva.com/design" className="hidden-text">
                        <button className="small-btn">Visit</button>
                      </a>
                    </CardText>
                  </CardImgOverlay>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <Testimonials />

        {/* The contact section starts here */}
        <div className="contact">
          <div className="container contact-card text-center text-white p50">
            <Row>
              <Col sm="12" md="4" className=" dark">
                <h1 className=" auto-margin dark">Start a project</h1>
              </Col>
              <Col sm="12" md="4" className="dark">
                <p className=" dark">
                  Interested in working together? We should get talking. I assure you it will be productive.
                  </p>
              </Col>
              <Col sm="12" md="4" className="dark">
                <a href="https://fb.com" target="blank"><button className="small-btn">Get In Touch</button></a>
              </Col>
            </Row>
          </div>
        </div>
       
        <div className="container-fluid footer">
          <Row className="justify-content-center">
            <Col sm="12" md="12" lg="12" className="footer-container">
              <img className="footer-logo" src={logo} alt="G" />
            </Col>
            <Col className='icon-holder text-white'>
              <p>Growing and improving one day at a time</p>
              <div className="icons">
                <a href="https://twitter.com/GImhandegbelo" target="blank"><img src={twitter} className="twitter" alt=""/></a>
                <a href="https://github.com/Imhandegbelo" target="blank"><img src={github} className="github" alt=""/></a>
              </div>
            </Col>
          </Row>
          <div className="dark">
            All rights reserved <br/>George Imhandegbelo @ <script>document.write(new Date().getFullYear())</script>
          </div>
        </div>

      </div>
    )
  }
};

export default Home;