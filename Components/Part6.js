import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Button } from "shards-react";
import { Container, Row, Col, Card, CardBody, CardImg } from "shards-react";

export default class Part6 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             classButton: 'notShowButton',
             classCard: 'notShowCard'
        }
    }
    

    handleShowButton = () => {
        this.setState({classButton:"showButton"})
    }

    handleShowCard = () => {
        this.setState({classCard:'showCard2'})
    }


    render() {

        setTimeout(()=>{
            this.handleShowCard()
        },500)

        return (
            <div>
                <Container>
                    <Row>
                        <h1>Parte 1</h1>
                    <div className="totheleft">    
                    <Link to='/5'>
                        <Button className="buttonGeneral" theme="secondary">Anterior</Button>
                    </Link>
                    <Link to='/7'>
                        <Button className="buttonGeneral" theme="secondary">Siguiente</Button>
                    </Link>
                    </div>
                    </Row>
                    <Row>
                        <Col>
                        <Card className={this.state.classCard} >
                            <CardImg top src={require('../assets/dreams2.jpg')} />
                            <CardBody className="cardPadding">
                            <p>Tienes muchos <b>sueños</b> que quieres cumplir y quiero ayudarte a lograrlos</p>
                            </CardBody>
                        </Card>
                        </Col>

                        <Col>
                        <Card className={this.state.classCard}>
                            <CardImg top src={require('../assets/persev.jpg')} />
                            <CardBody className="cardPadding">
                            <p>Has mostrado que aunque tengas momentos dificiles <b>no te dejas caer</b></p>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col>
                        <Card className={this.state.classCard} >
                            <CardImg top src={require('../assets/style2.jpg')} />
                            <CardBody className="cardPadding">
                            <p>Me encanta <b>tu estilo</b> siempre me deslumbra y me enamora</p>
                            </CardBody>
                        </Card>
                        </Col>
                    </Row>
                </Container>

               
                        
            </div>
        )
    }
}
