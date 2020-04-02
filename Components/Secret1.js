import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';
import {Link} from 'react-router-dom';
import { Button } from "shards-react";
import './style.css'
import { FormInput } from "shards-react";

const content = "Esta parte es un poco... no tan safe de ver por eso tiene contraseña. Igual seguro sabrás cual es.";

const text2Content = <Typewriter
onInit={(typewriter) => {
    typewriter.typeString('Intenta otra vez ')
    .start();
}}
/>

const text2vContent = <Typewriter
onInit={(typewriter) => {
    typewriter.typeString('Listo, sigamos ')
    .start();
}}
/>

export default class Secret1 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             contra:'160717',
             valid: false,
             invalid: false,
             showButton: 'notShowButton',
             typed: '',
             showInput: 'notShowInput',
             text2: <br/>
        }
    }
    
    handleContra = async () =>{
        await this.setState({
            text2: <br/>
        })
        if(this.state.typed === this.state.contra){
            let pass = {approved: true}
            sessionStorage.setItem('token',JSON.stringify(pass))
            this.setState({
                valid: true,
                showButton: 'showButton',
                invalid: false,
                text2: text2vContent
            })
        }else{
            this.setState({
                invalid: true,
                valid:false,
                showButton: 'notShowButton',
                text2: text2Content
            })
        }
        
    }


    handleOnChange = (e) =>{
        this.setState({typed: e.target.value})
    }

    handleShowInput = () =>{
        this.setState({showInput: 'showInput'})
    }

    render() {
        return (
        <div className="cont textContent">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(content)
                    .pauseFor(500)
                    .callFunction(() => {
                        this.handleShowInput()
                    })
                    .start();
                }}
            />
            {this.state.text2}
            <div className={this.state.showInput}>
            <FormInput 
            onChange={this.handleOnChange}
            value = {this.state.typed} 
            type="password" 
            valid={this.state.valid} 
            invalid={this.state.invalid} 
            placeholder="Clave" 
            className="mb-2" />

            <Button onClick={this.handleContra} theme="warning">Validar</Button>

            </div>
            <div className={this.state.showButton}> 
            <Link to='/secret/state'>
            <Button theme="danger">Seguir</Button>
            </Link>
            </div>
        </div>
        )
    }
}
