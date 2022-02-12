import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom'


function NavItems() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
      <Link to="/">
        <Tab label="View Countries" aria-label="view-countries" />
      </Link>
      <Tab label="Contact" aria-label="contact" />
      <Tab icon={<FavoriteIcon />} aria-label="favorite" />
    </Tabs>
  );
}

export default NavItems;
