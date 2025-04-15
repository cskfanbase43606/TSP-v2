import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Below are my contact details:</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:rahul.rana43606@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:rahul.rana43606@gmail.com">rahul.rana43606@gmail.com</a>
        </div>
        <div>
        <a href="tel:+917632941223"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+917632941223">(+91) 7632941223</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}
