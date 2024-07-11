import { FC } from 'react'
import s from './footer.module.scss'



const Footer: FC = () => {
 return <div className={s.Footer}>
  <section className={s.Footer__section}>
   <h3 className={s.Footer__title}>Follow Us.</h3>
   <p className={s.Footer__description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, earum?</p>
   <ul className={s.Footer__networks}>
    <li>
     <a target='_blank' href="https://vk.com/arsen_hajranov"><img src="/img/vk.svg" alt="" /></a>
    </li>
    <li>
     <a target='_blank' href="https://t.me/ultranatural01"><img src="/img/telegram.svg" alt="" /></a>
    </li>
    <li>
     <a target='_blank' href="https://github.com/aRsenToim" ><img src="/img/github.svg" alt="" /></a>
    </li>
   </ul>
  </section>
  <section className={s.Footer__section}>
   <h3>Contact Us.</h3>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
   <b>+7 996 961 27 30</b>
   <a className={s.Footer__link} href="mailto:arsen.hajranov123@gmail.com">arsen.hajranov123@gmail.com</a>
  </section>
 </div>
}


export default Footer