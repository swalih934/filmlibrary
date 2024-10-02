import React from 'react'
import Card from 'react-bootstrap/Card';
import Edit from './Edit';
import { useSelector,useDispatch } from 'react-redux';
import { removeFilm } from '../Store/Slice/FilmSlice';
function Films() {

    const{Films}=useSelector((state)=>state.filmReducer)
    const dispatch=useDispatch()
  return (
    <>
{
    Films?.length>0?
    Films.map(item=>(

        <Card className='shadow rounded-3 ' style={{ width: '18rem',backgroundColor:'white' }}>
        <Card.Img className='img-fluid rounded-top-3  p-3' style={{height:'200px'}} variant="top" src={item.imageurl} />
        <Card.Body style={{backgroundColor:'white'}} className='  rounded-bottom-3'>
          <Card.Title style={{fontSize:'30px',fontWeight:'bolder',color:'purple',textDecoration:'underline'}} className='text-center '> {item.title}</Card.Title>
          <Card.Text >
              <div style={{fontWeight:'bold',color:'black'}} className='d-flex flex-column'>
                  <span>No-{item.ID} </span>
                  <span>Language-{item.language}</span>
                  <span>Actor-{item.mainactor}</span>
                  <span>Year-{item.year}</span>
  
  
              </div>
              <div className='d-flex justify-content-between mt-3'>
                  <Edit filmToEdit={item}/>
  
              <button className='btn   py-2 px-3' onClick={()=>{dispatch(removeFilm(item.ID))}}><i className="fa-solid fa-trash" style={{color: "#ff0000"}} /></button>
           </div>
         
          </Card.Text>
        </Card.Body>
      </Card>
    ))
    :
    <h2 className='text-center '>No Films Added yet!! </h2>
}


    </>
  )
}

export default Films