import * as React from 'react'
import s from './Footer.module.sass'
import logo from '../../images/FoodDelivery_logo.svg'

const Footer: React.FC = () => {
    return (
        <footer className={ s.footer }>
            <img src={ logo } alt={ 'logo' } className={ s.logo }/>
            <ul className={ s.social_services }>
                <li>
                    <svg width="35" height="28" viewBox="0 0 35 28" fill="#FA4A0C">
                        <path d="M34.1449 4.07567C32.9201 4.60402 31.5873 4.98426 30.2144 5.13236C31.6398 4.28555
                        32.7072 2.94774 33.2163 1.36992C31.8788 2.16559 30.4135 2.72353 28.8855 3.01899C28.2469 2.33625
                        27.4745 1.79235 26.6165 1.42118C25.7584 1.05001 24.8332 0.859524 23.8983 0.861589C20.1158
                        0.861589 17.0739 3.92758 17.0739 7.69002C17.0739 8.21836 17.1379 8.74671 17.242 9.25504C11.5783
                        8.95884 6.52702 6.25309 3.16884 2.1104C2.55694 3.15554 2.23629 4.34555 2.24023 5.55663C2.24023
                        7.92617 3.44502 10.0155 5.28221 11.2443C4.19952 11.2017 3.14219 10.9041 2.19621
                        10.3758V10.4598C2.19621 13.778 4.54173 16.5278 7.66776 17.1602C7.08081 17.3126 6.47701 17.3906
                        5.87059 17.3923C5.4263 17.3923 5.00603 17.3483 4.58175 17.2882C5.44631 19.994 7.96395 21.9593
                        10.9619 22.0233C8.61637 23.8605 5.67846 24.9412 2.48839 24.9412C1.91602 24.9412 1.38768 24.9212
                        0.839325 24.8572C3.86529 26.7984 7.45562 27.9191 11.3221 27.9191C23.8743 27.9191 30.7427 17.5204
                        30.7427 8.49454C30.7427 8.19835 30.7427 7.90216 30.7227 7.60597C32.0516 6.63333 33.2163 5.42855
                        34.1449 4.07567Z"/>
                    </svg>
                </li>
                <li>
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="#FA4A0C">
                        <path
                            d="M31.2103 0.379883H1.7512C1.04274 0.379883 0.470367 0.952254 0.470367
                            1.66071V31.1198C0.470367 31.8283 1.04274 32.4007 1.7512 32.4007H31.2103C31.9188 32.4007
                            32.4911 31.8283 32.4911 31.1198V1.66071C32.4911 0.952254 31.9188 0.379883 31.2103
                            0.379883ZM27.5119 9.72595H24.9543C22.949 9.72595 22.5607 10.6786 22.5607
                            12.0795V15.1655H27.3478L26.7234
                            19.9966H22.5607V32.4007H17.5695V20.0006H13.3948V15.1655H17.5695V11.6032C17.5695 7.46848
                            20.0951 5.21502 23.7855 5.21502C25.5546 5.21502 27.0716 5.34711 27.5159
                            5.40715V9.72595H27.5119Z"
                        />
                    </svg>
                </li>
                <li>
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="#FA4A0C">
                        <path
                            d="M24.625 0.25H8.37497C3.88766 0.25 0.249969 3.88769 0.249969 8.375V24.625C0.249969
                            29.1123 3.88766 32.75 8.37497 32.75H24.625C29.1123 32.75 32.75 29.1123 32.75
                            24.625V8.375C32.75 3.88769 29.1123 0.25 24.625 0.25Z"
                        />
                        <path
                            d="M23.0001 15.4763C23.2007 16.8287 22.9697 18.2099 22.34 19.4234C21.7103 20.6369 20.714
                            21.621 19.4928 22.2357C18.2715 22.8504 16.8876 23.0643 15.5378 22.8471C14.1879 22.6299
                            12.941 21.9926 11.9742 21.0259C11.0075 20.0591 10.3702 18.8122 10.153 17.4623C9.93577
                            16.1125 10.1497 14.7286 10.7644 13.5074C11.3791 12.2861 12.3632 11.2898 13.5767
                            10.6601C14.7903 10.0305 16.1715 9.79946 17.5239 10C18.9034 10.2046 20.1805 10.8474 21.1666
                            11.8335C22.1527 12.8196 22.7956 14.0968 23.0001 15.4763Z"
                            stroke="white" strokeWidth="2"/>
                        <path
                            d="M25.4375 7.5625H25.4538" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>

                </li>
            </ul>
            <span className={ s.subtitle }>
                Copyright 2020 Bella Onojie.com
            </span>
        </footer>
    )
}

export default Footer