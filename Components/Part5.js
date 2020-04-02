import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';
import {Link} from 'react-router-dom';
import { Button } from "shards-react";
import { Container, Row, Col, Card, CardBody, CardImg } from "shards-react";
import './style.css'

const content1 = 'Durante el trabajo he usado estas tarjetas... '
const content2 = `Desde que las vi pense en que me gustaria hacerte algo con ellas...
                    y que mejor que decirte cosas que me gustan de ti 😍`

export default class Part5 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             classCard: "notShowCard",
             classButton: "notShowButton"
        }
    }
    
    handleShowCard = () => {
        this.setState({classCard:"showCard"})
    }
    
    handleShowButton = () => {
        this.setState({classButton:"showButton"})
    }

    render() {
        return (
            <Container>
            <Row>
                <Col>
                    <div className="contsm textContentsm">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString(content1)
                                .pauseFor(500)
                                .callFunction(() =>{
                                    this.handleShowCard()
                                })
                                .pauseFor(1000)
                                .typeString(content2)
                                .callFunction(() => {
                                    this.handleShowButton()
                                })
                                .start();
                            }}
                        />
                        <div className={this.state.classButton}>
                            <Link to='/4'>
                                <Button className="buttonGeneral" theme="secondary">Anterior</Button>
                            </Link>
                            <Link to='/6'>
                                <Button className="buttonGeneral" theme="secondary">Siguiente</Button>
                            </Link>
                        </div>
                        
                    </div>
                </Col>
                <Col>
                    <div className={this.state.classCard}>
                    <Card className="cardClass">
                        <CardImg top src={require('../assets/test3.jpg')} />
                        <CardBody>
                        <p>I love this photo.</p>
                        </CardBody>
                    </Card>
                    </div>
                </Col>
            </Row>
        </Container>
        )
    }
}
