import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
         var contactMessage = this.props.data.contactmessage;
         var categories = this.props.data.categories.map(function (work) {
            return <li>
               <span className="categoryTitle">{work.name}</span>: {work.description}

            </li>

         })

      }

      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="Vikram Goyal Profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>Present Your Work</h2>

                  <p>{bio}</p>
                  <p className="cat"><ol>{categories}</ol></p>
                  <p>Please submit your contributions <a href="https://tudelft.fra1.qualtrics.com/jfe/form/SV_bpVNFS6uxPIijki">here</a></p>
                  <p>{contactMessage}</p>

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
               </div>
            </div>

         </section>
      );
   }
}

export default About;
