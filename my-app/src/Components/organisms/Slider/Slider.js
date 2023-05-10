import styles from './Slider.module.css'
export default function Slider(porps) {

    return (
        <>
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