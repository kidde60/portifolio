// import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
// import './Navbar.css';

// export default class Navbar extends Component {
//   state = { clicked: false };

//   handleClick = () => {
//     this.setState({ clicked: !this.state.clicked });
//   }

//   render() {
//     return (
//       <div>
//         <nav id="navbar">
//           <NavLink to="../" className="logo">KGW</NavLink>
//           <div id="nav-list" className={this.state.clicked ? '#nav-list active' : '#nav-list'}>

//             <NavLink to="../">Home</NavLink>
//             <NavLink to="../About">About</NavLink>

//             <NavLink to="../Contact">Contact</NavLink>
//           </div>
//         </nav>
//         <div id="mobile" onClick={this.handleClick}>
//           <i id="bars" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
//         </div>
//       </div>
//     );
//   }
// }
