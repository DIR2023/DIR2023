import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var about = this.props.data.about;
         console.log("about", about)
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
                     <p>Please submit your <b style={{ color: 'white', fontweight:700, fontSize:25 }}>contributions</b> by submitting the form <a style={{ color: 'white', fontSize:25, fontweight:700 }} href="https://tudelft.fra1.qualtrics.com/jfe/form/SV_bpVNFS6uxPIijki">here</a></p>
                     <p>{contactMessage}</p>
                     <h2>Important dates</h2>
                     <p>

                        Nominate your contribution by: <strong style={{ color: 'white', fontweight:700 }}>October 14, 2023 </strong><br />

                        Notification of contributions to spotlight during DIR 2023: <b style={{ color: 'white', fontweight:700 }}>October 30, 2023</b>  <br />

                     DIR 2023: <b style={{ color: 'white', fontweight:700 }}>November 27, 2023</b>
                  </p>
               </div>
         </div>
               </section >

            </div >


      );
   }
}

export default About;
