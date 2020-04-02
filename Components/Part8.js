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
                    <Link to='/7'>
                        <Button className="buttonGeneral" theme="secondary">Anterior</Button>
                    </Link>
                    <Link to='/9'>
                        <Button  theme="secondary">Siguiente</Button>
                    </Link>
                    <Link to='/secret/enter'>
                        <Button className="buttonGeneral" outline pill theme="danger">nsfw</Button>
                    </Link> 
                    </div>
                    </Row>
                    <Row>
                        <Col>
                        <Card className={this.state.classCard}>
                            <CardImg top src={require('../assets/height2.jpg')} />
                            <CardBody>
                            <p>Amo <b>tu estatura</b>, amo amo amo </p>
                            </CardBody>
                        </Card>
                        </Col>

                        <Col>
                        <Card className={this.state.classCard}>
                            <CardImg top src={require('../assets/t2.jpg')} />
                            <CardBody>
                            <p>You are quite <b>Curvy</b> 😍</p>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col>
                        <Card className={this.state.classCard}>
                            <CardImg top src={require('../assets/smile2.jpg')} />
                            <CardBody>
                            <p>Amo tu carita cuando me miras cuando <b>me sonries</b></p>
                            </CardBody>
                        </Card>
                        </Col>
                    </Row>
                </Container>

               
                        
            </div>
        )
    }
}






