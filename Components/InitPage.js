import React from 'react'
import {Link} from 'react-router-dom';
import { Button } from "shards-react";
export default function InitPage() {
    return (
        <div className="buttonInit">
            
            <Link to='/1'>
                <Button size='lg' theme="secondary">Empezar!</Button>
            </Link>
        </div>
    )
}
