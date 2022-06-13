import * as React from 'react'
import s from './HeaderContainer.module.sass'

const HeaderContainer: React.FC = () => {
    return (
        <div
            className={ s.wrapper }
        >
            <span className={ s.block_name }>
                Food app
            </span>
            <h1 className={ s.title }>
                Why stay hungry when<br/> you can order form Bella Onojie
            </h1>
            <h4 className={ s.sub_title }>
                Download the bella onoje’s food app now on
            </h4>
            <div className={ s.btn_wrapper }>
                <button className={ s.btn + ' ' + s.red_btn }>Playstore</button>
                <button className={ s.btn + ' ' + s.white_btn }>App store</button>
            </div>
        </div>
    )
}

export default HeaderContainer