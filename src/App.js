import './App.css';
import { Nav, Navbar,FormControl } from 'react-bootstrap';
import Earth from "./component/Earth.js"
import React, { Component } from 'react'
import Home from "./component/Home.js"
import Mars from "./component/Mars.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./nasa.png" 
import ImageOfTheDay from "./component/ImageOfTheDay.js"
import { BrowserRouter , Switch, Route } from 'react-router-dom'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      explanation: '',
      imgurl: '',
      explanation1: '',
      imgurl1: [],
      data1: [],
      data2: [],
      tilte: "",

    };

  }
  componentDidMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=BSdihPCHUBhAbpXhlekYhfdCN77rV4gIBotqb72S')
      .then((response) => response.json())
      .then((responseData) => {
        // console.log(responseData);
        // console.log(this.state.tilte)

        this.setState({
          data: responseData,
          tilte: responseData.title,
          explanation: responseData.explanation,
          imgurl: responseData.url
        });
      });


    fetch(`https://images-api.nasa.gov/search?q=mars&media_type=image`)
      .then((response2) => response2.json())
      .then((responseData2) => {
        // console.log(responseData2);
        this.setState({
          data2: responseData2,

        });
      });


  }

  

  render() {
   
    //  listImg = 
  

    return (
      <div className="App">


          <Navbar collapseOnSelect expand="lg" bg="" variant="dark" scrolling fixed="top">

            <Navbar.Brand href="/">
              <img src="https://www.stickpng.com/assets/images/58429400a6515b1e0ad75acc.png" alt="" height="40"/>

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              <Nav.Link href="/Earth">Earth</Nav.Link>
                <Nav.Link href="/Mars">Mars</Nav.Link>
              </Nav>
              <Nav>
              <Nav.Link href="/ImageOfTheDay">ImageOfTheDay</Nav.Link>

                <FormControl className="serch" placeholder="Search"   />

              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
          <BrowserRouter> 

           <Switch>

            <Route  path="/Home" component={Home} />
            {/* <Route  path="/Earth" Component={Earth} /> */}
            <Route  path="/ImageOfTheDay" component={ImageOfTheDay} />
            <Route  path="/Earth" component={Earth} />

            <Route  path="/Mars" component={Mars} />
             {/* <Route path="/Mars" render={(props) => <Mars {...props}  imgUrl={this.state.imgurl1} /> } /> */}
            
          </Switch>
          </BrowserRouter> 

          
            {/* <Route path="/ImageOfTheDay" /> */}

            {/* <Route path="/gallery" exact render={(props) => <Gallery {...props} movies={this.state.movies} />} /> */}


            {/* <img src={this.state.imgurl} /> */}

            {/* <Earth pic={this.state.imgurl} /> */}


        {/* <Mars pic1={this.state.imgurl1} /> */}
        {/* {console.log(this.state.imgurl1.photos)} */}


            {/* <Mars /> */}

        {/* {this.state.imgurl1.map(item => <Mars ans={item} />)} */}








      </div>
    )
  }
}

