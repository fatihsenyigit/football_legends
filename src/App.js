import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import LegendContainer from "./components/legends/LegendContainer";


function App() {
  return (
    <Container className="text-center mt-5">
      <Header></Header>
      <LegendContainer></LegendContainer>
    </Container>
  );
}

export default App;
