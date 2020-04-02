import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';
import {Link} from 'react-router-dom';
import { Button } from "shards-react";
import './style.css'

const content = "Queria desde aca hacer algo para ti... Estuve pensando un tiempo y esto que veras aqui fue lo que se me ocurrio"


export default class Part1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             classButton: 'notShowButton'
        }
    }

    handleShow = () =>{
        this.setState({classButton: 'showButton'})
    }
    
    render() {
        return (
            <div className="cont textContent">
            <Typewriter

                onInit={(typewriter) => {
                    typewriter.typeString(content)
                    .callFunction(() => {
                        console.log('String typed out!');
                    })
                    .pauseFor(500)
                    .callFunction(() => {
                        console.log('All strings were deleted');
                        this.handleShow()
                    })
                    .start();
                }}
            />
            <div className={this.state.classButton}>
                <Link to='/'>
                    <Button className="buttonGeneral" theme="secondary">Anterior</Button>
                </Link>
                <Link to='/2'>
                    <Button className="buttonGeneral" theme="secondary">Siguiente</Button>
                </Link>
            </div>
        </div>
        )
    }
}
