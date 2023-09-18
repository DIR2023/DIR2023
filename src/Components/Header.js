import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">DIR2023</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#call">Call</a></li>

            <li><a className="smoothscroll" href="#resume">Schedule</a></li>

            <li><a className="smoothscroll" href="#resume   ">Sponsors</a></li>

            <li><a className="smoothscroll" href="#team">Team</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>

            {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
            {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <img src={"images/dir_logo.png"} />
            <h2 className="responsive-headline">{name}</h2>
            <h4 className="title"> <span>{occupation}</span>.</h4>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
