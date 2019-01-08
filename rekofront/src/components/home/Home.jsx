import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Row, Col, Card, Button } from 'antd';
import fotoLibros from '../../../src/images/Libros.jpg'
import fotoSeries from '../../../src/images/series.jpg'
import fotoPeliculas from '../../../src/images/movies.jpg'
import fotoRestaurantes from '../../../src/images/comida.jpg'
import fotoMiniLogo from '../../../src/images/Reko-mini.png'
import {Link} from 'react-router-dom';



const { Meta } = Card

export default class Home extends Component {
    
    state = {
        data: {}
    }
    
    
    render() {
      const size = this.state.size;
    return (
      <div className='homestyle'>
      <div className='homeOne'>
      <h3>Bienvenido a Reko</h3>
      <h3>Recomendaciones reales de gente comun</h3>
      <h4>Unete y comparte tus experiencias y descubrimientos con el mundo.</h4>
      <img className='logomini' alt='minilogo' src={fotoMiniLogo}/>
      <Button className='homebutton' type="primary"  size={size}>Registrate</Button>
      <Button className='homebutton' type="primary"  size={size}>Login</Button>
      </div>
       <h2 className='tituloCat' style={{fontSize:50}}>Categorias</h2>
       <div className="gutter-example">
    <Row gutter={16} style={{marginLeft:10}}>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box"></div>
        <Card
        hoverable
        style={{ width: 320 }}
        cover={<img alt="example" src={fotoLibros} />}
        >
      <Meta 
      className='titulosCard'
      title="Libros"
      />
      </Card>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box"></div>
        <Card
        hoverable
        style={{ width: 320 }}
        cover={<img alt="series" src={fotoSeries} />}
        >
      <Meta className='titulosCard'
      title="Series"
      />
      </Card>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box"></div>
        <Card
        hoverable
        style={{ width: 320 }}
        cover={<img alt="example" src={fotoPeliculas} />}
        >
         <Meta className='titulosCard'
      title="Peliculas"
      />
      </Card>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box"></div>
        <Card
        hoverable
        style={{ width: 320 }}
        cover={<img alt="example" src={fotoRestaurantes} />}
        >
      <Meta className='titulosCard'
      title="Restaurantes"
      />
      </Card>
      </Col>
    </Row>
     </div>
      </div>
    )
  }
}
