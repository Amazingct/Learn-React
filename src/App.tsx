import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";

import { useState }  from "react";
import { TiAdjustBrightness } from "react-icons/ti";
import 'bootstrap/dist/css/bootstrap.min.css';


// // -----------
// function handleOnSelectItem(item:string) {console.log("You clicked", item)}
// let items = ["AI Man", "What is Velocity", "Femilarity", "RAG System", "What is an Agent?"]

// function App() {
  
//   return <div>
//     < ListGroup title="Chat History" items={items} onSelectItem={handleOnSelectItem} />
//     <TiAdjustBrightness></TiAdjustBrightness>
//     </div>;
// }
// // ---------




// function App() {

//   const [alertVisible, setAlertVisiblility] = useState(false);
//   return (
//     <div>
//       {alertVisible && <Alert onClose={() => setAlertVisiblility(false)}> My Alert </Alert>}
//       <Button color="danger" onClick={() => setAlertVisiblility(!alertVisible ) }> 
//       My Button
//       </Button>
      
//     </div>
//   );
// }




// function App() {
  
//   return <div>
//     <Alert>
    
//     Hello  <ListGroup title="Select Action" items={items} onSelectItem={handleOnSelectItem} />
       
//     </Alert>
//     </div>;
// } 



function App(){
  return (
    <div>
      <Like/>
    </div>
  )
}


export default App; 