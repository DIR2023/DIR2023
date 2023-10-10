import React, { Component } from 'react';

class Resume extends Component {
   render() {

      if (this.props.data) {
         console.log("address",this.props)
         var street = this.props.address.address.street;
         var name = this.props.address.name;
         var city = this.props.address.address.city;
         var state = this.props.address.address.state;
         var zip = this.props.address.address.zip;
         var phone = this.props.address.phone;
         var email = this.props.address.email;
         var skillmessage = this.props.data.skillmessage;
         var sponsors = this.props.data.sponsors.map(function (sponsor) {
            return <div key={sponsor.name} className="columns portfolio-item">
               <div className="item-wrap">
                  {/* <img alt={sponsor.name} src={'images/portfolio/' + sponsor.image} /> */}

               </div>
            </div>

         })
         var schedule = this.props.data.work.map(function (work) {
            return <div>
            
            <br />
            <div class="panel panel-primary">
      <div class="panel-heading">{work.title}</div>
      <div class="panel-body">{work.description}</div>
    </div>
   
          </div>
         })
         // var skills = this.props.data.students.map(function(student){
         //   // var className = 'bar-expand '+skills.name.toLowerCase();
         //   return <li key={student.name}><em>{student.name}</em><div className="information">Topic: {student.topic}</div></li>
         // })
         // var publication = this.props.data.publications.map(function(publication){
         //   // var className = 'bar-expand '+skills.name.toLowerCase();
         //   return <li className="skills publications" key={publication.publication}><em>{publication.publication}</em><div className="information"><b>Authors:</b> {publication.authors} <span><a href={publication.link}> Paper Link</a></span></div>
         //   <div className="conference">{publication.conference}</div>
         //   </li>
         // })
         var team = this.props.data.team.map(function (member) {
            // var className = 'bar-expand '+skills.name.toLowerCase();
            return <div><span>{member.title}</span> <br /></div>
         })
      }

      return (
         <div>
      <section id="schedule">
      <div className="row schedule">

         <div className="three columns header-col">
            <h1><span>Tentative Schedule</span></h1>
         </div>

         <div className="nine columns main-col">
          {schedule}
        </div>
    </div>
    </section>
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Sponsors</span></h1>
         </div>

         <div className="twelve columns collapsed">
<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                 {sponsors}
               </div>
            </div>
         </div>






 
         <section id="team">
         <div className="row team">
         <div className="three columns header-col">
            <h1><span>Team</span></h1>
         </div>
         <div className="nine columns main-col">
               <div className="twelve columns">
                 {team}
            </div>
            </div>

         </div>


         </section>
         <section id="contact">

<div className="row">
            <div className="columns contact-details">
               <h2>Contact Details</h2>
               <p className="address">
                  <span>{name}</span><br />
                  <span>{street}<br />
                     {city} {state}, {zip}
                  </span><br />
                  <span>{phone}</span><br />
                  <span>{email}</span>
               </p>
            </div>
            {/* <div className="columns download">
         <p>
            <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
         </p>
      </div> */}
         </div>
         </section>
      </div >

    );
   }
}

export default Resume;
