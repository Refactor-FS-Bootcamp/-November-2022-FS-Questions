import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SpaceItem from './SpaceItem'

const SpaceList = () => {
    const [chars, setChars] = useState([])

    useEffect(() => {
        const fetchChars = async () => {
            const url = 'https://finalspaceapi.com/api/v0/character/'
            const res = await axios.get(url)
            setChars(res.data)
        }
        fetchChars()
    },[])

    return chars.map(char => <SpaceItem key={char.id} char={char} />)
}

export default SpaceList