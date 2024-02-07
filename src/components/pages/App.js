import { useState } from "react";
import { Form } from "../organisms/form";
import { Header } from "../organisms/header";
import { Stats } from "../organisms/stats";

function App() {
  const [data, setDataMovent] = useState(JSON.parse(localStorage.getItem('movementData')) || [])

  return (
    <div className="App">
      <Header data={data}/>
      <Form setDataMovent={setDataMovent}/>
      <Stats data={data}/>
    </div>
  );
}

export default App;
