import "./App.css";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";

function App() {
    return (
        <div id="container" className="py-2">
            <div className="container">
                <Header></Header>
                <Container></Container>
            </div>
        </div>
    );
}

export default App;
