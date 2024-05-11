import Card, { CardBody } from "./components/Card";
import List from "./components/List";
function App() {
  const list = ["Goku", "Tanjiro", "Eren"];
  const handleSelect = (elemento: string) => {
    console.log(elemento);
  };
  return (
    <Card>
      <CardBody
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
      />
      <List data={list} onSelect={handleSelect} />
    </Card>
  );
}

export default App;
