import { buildQueries } from '@testing-library/react'
import React from 'react'

function Inline() {
    
    const heading = {
        fontSize: '72px',  // keys has to be camel-cased unlike normal css keys
        color: 'blue'
    }
    return (
        <div>
            <h1 style={heading}> Inline </h1>
        </div>
    )
}

export default Inline