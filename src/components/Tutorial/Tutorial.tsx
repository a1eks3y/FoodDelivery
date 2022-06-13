import * as React from 'react'
import s from './Tutorial.module.sass'
import getStartedImg from '../../images/Phone__get_started.svg'
import createAccImg from '../../images/Phone__create_acc.svg'
import exploreVarietesImg from '../../images/Phone__explore_varietes.svg'
import checkoutImg from '../../images/Phone__checkout.svg'

const Tutorial: React.FC = () => {
    return (
        <div className={ s.wrapper }>
            <img src={ getStartedImg } alt={ 'get started' } className={ s.img }/>
            <div className={ s.title_wrapper }>
                <hr className={ s.separator }/>
                <span className={ s.title }>How the app works</span>
            </div>
            <ul className={ s.steps }>
                <li className={ s.step }>
                    <img src={ createAccImg } alt={ 'create account' }/>
                    <span>
                        <h3>Create an account</h3>
                        <h2>
                            Create/login to an existing<br/> account to get started.
                        </h2>
                        <h4>
                            An account is created with your email<br/> and a desired password.
                        </h4>
                    </span>
                </li>
                <li className={ s.step }>
                    <span>
                        <h3>Explore varieties</h3>
                        <h2>
                            Shop for your favorites<br/> meal as e dey hot.
                        </h2>
                        <h4>
                            Shop for your favorite meals or drinks<br/> and enjoy while doing it.
                        </h4>
                    </span>
                    <img src={ exploreVarietesImg } alt={ 'explore varieties' }/>
                </li>
                <li className={ s.step }>
                    <img src={ checkoutImg } alt={ 'create account' }/>
                    <span>
                        <h3>Checkout</h3>
                        <h2>
                            When you done check out<br/> and get it delivered.
                        </h2>
                        <h4>
                            When you done check out and get it<br/> delivered with ease.
                        </h4>
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default Tutorial