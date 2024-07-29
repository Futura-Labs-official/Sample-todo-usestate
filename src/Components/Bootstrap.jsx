import React, { Fragment } from 'react';
import { Badge, Button, Card, Carousel, Col, Container, Form, Image, Nav, Navbar, NavDropdown, Pagination, Row, Spinner } from 'react-bootstrap';
import Icons from './Icons';

const Bootstrap = () => {
    return (
        <Fragment>

            <Navbar expand="lg" className="">
                <Container fluid>
                    <Navbar.Brand>Ecommerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse >
                        <Nav className="me-auto">
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>About</Nav.Link>
                            <NavDropdown title="New Products" id="basic-nav-dropdown">
                                <NavDropdown.Item>Boys</NavDropdown.Item>
                                <NavDropdown.Item>Girls</NavDropdown.Item>
                            </NavDropdown>
                            <div style={{marginTop: "10px", fontSize: "20px", display: "flex", position: "relative"}}>
                                <Icons.Bell />
                                <h6 style={{position: "absolute", top: "-12px", right: "-25px"}}><Badge bg='secondary'>10</Badge></h6>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Carousel>
                <Carousel.Item interval={2000}>
                    <Image height={500} width={"100%"} src='https://graphicsfamily.com/wp-content/uploads/edd/2022/06/Free-E-commerce-Product-Banner-Design-with-Green-Colors-scaled.jpg'/>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <Image height={500} width={"100%"} src='https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg'/>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <Image height={500} width={"100%"} src='https://static.vecteezy.com/system/resources/previews/004/707/493/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg'/>
                </Carousel.Item>
            </Carousel>

            <div className='d-flex justify-content-center mt-5'>
                <Spinner className='' animation='border' />
                <Spinner className='' animation='grow' />
                <Spinner className='' animation='grow' variant='success'/>
                <Spinner className='' animation='border' variant='danger'/>
            </div>

            <h2 style={{ marginTop: "50px", fontWeight: "600" }} className='text-center'>Featured Products</h2>
            
            <div className='d-flex flex-wrap gap-3 justify-content-around mt-5'>
                <Card className='p-2 border border-secondary' style={{width: "18rem"}}>
                    <Card.Img style={{objectFit: "fill", aspectRatio: 1/1}} variant='top' src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'/>
                    <Card.Body className='text-center'>
                        <Card.Title>Sample Title 1</Card.Title>
                        <Card.Text>This is sample description for this product.</Card.Text>
                        <Button variant='success w-100' ><Icons.Link/> View Product</Button>
                    </Card.Body>
                </Card>
                <Card className='p-2 border border-secondary' style={{width: "18rem"}}>
                    <Card.Img style={{objectFit: "fill", aspectRatio: 1/1}} variant='top' src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'/>
                    <Card.Body className='text-center'>
                        <Card.Title>Sample Title 2</Card.Title>
                        <Card.Text>This is sample description for this product.</Card.Text>
                        <Button variant='success w-100' ><Icons.Link/> View Product</Button>
                    </Card.Body>
                </Card>
                <Card className='p-2 border border-secondary' style={{width: "18rem"}}>
                    <Card.Img style={{objectFit: "fill", aspectRatio: 1/1}} variant='top' src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'/>
                    <Card.Body className='text-center'>
                        <Card.Title>Sample Title 3</Card.Title>
                        <Card.Text>This is sample description for this product.</Card.Text>
                        <Button variant='success w-100' ><Icons.Link/> View Product</Button>
                    </Card.Body>
                </Card>
                <Card className='p-2 border border-secondary' style={{width: "18rem"}}>
                    <Card.Img style={{objectFit: "fill", aspectRatio: 1/1}} variant='top' src='https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'/>
                    <Card.Body className='text-center'>
                        <Card.Title>Sample Title 4</Card.Title>
                        <Card.Text>This is sample description for this product.</Card.Text>
                        <Button variant='success w-100' ><Icons.Link/> View Product</Button>
                    </Card.Body>
                </Card>
            </div>

            <Pagination className='d-flex justify-content-center mt-5'>
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item>4</Pagination.Item>
            </Pagination>

            <h3 className='text-center' style={{ marginTop: "50px", fontWeight: "600", marginBottom: "30px" }} >Contact Us</h3>

            <Container>
                <Row className='mx-auto'>
                    <Col xs={12} md={6}>
                        <p>Location: Kozhikode, Kerala</p>
                        <p>Phone: +91 9876543210</p>
                        <p>Email: something@gmail.com</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Eg: John" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Email ID</Form.Label>
                                <Form.Control type="email" placeholder='Eg: something@gmail.com'/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder='Eg: something@gmail.com'/>
                            </Form.Group>
                            <Button variant='success'>Send Message</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Bootstrap;
