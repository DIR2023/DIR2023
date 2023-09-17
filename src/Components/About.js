import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var about = this.props.data.about;
         console.log("about",about)
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
         <div>
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="Delft profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>About</h2>
                  <p>{about}</p>
                  <a href="https://www.informatiewetenschap.org/dir-history.html">Prior Editions</a>




               </div>
               </div>

               </section>

               <section id="call">
               <div className="row">
               <div className="three columns">
               </div>
               <div className="nine columns main-col">

               <h2>Present Your Work</h2>
                  <p>{bio}</p>

                  <p className="cat"><ol>{categories}</ol></p>
                  <p>Please submit your contributions <a href="https://tudelft.fra1.qualtrics.com/jfe/form/SV_bpVNFS6uxPIijki">here</a></p>
                  <p>{contactMessage}</p>
                     </div>
            </div>
               </section>

            </div>


      );
   }
}

export default About;
