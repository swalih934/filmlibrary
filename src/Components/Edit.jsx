import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { editFilms } from '../Store/Slice/FilmSlice';
function Edit({filmToEdit}) {
    const [show, setShow] = useState(false);
    const [data,SetData]=useState(filmToEdit)

    const dispatch = useDispatch();


    const handleClose = () => setShow(false);
    const handleShow = () => {
         // setData(bookToEdit); 
        setShow(true)
    }

    const handleUpdate = () => {
        dispatch(editFilms(data)); 
        handleClose();
    };


  return (
    <>
     <button onClick={handleShow} className='btn  py-2 ps-3' >
                <i className="fa-solid fa-file-pen text-info" />
            </button>


            <Modal 
                
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton >
                    
                    <Modal.Title>Edit Film</Modal.Title>
                </Modal.Header>
                <Modal.Body>
            
{/*                
                    <FloatingLabel
                        controlId="floatingInput"
                        label="ID"
                        className="mb-3"
                    >
                        <Form.Control type="number" value={data?.ID} onChange={(e)=>{setFilm({...data,ID:e.target.value})}}  placeholder="ID"  className='rounded-4' />
                    </FloatingLabel> */}
            
                    <FloatingLabel controlId="floatingInput" label="Title" className='mb-3'>
                        <Form.Control type="text" value={data?.title} onChange={(e)=>{SetData({...data,title:e.target.value})}}  placeholder="Password"  className='rounded-4 '/>
                    </FloatingLabel>
            
                    <FloatingLabel controlId="floatingInput" label="Image URL" className='mb-3'>
                        <Form.Control type="text" value={data?.imageurl} onChange={(e)=>{SetData({...data,imageurl:e.target.value})}}  placeholder="Password"  className='rounded-4'/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Language" className='mb-3'>
                        <Form.Control type="text" value={data?.language} onChange={(e)=>{SetData({...data,language:e.target.value})}}  placeholder="Password"  className='rounded-4'/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label=" Main Actor" className='mb-3'>
                        <Form.Control type="text" value={data?.mainactor} onChange={(e)=>{SetData({...data,mainactor:e.target.value})}}  placeholder="Password"  className='rounded-4'/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label=" Year " className='mb-3'>
                        <Form.Control type="number" value={data?.year} onChange={(e)=>{SetData({...data,year:e.target.value})}}  placeholder="Password"  className='rounded-4'/>
                    </FloatingLabel>
                   
            
            
                </Modal.Body>
                <Modal.Footer>
            
                    <Button variant="success" onClick={handleUpdate} className='px-5 p-3 rounded-5' >Add</Button>
                </Modal.Footer>
            </Modal>
    </>
  )
}

export default Edit