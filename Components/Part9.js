import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';
import {Link} from 'react-router-dom';
import { Button } from "shards-react";
import './style.css'
import ProgressBar from 'react-bootstrap/ProgressBar'

const content = "Hay momentos en los que me preguntas que tanto te amo... bueno te lo mostrare aqui..."


export default class Part9 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             classButton: 'notShowButton',
             pbarOut: 'notshowpbar',
             pbar: 'progressbar_p0',
             text2: null,
             index: 0
        }
    }

    handleShow = () =>{
        this.setState({classButton: 'showButton'})
    }
    
    handleBarOut = () => {
        this.setState({pbarOut:'progressbar'})
    }

    handleBar = () =>{
        let i = this.state.index;
        let st = 'progressbar_p'+i
        this.setState({
            pbar: st,
            index: i+1
        })
    }

    handleText2 = () => {

        let text2Content = <div className="textContent">
        <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString('test')
                .pauseFor(1500)
                .callFunction(()=>{
                   this.handleBar()
                }).pauseFor(1500)
                .callFunction(()=>{
                   this.handleBar()
                }).pauseFor(1500)
                .callFunction(()=>{
                   this.handleBar()
                }).pauseFor(1500)
                .callFunction(()=>{
                   this.handleBar()
                }).pauseFor(1500)
                .callFunction(()=>{
                   this.handleBar()
                }).pauseFor(1500)
                .callFunction(()=>{
                   this.handleBar()
                }).pauseFor(1500)
                .callFunction(()=>{
                   this.handleBar()
                }).pauseFor(1500)
                .callFunction(()=>{
                   this.handleShow()
                })
                .start();
            }}
        />
        </div>

        this.setState({text2:text2Content})
    }

    render() {
        return (
            <div className="cont">
            <div className="textContent">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(content)
                    .pauseFor(500)
                    .callFunction(() => {
                        this.handleBarOut()
                    })
                    .pauseFor(1500)
                    .callFunction(()=>{
                       this.handleText2()
                    })
                    .start();
                }}
            />
            </div>
            <br/>
            <div className={this.state.pbarOut}>
                <div className={this.state.pbar}></div>
            </div>
            
                {this.state.text2}

            <div className={this.state.classButton}>
                <Link to='/8'>
                    <Button className="buttonGeneral" theme="info">Anterior</Button>
                </Link>
                <Link to='/10'>
                    <Button className="buttonGeneral" theme="info">Siguiente</Button>
                </Link>
            </div>
        </div>
        )
    }
}
