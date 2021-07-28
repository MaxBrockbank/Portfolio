import React from 'react';
import MB from './../svg/MB';
import MB2 from './../svg/MB2';
import Projects from './../components/Projects';
import About from './../components/About';
import Form from './../components/Form';
import Info from './../components/Info'


function Home () {
  return(
      <div>
        <div className="hero">
            <MB />
        </div>
        <div>
          <About className="about" />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Form />
        </div>
        <div>
          <Info />
        </div>
      </div>
      
  );
}

export default Home;
