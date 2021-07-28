import React,{useRef, useEffect, useState, useCallback} from 'react';
import {Container} from 'react-bootstrap';
import mojs from '@mojs/core';
import * as FaIcons from 'react-icons/fa';
import PropTypes from 'prop-types';

function Submitted (props){

  const thumb = useRef();
  const animDom = useRef();
  useEffect(()=>{

    if(thumb.current) return;

    thumb.current = new mojs.Burst({
      parent: animDom.current,
      count: 15,
      rotate: {0:90},
      radius: {0:80},
      angle: { 0:140, easing:mojs.easing.bezier(0.1, 1, 0.3, 1) },
      children: {
        fill: '#ffffff',
        radius: 20,
        opacity: 0.6,
        duration: 1500,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
      }
    })
    thumb.current.play();
  
    console.log(animDom);

  })

  return(
    <>
      <Container>
        <div id="submit-anim" ref={animDom}>
          <FaIcons.FaThumbsUp id="thumb" />
        </div>
        <h3 id="submit-tagline">Thank you {props.name} for your message!</h3>
      </Container>
    </>
  )
}

Submitted.propTypes = {
  name: PropTypes.string
};

export default Submitted;