import Alert from "./components/Alerts";
import Button from "./components/Buttons";
import { useState } from "react";
import ListGroup from "./components/ListGroup/ListGroup";
import { HeartButton } from "./components/HeartButton";
import { BsFillCalendarFill } from "react-icons/bs";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Player from "./components/Player";
import produce from 'immer';
import ExpandableTxt from "./components/ExpandableTxt";

/* 
Glossary:

Separation of concers - divide a program into distinct sections where each section handles a specific funtionality, rather than having
everything in one place.

Pure function - given the same input, always returns the same result. Do this by keeping changes out of the render phase.
*/

/* 
Popular UI Libraries
1. Boostrap
2. Material UI - open source React component libriary that implements Google's UI
3. Tailwind CSS - utility first CSS library, a bunch of really small utility components like list-none (setting list element's prop to none or p-0)
4. Daisy UI
5. Chakra UI
*/

/*
Tips and tricks:

1. If adding onto an array, use [...arr, 'newItem'] instead of changing anything in the array
2. Updating Obj.
  Ex. below

  const [bugs, setBugs] = useState([
    {id: 1, title: 'Bug 1', fixed: false },
    {id: 2, title: 'Bug 2', fixed: false}
  ]);

  const handleClick = () => {
    setBugs(bugs.map(bug => bug.id === 1 ? {... bug, fixed: true} : bug))
  }

  3. Immer library to update to simplify updating objects => https://immerjs.github.io/immer/ 
  npm i immer 
  import produce from 'immer';

  Ex. below
const [bugs, setBugs] = useState([
    {id: 1, title: 'Bug 1', fixed: false },
    {id: 2, title: 'Bug 2', fixed: false}
  ]);

  const handleClick = () => {
    //setBugs(bugs.map(bug => bug.id === 1 ? {... bug, fixed: true} : bug))
    
    setBugs(produce(draft => {
      const bug = draft.find(bug => bug.id === 1);
      if (bug) bug.fixed = true;
    }))

    //draft is proxy ibj. that records the changes that will be applied to the bugs array... so similar to draft being a copy of the bugs array so that we're free to mutate 
  };

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

  //Sharing state between components
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  //Exercise => click a button to rename player
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John"
    }
  });
  const handleNameClick = () =>{
    setGame({...game, player: {...game.player, name:'Bob'}})
  }
  //Exercise => add a topping to a pizza
  const [pizza, setPizza] = useState ({
    name: 'Spice Pepperoni',
    toppings: ['Mushroom']
  });

  const addTopping = () => {
    setPizza({...pizza, toppings:[...pizza.toppings, "Extra Cheese"]});
  }

  //Exercise => add product

  // const bug = draft.find(bug => bug.id === 1);
  // if (bug) bug.fixed = true;

  const [cart2, setCart2] = useState({
    discount: .1,
    items: [
      {id: 1, title: 'Product 1', quantity: 1},
      {id: 2, title: 'Product 2', quantity: 1}
    ]
  });

 const changeQuantity = () => {
    setCart2({...cart2, items: cart2.items.map(item=> item.id === 1 ? {... item, quantity: item.quantity + 1} : item)})
 }
 

  return (
    <>
      <div>
        {alertVisibility && (
          <Alert onClose={() => setAlertVisibility(false)}>
            {" "}
            <h1>Hello World</h1>
          </Alert>
        )}
        ;
      </div>
      <Button text="test" onClick={() => setAlertVisibility(true)}></Button>

      <div>
        <ListGroup items={items} onSelectItem={handleSelectItem} />
      </div>
      <div>
        <p>Icon Ex.</p>
        <BsFillCalendarFill color="blue" size="40" />
      </div>
      <div>
        <HeartButton onClick={() => console.log("clicked")} />
      </div>
      <div>
        <Navbar cartItemsCount={cartItems.length} />
        <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      </div>
      <div>
        <Player name={game.player.name} changeName={handleNameClick}/>
      </div>
      <div>
        <h4>{pizza.name}</h4>
        <p>Toppings: {pizza.toppings}</p>
        <button onClick={addTopping}>Add Extra Cheese!</button>
      </div>

      <ExpandableTxt>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium dicta quas soluta. Iusto, amet illo ipsam illum, cum vitae distinctio mollitia sequi inventore eligendi, natus dolor temporibus eaque veritatis necessitatibus dolorem quis nobis officiis id quidem. Ea officiis hic ullam, laboriosam eos consectetur? Odit sunt laborum ab quis nisi, impedit, eius fugiat illo provident eligendi voluptatem voluptatibus labore voluptates tempora debitis voluptatum modi omnis molestias. Corrupti nisi ipsum, maiores quod quam suscipit ducimus facilis ab illum atque veritatis. Necessitatibus non ab quisquam deserunt iste repudiandae voluptatibus aperiam voluptate nulla tempora, maiores harum velit suscipit, earum totam impedit sequi dolores officia!
      </ExpandableTxt>
     
    </>
  );
}

export default App;
