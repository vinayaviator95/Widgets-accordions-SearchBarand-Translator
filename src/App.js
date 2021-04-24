import React,{useState} from "react";
import Search from "./components/Search"
import Accordion from "./components/Accordion"
import Dropdown from "./components/Dropdown"
import Translate from "./components/Translate"
import Route from "./components/Route"
import Headers from "./components/Headers"
const items=[
  {
      title:"what is React?",
      content:"React is a front end javascript framework",
  },
  {
      title:"Why use React?",
      content:"React is favorite Js library among engineers",
  },
  {
      title:"How do you use React?",
      content:"you use React by using component",
  }
];

const options=[
  {
    label:"The Color is Red",
     value:"Red" 

  },
  {
    label:"The color Green",
    value:"green"
  },
  {
    label:"A shade of Blue",
    value:"blue"
  },
]

// const showAccordion=()=>{
//   if (window.location.pathname==="/"){
//     return<Accordion items={items}/>
//   }
// };

// const showList=()=>{
//   if(window.location.pathname==="/list"){
//     return(<Search />)
//   }
// };

// const showDropdown=()=>{
//   if(window.location.pathname==="./dropdown"){
//     return(<Dropdown  />)
//   }
// };


// const showTranslate=()=>{
//   if(window.location.pathname==="./translate"){
//     return <Translate/>
//   }
// };


function App() {
  const[selected,setSelected]=useState(options[0]);
  return (
    <div >
    <Headers></Headers>
   <Route path="/">
   <Accordion items={items}/>
   </Route>
   <Route path="/list">
     <Search/>
   </Route>
   <Route path="/dropdown">
    <Dropdown label="Select a Color"
      options={options}
      selected={selected}
      onSelectedChange={setSelected}

    />
   </Route>
   <Route path="/translate">
     <Translate/>
   </Route>

    </div>
  );
}

export default App;
