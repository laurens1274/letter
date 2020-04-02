import React, { Component } from 'react'
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import { Container, Row, Col } from "shards-react";
import {Link} from 'react-router-dom'

export default class Part3 extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            open:[false,false,false,false,false,false,false,false,false] 
        };
    }

    toggle = (index) => {
        let newOpen = [...this.state.open];
        newOpen[index-1] = !newOpen[index-1];
        this.setState({
            open: newOpen
        });
    }


    toggleAll = () => {
        this.setState({
            open: [false,false,false,false,false,false,false,false,false] 
        });
    }


    render() {
        return (
            <div className='buttonGroup'>
                <Container >
                    <Row className='buttonRow'>
                        <Col>
                            <Button className="buttonGeneral" theme="secondary" id="Modal-1" onClick={()=>this.toggle(1)}>
                                Toggle
                            </Button>

                        </Col>
                        <Col>
                            <Button  className="buttonGeneral" theme="success" id="Modal-2" onClick={()=>this.toggle(2)}>
                                Toggle
                        </Button>

                        </Col>
                        <Col>
                            <Button className="buttonGeneral" theme="primary" id="Modal-3" onClick={()=>this.toggle(3)}>
                                Toggle
                        </Button>

                        </Col>
                    </Row>
                    <Row className='buttonRow'>
                        <Col>
                            <Button className="buttonGeneral" theme="info" id="Modal-4" onClick={()=>this.toggle(4)}>
                                Toggle
                            </Button>

                        </Col>
                        <Col>
                            <Button className="buttonGeneral" theme="danger" id="Modal-5" onClick={()=>this.toggle(5)}>
                                Toggle
                        </Button>

                        </Col>
                        <Col>
                            <Button className="buttonGeneral" theme="warning" id="Modal-6" onClick={()=>this.toggle(6)}>
                                Toggle
                        </Button>

                        </Col>
                    </Row>
                    <Row className='buttonRow'>
                        <Col>
                            <Button className="buttonGeneral" theme="dark" id="Modal-7" onClick={()=>this.toggle(7)}>
                                Toggle
                            </Button>

                        </Col>
                        <Col>
                        <Button className="buttonGeneral" theme="info" id="Modal-8" onClick={()=>this.toggle(8)}>
                                Toggle
                        </Button>

                        </Col>
                    </Row>
                </Container>
                <div className="showButton">
                <Link to='/2'>
                    <Button className="buttonGeneral" theme="secondary">Anterior</Button>
                </Link>
                <Link to='/4'>
                    <Button className="buttonGeneral" theme="secondary">Siguiente</Button>
                </Link>
                </div>
                <Modal
                    open={this.state.open[0]}
                    toggle={this.toggleAll}
                    target="#Modal-1"
                    modalContentClassName="modalclass"
                    >
                    <ModalHeader>Nuestro Grado</ModalHeader>
                    <ModalBody>
                        <div className="modaldiv">
                        <h5>Habernos graduado juntos 🎓... Aún recuerdo como me gustó bailar contigo esa noche </h5>
                        <img src = {require('../assets/grad2.jpeg')} alt = "" width="383" height="479"></img>
                        </div>
                    </ModalBody>
                </Modal>
                <Modal
                    placement="bottom"
                    open={this.state.open[1]}
                    toggle={this.toggleAll}
                    target="#Modal-2"
                    modalContentClassName="modalclass"
                    >
                    <ModalHeader>Tayrona</ModalHeader>
                    <ModalBody>
                    <div className="modaldiv">
                        <h5>Nuestro primer viaje juntos, de los momentos en que ví que todo es mejor a tu lado 🌊</h5>
                        <img src = {require('../assets/tayrona2.jpg')} alt = "" width="418" height="522"></img>
                        </div>
                    </ModalBody>
                </Modal>
                <Modal
                    placement="bottom"
                    open={this.state.open[2]}
                    toggle={this.toggleAll}
                    target="#Modal-3"
                    modalContentClassName="modalclass"
                    >
                    <ModalHeader>Cartagena</ModalHeader>
                    <ModalBody>
                    <div className="modaldiv">
                        <h5>Mi cumpleaños junto a ti... me hiciste ver cartagena de una manera que jamás olvidaré</h5>
                        <img src = {require('../assets/ctg2.jpg')} alt = "" width="420" height="525"></img>
                        </div>
                    </ModalBody>
                </Modal>
                <Modal
                    placement="bottom"
                    open={this.state.open[3]}
                    toggle={this.toggleAll}
                    target="#Modal-4"
                    modalContentClassName="modalclass"
                    >
                    <ModalHeader>Lisboa</ModalHeader>
                    <ModalBody>
                        <div className="modaldiv">
                        <h5>Este fue un viaje mágico y estar contigo solo lo hacía mas</h5>
                        <img  src = {require('../assets/lisboa22.jpg')} alt = "" width="420" height="330" ></img>
                        </div>
                    </ModalBody>
                </Modal>
                <Modal
                    placement="bottom"
                    open={this.state.open[4]}
                    toggle={this.toggleAll}
                    target="#Modal-5"
                    modalContentClassName="modalclass"
                    >
                    <ModalHeader>Hamburg</ModalHeader>
                    <ModalBody>
                        <div className="modaldiv">
                        <h5>Recuerdo la primera vez que viniste, ame poder mostrarte y guiarte por la ciudad 🚢</h5>
                        <img src = {require('../assets/hamburg2.jpg')} alt = "" width="420" height="525"></img>
                        </div>
                    </ModalBody>
                </Modal>
                <Modal
                    placement="bottom"
                    open={this.state.open[5]}
                    toggle={this.toggleAll}
                    target="#Modal-6"
                    modalContentClassName="modalclass"
                    >
                    <ModalHeader>Madrid</ModalHeader>
                    <ModalBody>
                        <div className="modaldiv">
                        <h5>Disfrute mucho el dia que caminamos por madrid río. Madrid sin ti no es Madrid.</h5>
                        <img src = {require('../assets/madrid.jpg')} alt = "" width="420" height="315"></img>
                        </div>
                    </ModalBody>
                </Modal>
                <Modal
                    placement="bottom"
                    open={this.state.open[6]}
                    toggle={this.toggleAll}
                    target="#Modal-7"
                    modalContentClassName="modalclass"
                    >
                    <ModalHeader>Berlin</ModalHeader>
                    <ModalBody>
                        <div className="modaldiv">
                        <h5>Nuestro primer fin de año juntos 💓</h5>
                        <img src = {require('../assets/berlin.jpg')} alt = "" width="420" height="482"></img>
                        </div>
                    </ModalBody>
                </Modal>
                <Modal
                    placement="bottom"
                    open={this.state.open[7]}
                    toggle={this.toggleAll}
                    target="#Modal-8"
                    modalContentClassName="modalclass"
                    >
                    <ModalHeader>Blankenese</ModalHeader>
                    <ModalBody>
                        <div className="modaldiv">
                        <h5>Ame caminar contigo por las calles de Blankenese. Esas callecitas estrechas contigo me enamoraban mucho</h5>
                        <img src = {require('../assets/blankenese2.jpg')} alt = "" width="420" height="526"></img>
                        </div>
                    </ModalBody>
                </Modal>
               
            </div>

        );
    }
}
