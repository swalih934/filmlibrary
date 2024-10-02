import React from 'react'
import Add from '../Components/Add'
import Films from '../Components/Films'
function Home() {
  return (
    <>
     <div className='container-fluid p-5' >
      <Add/>
      <div className='border  rounded-5 d-flex flex-wrap gap-2 border-info  p-5 shadow'>
        <Films/>

      </div>
    </div>
    </>
  )
}

export default Home