import styles from './Slider.module.css'
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
export default function Slider(porps) {
    function handlePrevClick() { }
    function handleNextClick() { }

    return (
        <>
            <div className={styles.buttons}>
                <div className={styles.container}>
                    <button className={`${styles['best-choice-button']}`} onClick={handlePrevClick} >Prev</button>
                    <button className={`${styles['best-choice-button']}`} onClick={handleNextClick}>Next</button>
                </div>
            </div >
            <div className={styles.wrapper}>

                {
                    porps.cardata.map((card, i) => (
                        <div className='d-flex flex-column justify-content-center ' key={i}>
                            <div className={styles.image}><img src={`${card.image}`} alt="" style={{ width: '300px', height: '250px' }} /></div>
                            <span className={`${styles['c-price']}`}>
                                <span style={{ color: 'orangered' }}>$</span>
                                <span>{card.price}</span>
                            </span>
                            <span className='primaryText'>{card.name}</span>
                            <span className='secondaryText'> {card.detail}</span>
                        </div>
                    ))
                }
            </div>

        </>
    )
}