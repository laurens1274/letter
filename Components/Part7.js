import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Button } from "shards-react";
import { Container, Row, Col, Card, CardBody, CardImg } from "shards-react";

import c2 from '../assets/cute2.jpg';
import h2 from '../assets/hot2.jpeg';

export default class Part7 extends Component {

    constructor(props) {
        super(props)
    
        this.content1 = <p className="blink_me_r" onClick={this.handleImage}>Hay momentos en los que puedes ser muy <b>tierna...</b></p>
        this.content2 = <p className="blink_me_h" onClick={this.handleImage}>Pero tambien pudes ser muy <b>Sexy...</b></p>
        this.state = {
             classButton: 'notShowButton',
             imageURL: c2,
             classCard: 'notShowCard',
             content: this.content1,
             st: false
             
        }
    }
    

    handleShowButton = () => {
        this.setState({classButton:"showButton"})
    }

    handleShowCard = () => {
        this.setState({classCard:'showCard2'})
    }

    handleImage = () => {
        if(this.state.st){
            this.setState({
                imageURL:c2,
                content: this.content1,
                st:false
            })
        }else{
            this.setState({
                imageURL:h2,
                content: this.content2,
                st:true
            })
        }
        
    }

    render() {

        setTimeout(()=>{
            this.handleShowCard()
        },500)

        return (
            <div>
            <Container>
                <Row>
                    <h1>Parte 2</h1>
                <div className="totheleft">    
                <Link to='/6'>
                    <Button className="buttonGeneral" theme="secondary">Anterior</Button>
                </Link>
                <Link to='/8'>
                    <Button className="buttonGeneral" theme="secondary">Siguiente</Button>
                </Link>
                </div>
                </Row>
                <Row>
                    <Col>
                    <Card className={this.state.classCard}>
                        <CardImg top src={require('../assets/prof2.jpg')} />
                        <CardBody className="cardPadding">
                        <p>Me alegra mucho siempre ver lo pro que eres en tu trabajo</p>
                        </CardBody>
                    </Card>
                    </Col>

                    <Col>
                    <Card className={this.state.classCard}>
                        <CardImg top src={this.state.imageURL} />
                        <CardBody className="cardPadding">
                        {this.state.content}
                        </CardBody>
                    </Card>
                    </Col>
                    <Col>
                    <Card className={this.state.classCard}>
                        <CardImg top src={require('../assets/dance2.jpeg')} />
                        <CardBody className="cardPadding">
                        <p>AMO que te guste <b>bailar conmigo</b>, porque yo lo disfruto mucho</p>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
            </Container>
                        
            </div>
        )
    }
}
