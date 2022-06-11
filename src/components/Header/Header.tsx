import * as React from 'react'
import s from './Header.module.sass'
import logo from '../../images/FoodDelivery_logo.svg'

const Header: React.FC = () => {
    const preventDefault = ( e: React.MouseEvent<HTMLAnchorElement, MouseEvent> ) => {
        e.preventDefault()
    }
    return (
        <header className={ s.header }>
            <div className={ s.logo_wrapper }>
                <img src={ logo } alt={ 'logo' } className={ s.logo }/>
            </div>
            <nav className={ s.nav }>
                <a
                    href="/"
                    className={ s.active + ' ' + s.link }
                    onClick={ preventDefault }
                >
                    Home
                </a>
                <a
                    href="/"
                    className={ s.link }
                    onClick={ preventDefault }
                >
                    Product
                </a>
                <a
                    href="/"
                    className={ s.link }
                    onClick={ preventDefault }
                >
                    Faq
                </a>
                <a
                    href="/"
                    className={ s.link }
                    onClick={ preventDefault }
                >
                    Contact
                </a>
            </nav>
        </header>
    )
}

export default Header