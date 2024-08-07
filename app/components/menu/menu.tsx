import React, { useState } from 'react'

// @ts-ignore
function Menu({cbFuncs}) {
  const {cbDelete, img, i, cbShare, cbFavorite} = cbFuncs
  const [showMenu, setShowMenu] = useState(false)

  const handleMenuClick = () => {
    setShowMenu(!showMenu)
  }


  return (
    <div style={{position:'absolute', zIndex:10, bottom:0, right:0, cursor:'pointer', backgroundColor:'white'}} onClick={handleMenuClick} onMouseLeave={()=>{setShowMenu(false)}}>
      {showMenu &&
        <div>
          {/* {cbShare&&<ul onClick={cbShare}>share</ul>} */}
          {cbDelete&&<ul onClick={()=>cbDelete(i)}>delete</ul>}
          {/* {cbFavorite&&<ul onClick={cbFavorite}>favorite</ul>} */}
        </div>}
      <div>
        Menu
      </div>
    </div>
  )
}

export default Menu