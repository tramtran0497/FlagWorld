import { Favorite } from '@mui/icons-material'
import Badge from '@mui/material/Badge';
import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';

function HeartBadge() {
    const [hiddenList, setHiddenList] = useState(true)
    const {qty, listFavorite} = useSelector(state => state.favorite)
    useEffect(()=>{
        //console.log(qty, listFavorite)
    })
    const handleHidden = () => {
        setHiddenList(!hiddenList)
    }
  return (
    <div>
        <Badge badgeContent={qty} color="primary">
            <Favorite color="action"  onClick={handleHidden}/>
        </Badge>
        <div className='list-favorite' style={{display: hiddenList ? "none": "block"}}>
            {listFavorite.map(item => <p key={item.name}>{item.name}</p>)}
        </div>
    </div>
  )
}

export default HeartBadge