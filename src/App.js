import HeaderApp from "./components/HeaderApp";
import Container from '@mui/material/Container';
import FormuEntregaApp from "./pages/FormEntregaApp";

function App() {
  return (
    <div>
      <HeaderApp />
      <Container component="main">
        <FormuEntregaApp />
      </Container>
    </div>
  );
}

export default App;
