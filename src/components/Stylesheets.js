import React from 'react'
import './myStyles.css'

export function Stylesheets(props) {
    let className = props.primary ? 'primary' : ''

    return (
        <h1 class={className}> Stylesheets </h1>
    )
}
