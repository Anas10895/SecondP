import React, { Component } from 'react'
import { Row, Col,Container,Media,Card,CardGroup } from 'react-bootstrap';
import EarthImg from "./EarthImg"

export default class Mars extends Component {
    state={
     data:[
        
     ],
    }
    
    componentDidMount() {
        fetch(`http://images-api.nasa.gov/search?q=Earth`)
          .then((response) => response.json())
          .then((responseData) => {
            console.log(responseData)
            this.setState({
              data: responseData
            });
            
          });
        }
    render() {
        // console.log(this.props)
        return (
            <div className="img">
  <Card bg="dark">
      <Card.Img src="https://atlascertified.com/wp-content/uploads/2017/04/earth-hd.jpg"/>
      <Card.Img src="https://wallpaperaccess.com/full/19603.jpg"/>


  </Card>
                
             
            </div>
        )
    }
}
