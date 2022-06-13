import { Card } from '@mui/material'
import React from 'react'

const List = ({ list }) => {
  return (
    <div className='list'>
        {list.map(item => (
          <div style={{margin: '.5em'}}>
            <Card margin='normal'>
              <h5>{item.name}</h5>
              <p>{item.description}</p>
            </Card>
          </div>
        ))}
    </div>
  )
}

export default List