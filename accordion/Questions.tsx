import React, { useState } from 'react'

class Questions extends React.Component<any,any> {
  constructor(props:any){
    super(props);
    this.state ={
          show:true
    }
  }
  showHandler = () =>{
       this.setState({show:!this.state.show})
    }
    render(){
  return (
    <main>
        <div>
        <h2 style={{display:"inline-block" }}>{this.props.title}</h2>
        <button onClick={this.showHandler} style={{display:"inline-block",marginLeft:"10px"}}>{this.state.show?"+":"-"}</button>
        </div>
        <h4>{!this.state.show && this.props.info}</h4>
    </main>
  )
}
}
export default Questions;
// import React, { useState } from 'react'

// const Questions = ({title,info}:any) => {
//     const[show,setShow]=useState(true);
//     const showHandler = () =>{
//        setShow(!show)
//     }
//   return (
//     <main>
//         <div>
//         <h2 style={{display:"inline-block" }}>{title}</h2>
//         <button onClick={showHandler} style={{display:"inline-block",marginLeft:"10px"}}>{show?"+":"-"}</button>
//         </div>
//         <h4>{!show && info}</h4>
//     </main>
//   )
// }

// export default Questions;