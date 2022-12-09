import React from 'react'
import './SpaceItem.css'

const h1Styled = {
    backgroundColor: 'pink',
    padding: '5px'
}

const SpaceItem = ({ char }) => {
    return (
        <div className='container'>
            <h1 style={h1Styled}>ID: {char.name}</h1>
            <h3 style={{ backgroundColor: 'yellow', textTransform: 'uppercase' }}>
                Species: {char.species}
            </h3>
            <img src={char.img_url} alt={char.name} />
        </div>
    )
}

export default SpaceItem