const initialState={
    CampaignArray:[],

}






// import { useState } from "react";
// import "./styles.css";

// export default function App() {
//   const [data, setData] = useState({
//     yash: "",
//     password: ""
//   });

//   const newData = {
//     name: "yash",
//     class: "12th",
//     age: 21
//   };
//   const newnewData = { ...newData, age: 31 };
//   const inputHandler = (event) => {
//     // console.log(event.target.value);
//     const { name, value } = event.target;
//     setData((prev) => ({ ...prev, [name]: value }));
//   };
//   console.log(newData);
//   console.log(newnewData);
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h1>name</h1>
//       <input name="yash" onChange={inputHandler} />
//       <h1>password</h1>
//       <input name="password" onChange={inputHandler} />
//     </div>
//   );
// }
















// import { useState } from "react";
// import "./styles.css";

// const arr = ["yash", "shivang", "kkol", "bhar"];

// export default function App() {
//   const [st, setSt] = useState();
//   const clickHandler = (id) => {
//     setSt(id);
//   };
//   console.log("st is", st);
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       {arr.map((ele, id) => {
//         return (
//           <div
//             style={{ borderColor: st === id ? "blue" : "" }}
//             className="element"
//             key={id}
//             onClick={() => clickHandler(id)}
//           >
//             {ele}
//           </div>
//         );
//       })}
//     </div>
//   );
// }




// .App {
//     font-family: sans-serif;
//     text-align: center;
//   }
  
//   .element {
//     border: 1px solid black;
//     padding: 1rem;
//     margin: 1rem;
//     cursor: pointer;
//   }
  
//   .element:hover {
//     border-color: chartreuse;
//   }
  






// <div class="dropdown">
//   <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//    All Status
//   </button>
//   <ul class="dropdown-menu">
//     <li><a class="dropdown-item" href="#">Live Now</a></li>
//     <li><a class="dropdown-item" href="#">Paused</a></li>
//     <li><a class="dropdown-item" href="#">Expired</a></li>
    
//   </ul>
// </div>
// <div class="dropdown">
//   <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//   Last 30 days
//   </button>
//   {/* <ul class="dropdown-menu">
//     <li><a class="dropdown-item" href="#">Live Now</a></li>
//     <li><a class="dropdown-item" href="#">Paused</a></li>
//     <li><a class="dropdown-item" href="#">Expired</a></li>
    
//   </ul> */}
// </div>







