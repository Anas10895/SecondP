import React, { Component } from 'react'
import { Row, Col,Container,Card,CardGroup } from 'react-bootstrap';

export default class MarsImg extends Component {
    render() {
        return (
            <div>
  <Card bg='dark' text="white" dark expand="md">
<Card.Img variant="top" src= {this.props.data.img_src} />
    <Card.Body>
      <Card.Title>{this.props.data.rover.name} </Card.Title>
      <Card.Text>
      {this.props.data.camera.full_name}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{this.props.data.earth_date}</small>
    </Card.Footer>
  </Card>

            </div>
        )
    }
}
{/* <img height="500" width="500" src={this.props.data.img_src} />
<p>{this.props.data.camera.full_name}</p>
<p>{this.props.data.earth_date}</p>
<p>{this.props.data.rover.name}</p> */}
