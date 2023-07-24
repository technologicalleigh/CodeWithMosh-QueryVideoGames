import Alert from "./components/Alerts";
import Button from "./components/Buttons";
// import ListGroup from "./components/ListGroup";

function App() {
  return (
    <>
      <Button text="test"></Button>
      <div>
        <Alert>
          {" "}
          <h1>Hello World</h1>
        </Alert>
        ;
      </div>
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
