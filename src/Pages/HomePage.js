import './HomePage.css'
import logo from '../logo.svg'

const HomePage = () => {
    return (
        <div className="Homepage">
            <img src={logo} className="Homepage__logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="Homepage__link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </div>
    )
}

export default HomePage
