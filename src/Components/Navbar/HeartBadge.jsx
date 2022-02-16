import { Favorite } from '@mui/icons-material'
import Badge from '@mui/material/Badge';
import React, {useState} from 'react'

function HeartBadge() {
    const [hiddenList, setHiddenList] = useState(true)
    const handleHidden = () => {
        setHiddenList(!hiddenList)
    }
  return (
    <div>
        <Badge badgeContent={4} color="primary">
            <Favorite color="action"  onClick={handleHidden}/>
        </Badge>
        <div className='list-favorite' style={{display: hiddenList ? "none": "block"}}>
            LIST
        </div>
    </div>
  )
}

export default HeartBadge