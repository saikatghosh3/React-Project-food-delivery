import React from 'react'
import Header from './Header'
import Footer from './Footer'
// it will be used as master file. it will work to 
function Layout({children}) {
// we are wrapping all the children
// Here header and footer will be same but content inside the children will be canged.
  return (
   <>
   <Header/>
   <div>{children}</div>
   <Footer/>
   </>
  )
}

export default Layout