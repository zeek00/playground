import React from 'react'

const Forge = ({dataBackToParent}) => {
  return (
    <div>
      <input type="text" onChange={(e)=>dataBackToParent(e.target.value)} />
    </div>
  )
}

export default Forge
