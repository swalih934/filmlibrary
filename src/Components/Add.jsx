import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
//new
import { addFilm } from '../Store/Slice/FilmSlice';
import { useDispatch } from 'react-redux';
function Add() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
//new
const dispatch=useDispatch()
const [film,setFilm]=useState({
    ID:'',title:'',imageurl:'',language:'',mainactor:'',year:''
})
const handleDispatch=()=>{
    const{ID,title,imageurl,language,mainactor,year}=film
    if(!ID || !title || !imageurl || !language ||!mainactor || !year){
        alert("enter valid inputs")
    }
    else{
        console.log(film);
        dispatch(addFilm(film))
        handleClose()
        alert("Film added succesfully")
        
    }
}
  return (
    <>
      <button className='btn btn-info  rounded-5 my-3' onClick={handleShow}>Add Film{' '}<i className="fa-solid fa-book-medical "  /></button>


<Modal 
                
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton >
                    
                    <Modal.Title>Add Film</Modal.Title>
                </Modal.Header>
                <Modal.Body>
            
               
                    <FloatingLabel
                        controlId="floatingInput"
                        label="ID"
                        className="mb-3"
                    >
                        <Form.Control type="number" placeholder="ID" onChange={(e)=>{setFilm({...film,ID:e.target.value})}}  className='rounded-4' />
                    </FloatingLabel>
            
                    <FloatingLabel controlId="floatingInput" label="Title" className='mb-3'>
                        <Form.Control type="text" placeholder="Password" onChange={(e)=>{setFilm({...film,title:e.target.value})}}  className='rounded-4 '/>
                    </FloatingLabel>
            
                    <FloatingLabel controlId="floatingInput" label="Image URL" className='mb-3'>
                        <Form.Control type="text" placeholder="Password" onChange={(e)=>{setFilm({...film,imageurl:e.target.value})}} className='rounded-4'/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Language" className='mb-3'>
                        <Form.Control type="text" placeholder="Password" onChange={(e)=>{setFilm({...film,language:e.target.value})}} className='rounded-4'/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label=" Main Actor" className='mb-3'>
                        <Form.Control type="text" placeholder="Password" onChange={(e)=>{setFilm({...film,mainactor:e.target.value})}} className='rounded-4'/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label=" Year " className='mb-3'>
                        <Form.Control type="number" placeholder="Password" onChange={(e)=>{setFilm({...film,year:e.target.value})}}  className='rounded-4'/>
                    </FloatingLabel>
                   
            
            
                </Modal.Body>
                <Modal.Footer>
            
                    <Button variant="success" className='px-5 p-3 rounded-5' onClick={handleDispatch} >Add</Button>
                </Modal.Footer>
            </Modal>
           
    </>
  )
}

export default Add