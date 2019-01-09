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
              <h1>Recomendaciones reales de gente comun</h1>
              <h4>Unete y comparte tus experiencias y descubrimientos con el mundo.</h4>
              <br/>
              <Button className='homebutton' style={{backgroundColor:"#d8c361", border:"none", color:"black"}} size={size}>Registrate</Button>
            </div>
        </div>
        <br/>
        <div className='catHome'>
        
            <Link to={'/rekos?category=Libros'}>
              <Card className='cardhome'
                  hoverable
                  style={{ width:"300px", margin:"0 10px" }}
                  cover={
                  <img style={{height:"180px"}} alt="example" src={fotoLibros} />}
                  >
                <Meta 
                className='titulosCard'
                title="Libros"
                />
            </Card>
          </Link>

          <Link to={'/rekos?category=Series'}>
            <Card
            hoverable
            style={{ width: "300px", margin:"0 10px" }}
            cover={<img style={{height:"180px"}} alt="series" src={fotoSeries} />}
            >
          <Meta className='titulosCard'
          title="Series"
          />
          </Card>
          </Link>
        
            <Link to={'/rekos?category=Peliculas'}>
            <Card
            hoverable
            style={{ width: "300px", margin:"0 10px" }}
            cover={<img style={{height:"180px"}} alt="example" src={fotoPeliculas} />}
            >
            <Meta className='titulosCard'
          title="Peliculas"
          />
          </Card>
          </Link>
            <Link to={'/rekos?category=Restaurantes'}>
            <Card
            hoverable
            style={{ width: "300px", margin:"10px 0px !important" }}
            cover={<img style={{height:"180px"}} alt="example" src={fotoRestaurantes} />}
            >
          <Meta className='titulosCard'
          title="Restaurantes"
          />
          </Card>
          </Link>

        </div>
        </div>

    
    )
  }
}
