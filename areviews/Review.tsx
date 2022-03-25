import React, { useState } from "react";
import People from "./data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

class Review extends React.Component<any,any> {
  constructor(props:any){
    super(props);
    this.state ={
      index:0
    }
  }
  
 
   leftHandler = () =>{
    if(this.state.index ===0){
      this.setState({index:3});
    }
    else{
    this.setState({index:this.state.index -1});
    }
  }
  rightHandler=()=>{
    if(this.state.index ===People.length - 1){
      this.setState({index:0})
    }
    else{
      this.setState({index:this.state.index +1});
    }
   
  }
  randomHandler = () =>{
    let randomno= Math.floor(Math.random() * People.length);
    if(randomno === this.state.index ){
      if(randomno !== People.length -1){
       randomno = this.state.index  + 1;
      }
      else{
        randomno = 0;
      }
    }
    return this.setState({index:randomno})
  }
  render(){
    let { image, name, job, text, id } = People[this.state.index];
  return (
    <main style={{ width: "500px" ,marginLeft:"380px"}}>
      <div>
        <img
          src={image}
          alt={name}
          style={{ height: "300px", width: "500px" }}
        />
      </div>
      <div style={{ textDecoration: "underline" }}>{name}</div>
      <div style={{ color: "cornflowerblue" }}>*{job}*</div>
      <div style={{ color: "grey" }}>"{text}"</div>
      <div>
        <button onClick={this.leftHandler}>
          <FaChevronLeft />
        </button>
        <button onClick={this.rightHandler}>
          <FaChevronRight />
        </button>
        <button onClick={this.randomHandler}>Random</button>
      </div>
    </main>
  );
};
}
export default Review;

// import React, { useState } from "react";
// import People from "./data";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// const Review = () => {
//   const [index, setIndex] = useState(0);
//   const { image, name, job, text, id } = People[index];
//   const leftHandler = () =>{
//     if(index===0){
//       setIndex(3);
//     }
//     else{
//     setIndex(index-1);
//     }
//   }
//   const rightHandler=()=>{
//     if(index===People.length - 1){
//       setIndex(0)
//     }
//     else{
//       setIndex(index+1);
//     }
   
//   }
//   const randomHandler = () =>{
//     let randomno= Math.floor(Math.random() * People.length);
//     if(randomno === index){
//       if(randomno !== People.length -1){
//        randomno = index + 1;
//       }
//       else{
//         randomno = 0;
//       }
//     }
//     return setIndex(randomno);
//   }
//   return (
//     <main style={{ width: "500px" ,marginLeft:"380px"}}>
//       <div>
//         <img
//           src={image}
//           alt={name}
//           style={{ height: "300px", width: "500px" }}
//         />
//       </div>
//       <div style={{ textDecoration: "underline" }}>{name}</div>
//       <div style={{ color: "cornflowerblue" }}>*{job}*</div>
//       <div style={{ color: "grey" }}>"{text}"</div>
//       <div>
//         <button onClick={leftHandler}>
//           <FaChevronLeft />
//         </button>
//         <button onClick={rightHandler}>
//           <FaChevronRight />
//         </button>
//         <button onClick={randomHandler}>Random</button>
//       </div>
//     </main>
//   );
// };

// export default Review;
