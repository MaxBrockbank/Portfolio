import React from 'react';
import ProjectCard from './Project-Card';
import {v4 as uuid} from 'uuid';
import {Container, Row, Col} from 'react-bootstrap';
class Projects extends React.Component {

  constructor(){
    super()
    this.state = {
      projects : [
        "UMBRELLA AVENUE",
        "DATA MOSH",
        "LICENSE DASHBOARD",
      ]
    }
  }

  createItemList = () => {
    let rows = {};
    let counter = 1;
    this.state.projects.forEach((project, index) => {
      rows[counter] = rows[counter] ? [...rows[counter]] : [];
      if(index % 2 === 0 && index !== 0) {
        counter++
        rows[counter] = rows[counter] ? [...rows[counter]] : []
        rows[counter].push(project)
        return;
      } else {
        rows[counter].push(project)
      }
    })
    return rows
  }
  render(){
    let rows = this.createItemList();
    return(
      <section className='project-section'>
        <Container>
        <h1 className="heading">PROJECTS</h1>
          {Object.keys(rows).map(row => {
            return (
              <Row md={2} sm={1}>
                {
                  rows[row].map(item => {
                    console.log(item)
                    if(rows[row].length % 2 === 0){
                      return(
                        <Col className='project-column'>
                          <ProjectCard
                            name={item}
                            key={uuid()}
                          />
                        </Col>
                      )
                    } else {
                      return(
                        <>
                          <Col className='project-column'>
                            <ProjectCard
                            name={item}
                            key={uuid()}
                            />
                          </Col>
                          <Col></Col>
                        </>
                      )
                    }
                  })
                }
              </Row>
            )
          })
          }
        </Container>
      </section>
    )
  }
}

export default Projects