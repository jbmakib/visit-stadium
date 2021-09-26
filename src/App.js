import "./App.css";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";

function App() {
    return (
        <div id="container" className="pt-2">
            <div className="container">
                <Header></Header>
                <Container></Container>
            </div>
        </div>
    );
}

export default App;
