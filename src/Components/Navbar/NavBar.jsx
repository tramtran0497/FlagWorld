import React from "react";
import NavItems from "./NavItems"
import SearchField from "./Search";

function NavBar() {
  return(
      <div>
        <SearchField/>
        <NavItems/>
      </div>
  );
}

export default NavBar;
