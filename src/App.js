import './App.css'
import Header from './Components/Header/Header'
import HomePage from './Pages/HomePage.js'

function App() {
    return (
        <>
            <div className="App">
                <header className="App__header">
                    <Header />
                </header>
                <main className="App__main">
                    <HomePage />
                </main>
                <footer className="App__footer">
                    Jien & Nayte & un peu Walid @ 2022
                </footer>
            </div>
            <div id="toto"></div>
        </>
    )
}

export default App
