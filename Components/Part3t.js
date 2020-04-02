import React, { Component } from 'react'
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import { Container, Row, Col } from "shards-react";
import {Link} from 'react-router-dom'

const b = [1,2,3,4,5,6,7,8];


export default class Part3 extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            open:[false,false,false,false,false,false,false,false,false],
            bClass: b.sort(()=>Math.random()-0.5),
            buttonClass: 'notShowButton3'
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

    handleShowButton = () => {
        this.setState({buttonClass:'buttonCircle'})
    }


    render() {
        console.log(this.state.bClass)
        setTimeout(()=>{
            this.handleShowButton()
        },500)
        return (
            <div className='buttonGroup'>
                
                        <Button className={`${this.state.buttonClass} b${this.state.bClass[0]}`} theme="secondary" id="Modal-1" onClick={()=>this.toggle(1)}>
                            Click me!
                        </Button>

                        <Button  className={`${this.state.buttonClass} b${this.state.bClass[1]}`} theme="success" id="Modal-2" onClick={()=>this.toggle(2)}>
                            Click me!
                        </Button>

                        <Button className={`${this.state.buttonClass} b${this.state.bClass[2]}`}  theme="primary" id="Modal-3" onClick={()=>this.toggle(3)}>
                            Click me!
                        </Button>

                       <Button className={`${this.state.buttonClass} b${this.state.bClass[3]}`}  theme="info" id="Modal-4" onClick={()=>this.toggle(4)}>
                            Click me!
                        </Button>
 
                        <Button className={`${this.state.buttonClass} b${this.state.bClass[4]}`}  theme="danger" id="Modal-5" onClick={()=>this.toggle(5)}>
                            Click me!
                        </Button>

                        <Button className={`${this.state.buttonClass} b${this.state.bClass[5]}`}  theme="warning" id="Modal-6" onClick={()=>this.toggle(6)}>
                            Click me!
                        </Button>

                        <Button className={`${this.state.buttonClass} b${this.state.bClass[6]}`}  theme="dark" id="Modal-7" onClick={()=>this.toggle(7)}>
                            Click me!
                        </Button>

                        <Button className={`${this.state.buttonClass} b${this.state.bClass[7]}`}  theme="info" id="Modal-8" onClick={()=>this.toggle(8)}>
                            Click me!
                        </Button>
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
                        <img className="imgModal" src = {require('../assets/grad2.jpeg')} alt = ""></img>
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
                        <img className="imgModal" src = {require('../assets/tayrona2.jpg')} alt = "" ></img>
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
                        <img className="imgModal" src = {require('../assets/ctg2.jpg')} alt = "" ></img>
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
                        <img  className="imgModal" src = {require('../assets/lisboa22.jpg')} alt = ""  ></img>
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
                        <img className="imgModal" src = {require('../assets/hamburg2.jpg')} alt = "" ></img>
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
                        <img className="imgModal" src = {require('../assets/madrid.jpg')} alt = "" ></img>
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
                        <img className="imgModal" src = {require('../assets/berlin.jpg')} alt = "" ></img>
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
                        <img className="imgModal" src = {require('../assets/blankenese2.jpg')} alt = "" ></img>
                        </div>
                    </ModalBody>
                </Modal>
               
            </div>

        );
    }
}
