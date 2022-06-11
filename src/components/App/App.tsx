import s from './App.module.sass'
import Header from '../Header/Header'
import HeaderContainer from '../HeaderContainer/HeaderContainer'

const App = () => {
    return (
        <div className={ s.App }>
            <Header/>
            <HeaderContainer/>
        </div>
    )
}

export default App
