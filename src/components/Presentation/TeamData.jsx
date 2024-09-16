import React from 'react'
import { useParams } from 'react-router-dom'

const TeamData = ({team}) => {
    const {name} = useParams();
    console.log(name)
  return (
    <div>
        this is {name}
    </div>
  )
}

export default TeamData
