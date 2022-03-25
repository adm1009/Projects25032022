import React from 'react';

import Review from './Review';
class App extends React.Component<any,any> {
  render(){
  return (
    <main style={{textAlign:"center"}}>
     <h1 style={{textDecoration:"underline"}}>Our Reviews</h1>
     <Review />
    </main>
  );
}
}
export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Review from './Review';
// function App() {
//   return (
//     <main style={{textAlign:"center"}}>
//      <h1 style={{textDecoration:"underline"}}>Our Reviews</h1>
//      <Review />
//     </main>
//   );
// }

// export default App;
