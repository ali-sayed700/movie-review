import { Logo } from "@components/common/index";
import FooterImg from "@assets/images/footer-bg.webp";
import { footerLinks } from "@data/index";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
const { footerLink } = styles;

const Footer = () => {
  return (
    <footer
      className="w-100 py-5 bg-dark "
      style={{
        backgroundImage: `
            linear-gradient(rgba(0,0,0,0.075), rgba(0,0,0,0.075))
        , url(${FooterImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Container className="d-flex flex-column align-items-center gap-5 py-5 mx-auto">
        <Logo className="text-light" />
        <Row className="w-75 row-gap-3">
          {footerLinks.map((title, index) => {
            return (
              <Col sm={4} key={index} className={`text-center `}>
                <Link to="/" className={`${footerLink}`}>
                  {title}
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
