import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './header.css';

export function Header() {
    return (
        <Navbar bg="light" expand="lg" collapseOnSelect={true}>

            <Container>
                <Navbar.Brand href="#home" >ФАВОР</Navbar.Brand >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" role={undefined}>

                    <Nav className="me-auto">
                        <Nav.Link href="#home">О нас</Nav.Link>

                        <NavDropdown title="Услуги" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#accident">Юридические услуги при ДТП</NavDropdown.Item>
                            <NavDropdown.Item href="#administrative_disputes" onClick={(e) => console.log(
                                'another'
                            )}>
                                Административно-правовые споры
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#organizations_support">Cопровождение организаций</NavDropdown.Item>
                            <NavDropdown.Item href="#land_law">Земельные споры</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Бесплатная консультация
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contact-form">Контакты</Nav.Link>
                        <Nav className="ms-auto" id="navbar">
                            <Nav.Link id={'cursor-none'}>г.Москва: ул.Маршала Прошлякова 30</Nav.Link>
                            <div className={'number'}>+7 777 77 777 77</div>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

//как разместить <Navbar.Brand className="ml-auto" >+7 777 77 777 89</Navbar.Brand > справа ??