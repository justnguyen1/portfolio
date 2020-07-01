import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
    }

    return (
      <section id="resume">

      <div className="row work">

         <div className="three columns header-col">
            <img className="alexion" src="images/alexion.png" alt="Alexion Pharmaceuticals" />
            <img className="sdsc" src="images/sdsc.jpg" alt="San Diego Supercomputer Center" />
         </div>

         <div className="nine columns main-col">
          <h1><span>Work Experience</span></h1>
          <br></br>
          {work}
        </div>
    </div>



      
   </section>
    );
  }
}

export default Resume;
