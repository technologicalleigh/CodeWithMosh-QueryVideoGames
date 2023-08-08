import Alert from "./components/Alerts";
import Button from "./components/Buttons";
import {useState} from "react";
import ListGroup from "./components/ListGroup/ListGroup";
import { HeartButton } from "./components/HeartButton";
import {BsFillCalendarFill} from 'react-icons/bs';


/* 
Glossary:

Separation of concers - divide a program into distinct sections where each section handles a specific funtionality, rather than having
everything in one place.
*/

/* 
Popular UI Libraries
1. Boostrap
2. Material UI - open source React component libriary that implements Google's UI
3. Tailwind CSS - utility first CSS library, a bunch of really small utility components like list-none (setting list element's prop to none or p-0)
4. Daisy UI
5. Chakra UI
*/

function App() {
  //shows an alert when the button is clicked and then dismisses the alert if the x is selected
  // to do this, requires a state variable (useState)
  const [alertVisibility, setAlertVisibility] = useState(false);
  //want to render only when state is true

  let items = ["New York", "San Fran", "Tokyo", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
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

      <div>
      <ListGroup
        items={items}
        onSelectItem={handleSelectItem}
      />
    </div>
    <div>
      <p>Icon Ex.</p>
      <BsFillCalendarFill color="blue" size="40"/>
    </div>
    <div>
      <HeartButton/>
    </div>
    </>
  );
}

export default App;
