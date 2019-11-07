import React, { Component } from 'react'
import MarsImg from "./MarsImg"
import { Row, Col,Container,Card } from 'react-bootstrap';

export default class Mars extends Component {
    state={
     data:null
    }
    
    componentDidMount() {
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=BSdihPCHUBhAbpXhlekYhfdCN77rV4gIBotqb72S')
          .then((response) => response.json())
          .then((responseData) => {
    
            this.setState({
              data: responseData.photos
            });
            
          });
        }
    render() {
        
        // console.log(this.props)
        return (
            <div>
                    <Card.Img src="https://timedotcom.files.wordpress.com/2014/10/mars.jpg?w=800&quality=85"/>

                <Container>
  <Row>
    <Col>{this.state.data !== null && this.state.data.map((data)=>{
                 return <MarsImg data={data} />
                  })}</Col>
  </Row>
  </Container>
                
             
            </div>
        )
    }
}
// {this.state.data !== null && this.state.data.map((data)=>{
//   return <MarsImg data={data} />
//    })}