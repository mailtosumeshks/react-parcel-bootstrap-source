import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { Container, Row, Col, Carousel, Media} from 'react-bootstrap'
import Popup from "reactjs-popup";
import Booking from "./components/Booking";
import SimpleGoogleMap from "./components/SimpleGoogleMap";

var persons = [
  require(`./assets/img/person_1.jpeg`),
  require(`./assets/img/person_2.jpeg`),
  require(`./assets/img/person_3.jpeg`),
  require(`./assets/img/person_4.jpeg`),
  require(`./assets/img/person_5.jpeg`),
  require(`./assets/img/person_6.jpeg`),
  require(`./assets/img/person_7.jpeg`),
  require(`./assets/img/person_8.jpeg`),
  require(`./assets/img/person_9.jpeg`),
  require(`./assets/img/person_10.jpeg`),
];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      triggerBooking: false,
      activeTopNav: 0
    };
  }

  closeBooking() {
    console.log('Closed Popup');
    this.setState({triggerBooking: false});
  }

  render() {
    return  <div>
    <Container fluid>
      <Row noGutters id="topNav">
        <Col>
          <img 
            src={require('./assets/img/logo.jpg')}
            alt="Logo"
          />
        </Col>
        {
          [{
            name: 'Home',
            id: 0
          },
          {
            name: 'About',
            id: 1
          },
          {
            name: 'Gallery',
            id: 2
          },
          {
            name: 'Specialty',
            id: 3
          },
          {
            name: 'Reviews',
            id: 4
          },
          {
            name: 'Contact',
            id: 5
          }].map(navItem => (
            <Col 
              className={`entry ${this.state.activeTopNav === navItem.id? 'activeTopNav': ''}`}
              onClick={() => this.setState({activeTopNav: navItem.id})}
            >
              {navItem.name}
            </Col>
          ))
        }
        <Col md={3} className="entry bookingBtn" onClick={() => this.setState({triggerBooking: true})}>Book Online</Col>
      </Row>
    </Container>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./assets/img/banner01.jpeg')}
          alt="First slide"
        />
        <Carousel.Caption className="carouselCaption">
          <span className="enlargedName">Dr. Minerva Abbott</span>
          <h5>General and Cosmetic Dentistry</h5>
          <h5>San Jose, CA</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./assets/img/banner01.jpeg')}
          alt="Second slide"
        />
        <Carousel.Caption className="carouselCaption">
          <span className="enlargedName">Dr. Todd Montgomery</span>
          <h5>Physician</h5>
          <h5>San Jose, CA</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./assets/img/banner01.jpeg')}
          alt="Third slide"
        />
        <Carousel.Caption className="carouselCaption">
          <span className="enlargedName">Dr. Gene Hodges</span>
          <h5>Physician</h5>
          <h5>San Jose, CA</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Container fluid>
      <Row noGutters id="docSection">
        {
          [{
            name: 'Dr. Maud McDonald',
            spec: "General Physician",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor sapien in ipsum consequat mollis. Fusce sagittis, elit sed sollicitudin ..",
            eduDesc: 'University of Michigan <br /> School of Medical',
            img: require("./assets/img/maud.JPG")
          },
          {
            name: 'Dr. Matilda Figueroa',
            spec: "General Physician",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor sapien in ipsum consequat mollis. Fusce sagittis, elit sed sollicitudin ..",
            eduDesc: 'University of Michigan <br /> School of Medical',
            img: require("./assets/img/matilda.JPG")
          }
        ].map(doctorDetail => (
          <Col>
            <Media>
              <img
                className="align-self-start mr-3"
                src={doctorDetail.img}
                alt="Generic placeholder"
              />
              <Media.Body id="doctorDesc">
                <div className="name">{doctorDetail.name}</div>
                <div className="spec">{doctorDetail.spec}</div>
                <div className="desc">{doctorDetail.desc}</div>
                <div className="edu">Education</div>
                <div className="eduDesc">{doctorDetail.eduDesc}</div>
              </Media.Body>
            </Media>
            <div className="docMoreDetails">
              <div className="detailsRow">
                <img
                  src={require('./assets/img/star.JPG')}
                  alt="Membership"
                />
                <div className="detailsDesc">
                  <span className="lang">Membership</span>
                  <div  className="langDetails">Lorem ipsum dolor sit amet
                  Consectetur adipiscing elit
                  Maecenas tempor sapien</div>
                </div>
              </div>
              <div className="detailsRow">
                <img
                  src={require('./assets/img/chat.JPG')}
                  alt="Membership"
                />
                <div className="detailsDesc">
                  <span className="lang">Languages</span>
                  <div className="langDetails">English<br />French</div>
                </div>
              </div>
            </div>
          </Col>
        ))
        }
      </Row>
    </Container>
    <div className="servicesWrapper">
      <div className="servicesTitle">Our Services</div>
      {
        [
          [0,1,2,3,4],
          [5,6,7,8,9]
        ].map(itemsArray => (
          <div className="serviceOptionsBox">
            {
              itemsArray.map(item => (
                <div className="serviceImageContainer">
                  <div className="serviceImageText">
                    <div style={{color: 'white', fontWeight: '600', fontSize: '14px' }}>Lorem Ipsum</div>
                    <div style={{color: 'darkgrey', fontSize: '13px' }}>dolor sit amet</div>
                  </div>
                  <img className="serviceImage" src={persons[item]} alt="Image 1"/>
                </div>))
              }
          </div>
        ))
      }
    </div>
    <div className="insuranceWrapper">
      <div className="insuranceContent">
        <div>
          <div className="insuranceTitle">Insurance</div>
          <div className="insuranceDesc">
            We accept all kinds of PPO and indemnity insurance. A preferred provider organization, typically referred to as a PPO, offers you easy access to a network of providers who provide services at a discounted rate. It enables patients to seek out-of-network services.
          </div>
        </div>
        <div style={{display: 'flex'}}>
          <div>
            <ul className="insuranceList">
              {
                [
                  'AETNA',
                  'Assurant/DHA',
                  'Blue Shield of CA',
                  'Delta Dental',
                  'Guardian',
                  'Metlife',
                  'Premier Access',
                  'Principal Standard',
                  'United Healthcare'
                ].map(item => (<li>{item}</li>))
              }
            </ul>
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <ul className="insuranceList">
            {
              [
                'Blue Shield of CA',
                'Assurant/DHA',
                'Delta Dental',
                'Guardian',
                'Metlife',
                'Principal Standard'
              ].map(item => (<li>{item}</li>))
            }
            </ul>
            <div className="insuranceViewAll">12 More</div>
          </div>
        </div>
      </div>
    </div>
    <div className="blogWrapper">
      <div className="d-flex blogHeader">
        <div className="blogTitleText">Blog Update</div>
        <div className="blogViewAll">View All</div>
      </div>
      <div className="d-flex">
        <div className="d-flex" style={{margin: '0 auto'}}>
          <div className="blogTile">
            <img
              src={require('./assets/img/blog_1.JPG')}
              alt="Blog 1"
            />
            <div className="blogTitle">Blog title goes here</div>
            <div className="blogDesc">Prevention is truly your best investment. Dental Cleanings, Exams, Sealants, Fluoride Varnish and Nightguards maintain a healthy and..</div>
            <div className="blogAuthor">JUSTIN VAUGHN  /  23 SEP</div>
          </div>
          <div className="blogTile">
            <img
              src={require('./assets/img/blog_2.JPG')}
              alt="Blog 1"
            />
            <div className="blogTitle">Blog title goes here</div>
            <div className="blogDesc">Prevention is truly your best investment. Dental Cleanings, Exams, Sealants, Fluoride Varnish and Nightguards maintain a healthy and..</div>
            <div className="blogAuthor">JUSTIN VAUGHN  /  23 SEP</div>
          </div>
          <div className="blogTile">
            <img
              src={require('./assets/img/blog_3.JPG')}
              alt="Blog 1"
            />
            <div className="blogTitle">Blog title goes here</div>
            <div className="blogDesc">Prevention is truly your best investment. Dental Cleanings, Exams, Sealants, Fluoride Varnish and Nightguards maintain a healthy and..</div>
            <div className="blogAuthor">JUSTIN VAUGHN  /  23 SEP</div>
          </div>
        </div>
      </div>
    </div>
    
    
    <Popup
      open={this.state.triggerBooking}
      modal
      closeOnDocumentClick={false}
      closeOnEscape={false}
      lockScroll
      onClose={this.closeBooking.bind(this)}
      overlayStyle={{backgroundColor: 'rgb(22,35,42)', margin: '0 auto'}}
    >
      <a className="close" onClick={this.closeBooking.bind(this)}>
        &times;
      </a>
      <Booking 
        onRequestAppointment={this.closeBooking.bind(this)}
      />
    </Popup>
  </div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);