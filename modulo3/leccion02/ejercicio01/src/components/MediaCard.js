import React from 'react';
import logo from '../logo.svg';

//componente funcional
const MediaCard = (props) => {
  return (
    <>
      <header className="App-header">
        <img src={props.photoUrl} className="App-logo" alt="logo" />
        <div>
          <h3>{props.title}</h3>
          <p>{props.subTitle}</p>
        </div>
      </header>
      <main>
        <p className="text">{props.text}</p>
      </main>
      <footer className="footer">
        <p>Leer más...</p>
        <div className="second-footer">
          <p>{props.likes}</p>
          <i
            className={`fa heart ${props.liked ? 'fa-heart' : 'fa-heart-o'}`}
            aria-hidden="true"
          ></i>
        </div>
      </footer>
    </>
  );
};

//clase
// class MediaCard extends React.Component {
//   render() {
//     return (
//       <>
//         <header className="App-header">
//           <img src={this.props.photoUrl} className="App-logo" alt="logo" />
//           <div>
//             <h3>{this.props.title}</h3>
//             <p>{this.props.subTitle}</p>
//           </div>
//         </header>
//         <main>
//           <p className="text">{this.props.text}</p>
//         </main>
//         <footer className="footer">
//           <p>Leer más...</p>
//           <div className="second-footer">
//             <p>{this.props.likes}</p>
//             <i
//               className={`fa fa-heart ${
//                 this.props.liked ? 'heart' : 'heart-o'
//               }`}
//               aria-hidden="true"
//             ></i>
//           </div>
//         </footer>
//       </>
//     );
//   }
// }

export default MediaCard;
