import React from 'react';
import "./styles.css";
import SimpleGoogleMap from '../SimpleGoogleMap';

const Recaptcha = require('react-recaptcha');

const BookingViews = {
    selectLocation: 0,
    selectDoctor: 1,
    scheduleAppointment: 2,
    summary: 3
};

const angel = require('../../assets/img/angel.JPG');
const rachel = require('../../assets/img/rachel.JPG');
const gene = require('../../assets/img/gene.JPG');

class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: BookingViews.selectLocation,
        };
    }

    render() {
        const { currentView } = this.state;
        let view;
        switch (currentView) {
            case BookingViews.selectLocation:
                view = (
                    <div className="selectLocationContainer">
                        {
                            [1,2,3].map(() => (
                                <div className="doctorWrapper">
                                    <SimpleGoogleMap
                                        center={[36.334463, -119.663197]}
                                        zoom={17}
                                    />
                                    <div className="locationSelectBox">
                                        <div className="descBox">
                                            <div className="address">02 Karine Throughway<br/>Apt. 647</div>
                                            <div className="number">+1 234 567 890</div>
                                        </div>
                                        <div
                                            className="selectDoctor"
                                            onClick={() => this.setState({currentView: BookingViews.selectDoctor})}
                                        >
                                            Select Doctor >
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                );
                break;
            case BookingViews.selectDoctor:
                view = (
                    <div className="selectDoctorContainer">
                        <div className="previous" onClick={() => this.setState({currentView: BookingViews.selectLocation})}>{`<`}</div>
                        <div className="doctorWrapper" style={{backgroundImage: `url(${angel})`}}>
                            <div className="selectBox">
                                <div className="descBox">
                                    <div className="name">Angel Ortiz</div>
                                    <div className="spec">Dentist</div>
                                </div>
                                <div className="selectDoctor" onClick={() => this.setState({currentView: BookingViews.scheduleAppointment})}>Select Doctor ></div>
                            </div>
                        </div>
                        <div className="doctorWrapper" style={{backgroundImage: `url(${rachel})`}}>
                            <div className="selectBox">
                                <div className="descBox">
                                    <div className="name">Angel Ortiz</div>
                                    <div className="spec">Dentist</div>
                                </div>
                                <div className="selectDoctor" onClick={() => this.setState({currentView: BookingViews.scheduleAppointment})}>Select Doctor ></div>
                            </div>
                        </div>
                        <div className="doctorWrapper" style={{backgroundImage: `url(${gene})`}}>
                            <div className="selectBox">
                                <div className="descBox">
                                    <div className="name">Angel Ortiz</div>
                                    <div className="spec">Dentist</div>
                                </div>
                                <div className="selectDoctor" onClick={() => this.setState({currentView: BookingViews.scheduleAppointment})}>Select Doctor ></div>
                            </div>
                        </div>
                    </div>
                );
                break;
            case BookingViews.scheduleAppointment: 
                view = (
                    <div className="selectAppointmentContainer">
                        <div className="previous" onClick={() => this.setState({currentView: BookingViews.selectDoctor})}>{`<`}</div>
                        <div className="formWrapper">
                            <div className="doctorDetails"></div>
                            <div className="formDetails">
                                <div className="title">Book an Appointment</div>
                                <div className="d-flex">
                                    <input type="text" placeholder="First Name"/>
                                    <input style={{marginLeft: '20px'}} type="text" placeholder="Last Name"/>
                                </div>
                                <div className="d-flex" style={{margin: '20px 0'}}>
                                    <input type="email" placeholder="Email"/>
                                    <input style={{marginLeft: '20px'}} type="number" placeholder="Phone"/>
                                </div>
                                <Recaptcha
                                    sitekey="6LfHya0UAAAAALXHwSC9QfRq-LYl3eDOSj3tT9s1"
                                    size='normal'
                                />
                                <div
                                    className="requestAppointment"
                                    onClick={() => this.props.onRequestAppointment()}
                                >
                                    Request an Appointment
                                </div>
                            </div>
                        </div>
                    </div>
                );
                break;
            case BookingViews.summary: break;
        }
        return (
            <div>
                {view}
            </div>
        );
    }
}

export default Booking;