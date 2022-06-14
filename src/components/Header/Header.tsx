import * as React from 'react'
import s from './Header.module.sass'
import logo from '../../images/FoodDelivery_logo.svg'
import { useEffect, useState } from 'react'

const Header: React.FC = () => {
    const onLinkClick = ( e: React.MouseEvent<HTMLAnchorElement, MouseEvent> ) => {
        e.preventDefault()
    }
    const [isOpened, setIsOpened] = useState<boolean>(window.innerWidth > 460)
    useEffect(() => {
        const onResize = () => {
            setIsOpened(window.innerWidth > 460)
        }
        window.addEventListener('resize', onResize)
        const closeNav = () => {
            if ( window.innerWidth <= 460 && isOpened )
                setIsOpened(false)
        }
        document.addEventListener('mousedown', closeNav)
        return () => {
            window.removeEventListener('resize', onResize)
            document.removeEventListener('mousedown', closeNav)
        }
    }, [isOpened])
    return (
        <header className={ s.header }>
            <div className={ s.logo_wrapper }>
                <img src={ logo } alt={ 'logo' } className={ s.logo }/>
            </div>
            <nav className={ s.nav + (isOpened ? ' ' + s.opened : '') }>
                <a
                    href="/"
                    className={ s.active + ' ' + s.link }
                    onClick={ onLinkClick }
                    onMouseDown={ e => e.stopPropagation() }
                >
                    Home
                </a>
                <a
                    href="/"
                    className={ s.link }
                    onClick={ onLinkClick }
                >
                    Product
                </a>
                <a
                    href="/"
                    className={ s.link }
                    onClick={ onLinkClick }
                >
                    Faq
                </a>
                <a
                    href="/"
                    className={ s.link }
                    onClick={ onLinkClick }
                >
                    Contact
                </a>
            </nav>
            <svg
                viewBox="0 0 20 16"
                className={ s.mobile_hidden_navbar }
                onClick={ () => setIsOpened(prev => !prev) }
            >
                <path opacity="0.6" d="M0.124103 1.33333C0.124103 0.596954 0.721057 0 1.45744 0H18.6667C19.403 0 20
                0.596954 20 1.33333V1.33333C20 2.06971 19.403 2.66667 18.6667 2.66667H1.45744C0.721056 2.66667 0.124103
                2.06971 0.124103 1.33333V1.33333ZM0 8C0 7.26362 0.596954 6.66667 1.33333 6.66667H18.6667C19.403 6.66667
                20 7.26362 20 8V8C20 8.73638 19.403 9.33333 18.6667 9.33333H1.33333C0.596955 9.33333 0 8.73638 0 8V8ZM0
                14.6667C0 13.9303 0.596953 13.3333 1.33333 13.3333H18.6667C19.403 13.3333 20 13.9303 20
                14.6667V14.6667C20 15.403 19.403 16 18.6667 16H1.33333C0.596953 16 0 15.403 0 14.6667V14.6667Z"
                      fill="#737373"/>
            </svg>
        </header>
    )
}

export default Header