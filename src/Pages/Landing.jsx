import React from 'react'
import { Row,Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import "./Landing.css"
import Card from 'react-bootstrap/Card';
function Landing() {
  return (
<>

<div className='container-fluid image' style={{minHeight:'90vh'}}>
<Row>
    <Col className='head p-5 mt-5' style={{backgroundImage:"none"}} md={6}>
    <h1  className=' fw-bold '>ART IN FILMS<span className='text-info'>...</span></h1>
    <div className='mt-4'  style={{textAlign:"justify"}}>
      <p style={{color:"white"}}>Many people find watching movies both entertaining and a way to reduce stress. Watching movies can make us forget our problems is an alternative to anxiety loss. As previously said, watching movies can have a positive emotional impact</p>
    </div>
    <Link  to={'/home'} className=' mt-3 btn btn-info'>Let's Start..</Link>
    </Col>
</Row>
</div>

<div className='container' style={{marginTop:"50px", marginBottom:"50px",minHeight:"80vh"}}>
<h2 className='text-center text-info my-5'>Features</h2>
<div className='row d-flex  align-items-center' style={{justifyContent:"space-evenly"}}>

<Card style={{ width: '18rem',marginTop:"30px" }} className='border shadow'>
            <Card.Img className='pt-3' variant="top" src="https://media.istockphoto.com/id/1409345534/vector/the-heroes-of-the-film-are-depicted-in-a-retro-style.jpg?s=612x612&w=0&k=20&c=zAQV_5kCvwhYe3DfKblk0ezK-McaGlHDd-FbZknsFM0=" width={"100%"} />
            <Card.Body className='text-center'>
              <Card.Title style={{color:'white'}}> Characters</Card.Title>
              <Card.Text style={{textAlign:"justify",color:'white'}}>
               someone who appears in a book, movie, etc.  a representation of an individual personality in a fictional or dramatic work. a character 
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem',marginTop:"30px" }} className='border shadow'>
            <Card.Img className='pt-3' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAi-2HzjXF8avT4Kmi6ejz0piyRXp4YEdG3Q&s" width={"100%"} />
            <Card.Body className='text-center'>
              <Card.Title style={{color:'white'}}>Cinematography</Card.Title>
              <Card.Text style={{textAlign:"justify",color:'white'}}>
              cinematography, the art and technology of motion-picture photography. It involves such techniques as the general composition of a scene;
              </Card.Text>
            </Card.Body>
          </Card><Card style={{ width: '18rem',marginTop:"30px" }} className='border shadow'>
            <Card.Img className='pt-3' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDPTWRD8sMgJ9oCf_iFWutcxQt9Nk8nm8U1Q&s" width={"100%"} />
            <Card.Body className='text-center'>
              <Card.Title style={{color:'white'}}>Sound</Card.Title>
              <Card.Text style={{textAlign:"justify",color:'white'}}>
              vibration that propagates as an acoustic wave through a transmission medium such as a gas, liquid or solid.acoustic wave through a 
              </Card.Text>
            </Card.Body>
          </Card>
</div>
</div>

</>


  )
}

export default Landing