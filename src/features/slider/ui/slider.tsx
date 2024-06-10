import { FC } from 'react'
import s from './slider.module.scss'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const textAnimator = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    }
}

const Slider: FC = () => {
    return <motion.div
        initial="hidden"
        whileInView="visible"
        variants={textAnimator}
        className={s.Slider}>
        <div className={s.Slider__info}>
            <h3>Men's Shoe</h3>
            <h1>Nike Air Edge 270</h1>
            <p>The Nike Air Edge 270 takes the look of retro basketball and puts it through a modern lens</p>
            <NavLink to={'https://www.youtube.com/watch?v=rKvcWTeohVI'} className={s.Link} target='_blank'>
                <button>
                    <img src="/img/play.svg" alt="" />
                    PLAY VIDEO
                </button>
            </NavLink>
        </div>
        <img className={s.Slider__img} src="/img/products/1.png" alt="" />
    </motion.div>
}


export default Slider