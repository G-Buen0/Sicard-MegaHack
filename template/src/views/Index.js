/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import App from "../App";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import FormRegister from "components/Forms/FormProductRegister";
import CardTemplate from "components/Card/Card";
//import FileList from "components/FileList/FileList";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class Register extends React.Component {
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <Container className="pt-lg-7">
            <h2 className="pageTitle">Cadastro de produtos Olist</h2>
              <Row className="justify-content-center">
                <Col lg="5"><FormRegister /></Col>
              
                <Col lg="7" className="shadow border-0"><CardTemplate /></Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Register;