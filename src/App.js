import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Footer from './Components/Footer'
import Slides from './Components/slides';
import { Col, Container, Row, Tab, ListGroup } from 'react-bootstrap';
import cards from './data';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero buttontext="Place an Order" star="true" imageDiff="./Assets/Hero_Image.png" bgImg="assets/BgShape.svg" text={["Beautiful food & takeaway,", <span> delivered </span>, "to your door."]} para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500." />
      <Hero buttontext="Learn about us" imageDiff="./Assets/burger.png" bgImg="assets/BgShape2.svg" text={[<span>The home of fresh products</span>]} para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500." />

      {/* Works Components */}
      <Container className='worksComp my-5'>
        <Row>
          <Col xl={12}>
            <h1 className='mt-5'>How it works.</h1>
          </Col>
        </Row>
      </Container>
      <Container className='cardCont'>
        <Row className='row'>
          <Col xl={3} md={12} className='cards'>
            <img src='assets/Step01.png' className='img' />
            <div className='cardBody'>
              <h3>Adapt your menu items</h3>
              <p>Easily adapt your menu using the webflow CMS and allow customers to browse your items.</p>
            </div>
          </Col>
          <Col xl={1} md={12}>
            <div className='dash'></div>
          </Col>
          <Col xl={3} md={12} className='cards'>
            <img src='assets/Step 02.png' className='img' />
            <div className='cardBody'>
              <h3>Accept online orders & takeout</h3>
              <p>Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.</p>
            </div>
          </Col>
          <Col xl={1} md={12}>
            <div className='dash'></div>
          </Col>
          <Col xl={3} md={12} className='cards'>
            <img src='assets/Step03.png' className='img' />
            <div className='cardBody'>
              <h3>Manage delivery or takeout</h3>
              <p>Manage your own logistics and take orders simply through the ecommerce system.</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Menu */}
      <Container className='worksComp my-5'>
        <Row>
          <Col xl={12}>
            <h1 className='mt-5'>Browse our menu</h1>
            <p className='text-center '>Use our menu to place an order online, or <a className='info' href='#'>phone</a> our store to <br />
              place a pickup order. Fast and fresh food.</p>
          </Col>
        </Row>
      </Container>
      <div className='bg'>
        <Tab.Container id="listTab" defaultActiveKey="#link1">
          <Row>
            <ListGroup className='options'>
              <ListGroup.Item action href="#link1" className='link'>
                Burgers
              </ListGroup.Item>
              <ListGroup.Item action href="#link2" className='link'>
                Sides
              </ListGroup.Item>
              <ListGroup.Item action href="#link3" className='link'>
                Drinks
              </ListGroup.Item>
            </ListGroup>
            <Col sm={12}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                  <Container>
                    <Row>
                      {cards.map(item =>
                        <Slides
                          key={item.id}
                          title={item.title}
                          price={item.price}
                          img={item.img}
                          para={item.para}
                        />
                      )
                      }
                    </Row>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="#link2"><Container>
                  <Row>
                    {cards.map(item =>
                      <Slides
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        img={item.img}
                        para={item.para}
                      />
                    )
                    }
                  </Row>
                </Container></Tab.Pane>
                <Tab.Pane eventKey="#link3"><Container>
                  <Row>
                    {cards.map(item =>
                      <Slides
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        img={item.img}
                        para={item.para}
                      />
                    )
                    }
                  </Row>
                </Container></Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>

      {/* FAQ */}
      <Hero swap="true" buttontext="See our FAQ" imageDiff="./Assets/Phones.png" text={[<span>Order online with our simple checkout.</span>]} para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500." />
      <Hero buttontext="Ph. +1234567890" imageDiff="./Assets/food.png" bgImg="assets/BgShape2.svg" text={[<span>Call our store and takeaway when it suits you best.</span>]} para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500." />

      {/* Support page */}
      <div className='my-5'>
        <Container>
          <Row>
            <Col xl={6}>
              <img src='./assets/GroupPhoto.png' className='sup-img' />
            </Col>
            <Col xl={6}>
              <div className='sup-body'>
                <h3><span>Support</span> good food and local business.</h3>
                <button className='btn btn-lg btn-light'>Order Now</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}


