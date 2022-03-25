import React,{ useState } from "react";
import data from "./data";
import Questions from "./Questions";

class App extends React.Component<any,any> {
  constructor(props:any){
    super(props);
    this.state ={
      ques:data
    }
  }

  render(){
  return (
    <main>
      <h1>General Questions and answers</h1>
      <h3>
        {this.state.ques.map((single: any) => {
          return <><Questions key={single.id} {...single} /> <hr /></>;
        })}
      </h3>
    </main>
  );
}
}
export default App;
// import { useState } from "react";
// import data from "./data";
// import Questions from "./Questions";

// function App() {
//   const [ques, setQues] = useState(data);
//   return (
//     <main>
//       <h1>General Questions and answers</h1>
//       <h3>
//         {ques.map((single: any) => {
//           return <><Questions key={single.id} {...single} /> <hr /></>;
//         })}
//       </h3>
//     </main>
//   );
// }

// export default App;
