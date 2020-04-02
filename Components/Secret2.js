import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom';
import { Button } from "shards-react";
import { Container, Row, Col, Card, CardBody, CardImg } from "shards-react";

import vid from '../assets/snap.mp4'

export default class Secret2 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             classButton: 'notShowButton',
             redirect: false
        }
    }
    

    handleShowButton = () => {
        this.setState({classButton:"showButton"})
    }

    componentDidMount = () => {
        let token = sessionStorage.getItem('token')
        if(!token){
            this.setState({redirect: true})
        }
    }

    componentWillUnmount = () =>{
        sessionStorage.removeItem('token')
    }

    render() {
        return (
            <div >
                {this.state.redirect ? <Redirect to="/secret/enter"/> : null}

                    <div className="vidDiv">
                    <video className="vidClass" autoPlay={true} muted={true} loop={true} >
                        <source src={vid} type="video/mp4"></source>
                    </video>
                    </div>
                    <div className="contSecret">
                        <p>Ya tu sabes que quisiera meter en esa boquita rica... y tambien en ese pecho. Sabes que amo lo rica que eres</p>
                    </div>
                <div className='showButton3'>
                <Link to='/8'>
                            <Button  className="buttonGeneral" theme="secondary">Anterior</Button>
                        </Link>
                    <Link to='/9'>
                        <Button  className="buttonGeneral" theme="secondary">Siguiente</Button>
                    </Link>
                </div>
                        
            </div>
        )
    }
}
