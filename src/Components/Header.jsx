import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <>
     <Navbar className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand className='fw-bold d-flex' href="#home">
            <img style={{width:'50px'}} src="https://png.pngtree.com/png-clipart/20210309/original/pngtree-movie-clip-art-movie-film-field-clapper-board-png-image_5862049.jpg" alt="" />
            
         <div className='mt-2' style={{fontSize:"25px"}}>   FilmLibrary</div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header