import React from 'react'

import classes from './location.module.css'

export default function location(props) {
    return (
        <div className={classes.Location}>
        <h1 className={classes.Title}>{props.title}</h1>
        <p className={classes.Example}>{props.example}</p>
            <input onChange={props.change} className={classes.Input} type={props.inputType} value={props.value} placeholder={props.placeholder}/>
        </div>
    )
}
