import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import {useState} from 'react';
import {send, init} from 'emailjs-com';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import mojs from '@mojs/core';
import Submitted from '../components/Submitted';

function Form() {

  const [toSend, setToSend] = useState({
    sender:'',
    reply_to:'',
    message:'',
  })
  const [isSent, setIsSent] = useState(false);

  const [snack, setSnack] = useState(false);

  const validate = () => {
    
  }

  const onSubmit = (e) => {
    e.preventDefault();
    init(process.env.REACT_APP_USER_ID);
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      toSend
    )
      .then((response) => {
        setIsSent(true);
        setSnack(true);
      })
      .catch((err) => {
        setSnack(true);
      })
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnack(false);
  };

  const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value});
  } 

  if(isSent === false) {
    return(
      <>
        <Container className="form-style">
          <h1 className="heading">CONTACT ME</h1>
          <form id="contactForm" onSubmit={onSubmit}>
            <Row>
              <Col>
                <input
                  name="sender"
                  type="text" 
                  placeholder="Name" 
                  className="formInputs"
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col>
                <input
                  name="reply_to"
                  type="email" 
                  placeholder="Email Address" 
                  className="formInputs"
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <textarea 
              name="message" 
              id="form-message" 
              cols="60" rows="10" 
              className="formInputs" 
              placeholder="Write me a message! Please be specific with any job information."
              onChange={handleChange}
              required
            />
            <input
              id="form-submit"
              type="submit" 
              value="SEND IT!" 
            />
          </form>
          <Snackbar open={snack} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical:'bottom', horizontal:'right'}}>
            <Alert open={snack} onClose={handleClose} severity="error">Something went wrong. Please try again later or contact via email.</Alert>
          </Snackbar> 
        </Container>
      </>
    )
  }
  else {
    return(
      <>
      <Container>
        <Snackbar open={snack} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical:'bottom', horizontal:'right'}}>
          <Alert open={snack} onClose={handleClose} severity="success">Form Submitted</Alert>
        </Snackbar>  
        <Submitted name={toSend.sender}/>
        </Container>
      </>
    )
  }
}

export default Form;