import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState }  from "react";

// -----------
function handleOnSelectItem(item:string) {console.log("You clicked", item)}
let items = ["AI Man", "What is Velocity", "Femilarity", "RAG System", "What is an Agent?"]

function App() {
  
  return <div>
    < ListGroup title="Chat History" items={items} onSelectItem={handleOnSelectItem} />
    </div>;
}
// ---------




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


export default App; 