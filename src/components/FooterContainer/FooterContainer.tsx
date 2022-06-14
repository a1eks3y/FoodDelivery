import * as React from 'react'
import s from './FooterContainer.module.sass'

const FooterContainer: React.FC = () => {
    return (
        <div className={ s.wrapper }>
            <div className={ s.content_wrapper }>
                <h2 className={ s.title }>Download the app now.</h2>
                <h4 className={ s.sub_title }>Available on your favorite store. Start your premium experience now</h4>
                <div className={ s.btn_wrapper }>
                    <button className={ s.btn + ' ' + s.red_btn }>Playstore</button>
                    <button className={ s.btn + ' ' + s.white_btn }>App store</button>
                </div>
            </div>
        </div>
    )
}

export default FooterContainer