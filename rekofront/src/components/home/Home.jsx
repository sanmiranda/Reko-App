import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Row, Col, Card, Carousel } from 'antd';
import fotoLibros from '../../../src/images/Libros.jpg'
import fotoSeries from '../../../src/images/series.jpg'
import fotoPeliculas from '../../../src/images/movies.jpg'
import fotoRestaurantes from '../../../src/images/comida.jpg'


const { Meta } = Card

export default class Home extends Component {
    
    state = {
        data: {}
    }
    
    
    render() {
    return (
      <div>
        <Carousel effect="fade">
    <div className='carrusel1'>
      <h3>Bienvenido</h3>
    </div>
    <div className='carrusel2'><h3>2</h3></div>
    <div className='carrusel1'><h3>3</h3></div>
    <div className='carrusel1'><h3>4</h3></div>
  </Carousel>
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
      <Meta className='titulosCard'
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
