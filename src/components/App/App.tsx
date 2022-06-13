import s from './App.module.sass'
import Header from '../Header/Header'
import HeaderContainer from '../HeaderContainer/HeaderContainer'
import Tutorial from '../Tutorial/Tutorial'
import FooterContainer from '../FooterContainer/FooterContainer'

const App = () => {
    return (
        <div className={ s.App }>
            <Header/>
            <HeaderContainer/>
            <Tutorial/>
            <FooterContainer/>
        </div>
    )
}

export default App
