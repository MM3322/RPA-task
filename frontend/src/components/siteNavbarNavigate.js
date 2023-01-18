import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
  } from "react-router-dom";
import CreateNewReport from './CreateNewReport';
import SeeAllReports from './SeeAllReports';
import EditReport from './EditReport';
function NavScrollExample() {
  return (
    <Router>
        <div>
            <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link as={Link} to={"/CreateNewReport"}>Add new report</Nav.Link>
                    <Nav.Link as={Link} to={"/SeeAllReports"}>See all reports</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
        <Routes>
          <Route exact path="/SeeAllReports" element={<SeeAllReports/>}/>
          <Route exact path="/CreateNewReport" element={<CreateNewReport/>}/>
          <Route exact path="/EditReport/:id" element={<EditReport/>}/>
        </Routes>
    </Router>
  );
}

export default NavScrollExample;