import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';
import {Link} from 'react-router-dom';
import { Button } from "shards-react";
import './style.css'


const content1 = `Y ya que estamos aquí, te muestro como se pone mi cerebro a tu lado...`
const content2 = `Si ves! No hace nada... Así quedo igual... 
                    Es que estar a tu lado son muchas cosas que siento...
                    Sigamos, que aun no acabamos 😘`

export default class Part4 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            button1: null,
            text2: null,
            classButton: 'notShowButton'
        }
    }
    

    handleButton1 = () => {
        console.log('test')
        this.setState({
            button1: <Button className="mybrain" pill block> My Brain </Button>
        })
    }

    handleText2 = () => {
        let textContent = <Typewriter
        onInit={(typewriter) => {
            typewriter.typeString(content2)
            .callFunction(() => {
                console.log('String typed out!');
            })
            .pauseFor(2500)
            .callFunction(() => {
                console.log('All strings were deleted');
                this.handleButton2()
            })
            .start();
        }}
    />
        this.setState({
            text2: textContent
        })
    }

    handleButton2 = () => {
        this.setState({classButton: 'showButton'})
    }


    render() {
        return (
            <div className="cont textContent">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(content1)
                    .callFunction(() => {
                        console.log('String typed out!');
                    })
                    .pauseFor(500)
                    .callFunction(() => {
                        console.log('All strings were deleted');
                        this.handleButton1()
                    }).pauseFor(1500)
                    .callFunction(()=>{
                        this.handleText2()
                    })
                    .start();
                }}
            />

                {this.state.button1}
                {this.state.text2}
            <div className={this.state.classButton}>
                <Link to='/3'>
                    <Button className="buttonGeneral" theme="secondary">Anterior</Button>
                </Link>
                <Link to='/5'>
                    <Button className="buttonGeneral" theme="secondary">Siguiente</Button>
                </Link>
            </div>
            
            
        </div>
        )
    }
}
