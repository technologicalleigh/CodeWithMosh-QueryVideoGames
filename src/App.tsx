import Alert from "./components/Alerts";
import Button from "./components/Buttons";
import {useState} from "react";
// import ListGroup from "./components/ListGroup";

function App() {
  //shows an alert when the button is clicked and then dismisses the alert if the x is selected
  // to do this, requires a state variable (useState)
  const [alertVisibility, setAlertVisibility] = useState(false);
  //want to render only when state is true
  return (
    <>
    <div>
        {alertVisibility && <Alert onClose={()=> setAlertVisibility(false)}>
          {" "}
          <h1>Hello World</h1>
        </Alert>}
        ;
      </div>
      <Button text="test" onClick={() => setAlertVisibility(true)}></Button>
    </>
  );
  // let items = ["New York", "San Fran", "Tokyo", "Paris"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );
}

export default App;
