import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Row, Col, Card, Button } from 'antd';
import fotoLibros from '../../../src/images/Libros.jpg'
import fotoSeries from '../../../src/images/series.jpg'
import fotoPeliculas from '../../../src/images/movies.jpg'
import fotoRestaurantes from '../../../src/images/comida.jpg'
import fotoMiniLogo from '../../../src/images/Reko-mini.png'
import fotoLogo from '../../images/Copia de ReKoonlytext.png'
import {Link} from 'react-router-dom';



const { Meta } = Card

export default class Home extends Component {
    
    state = {
        data: {}
    }
    
    
    render() {
      const size = this.state.size;
    return (
      <div className='homestyle2'>
        <div className="flex">
            <div className='homeOne'>
              <img className='logomini' alt='minilogo' src={fotoLogo}/>
              <h1>Recomendaciones reales de gente común</h1>
              <h4>Únete y comparte tus experiencias y descubrimientos con el mundo</h4>
              <br/>
              <Link to={'/signup'}>
              <Button className='homebutton' style={{backgroundColor:"#d8c361", border:"none", color:"black"}} size={size}>Regístrate</Button>
              </Link>
            </div>
        </div>
        <br/>
        <div className='catHome'>
        
            <Link to={'/rekos?category=Libros'}>
              <Card className='cardhome'
                  hoverable
                  style={{ width:"300px", margin:"0 10px" }}
                  cover={
                  <img style={{height:"180px", width:'100%'}} alt="example" src={fotoLibros} />}
                  >
               
                <p style={{fontSize:'20px'}}> Libros </p>
                
            </Card>
          </Link>

          <Link to={'/rekos?category=Series'}>
            <Card
            hoverable
            style={{ width: "300px", margin:"0 10px" }}
            cover={<img style={{height:"180px", width:'100%'}} alt="series" src={fotoSeries} />}
            >
          
          <p style={{fontSize:'20px'}}>Series</p>
         
          </Card>
          </Link>
        
            <Link to={'/rekos?category=Peliculas'}>
            <Card
            hoverable
            style={{ width: "300px", margin:"0 10px" }}
            cover={<img style={{height:"180px", width:'100%'}} alt="example" src={fotoPeliculas} />}
            >
            
          <p style={{fontSize:'20px'}}>Películas</p>
          
          </Card>
          </Link>
            <Link to={'/rekos?category=Restaurantes'}>
            <Card
            hoverable
            style={{ width: "300px", margin:"10px 0px !important" }}
            cover={<img style={{height:"180px", width:'100%'}} alt="example" src={fotoRestaurantes} />}
            >
          
          <p style={{fontSize:'20px'}}>Restaurantes</p>
         
          </Card>
          </Link>

        </div>
        </div>

    
    )
  }
}
