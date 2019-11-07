import React, { Component } from 'react'
import { Row, Col,Container,Media,Card } from 'react-bootstrap';

export default class ImageOfTheDay extends Component {
    state = {
        explanation: '',
        imgurl: '',
        title: "",
    
      }
    componentDidMount() {
        fetch('https://api.nasa.gov/planetary/apod?api_key=BSdihPCHUBhAbpXhlekYhfdCN77rV4gIBotqb72S')
        .then((response) => response.json())
        .then((responseData) => {
          // console.log(responseData);
          // console.log(this.state.tilte)
  
          this.setState({
            title: responseData.title,
            explanation: responseData.explanation,
            imgurl: responseData.url
          });
        });
    
    }
        render() {
        return (
          
            <div>
<Card bg='dark' text="white">
  <Card.Img variant="top" src={this.state.imgurl} />
  <Card.Body>
    <Card.Title>{this.state.title}</Card.Title>
    <Card.Text>
{this.state.explanation}
    </Card.Text>
  </Card.Body>
</Card>
            </div>
        )
    }



}
{/* <h1>{this.state.title}</h1>    
<img className="pic" src={this.state.imgurl} />
<p>{this.state.explanation}</p> */}
