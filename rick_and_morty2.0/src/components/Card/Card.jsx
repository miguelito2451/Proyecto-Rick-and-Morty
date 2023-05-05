import style from './Card.module.css'

export default function Card({id, name, status, species, gender, origin,
   image, onClose}) {
   return (
      <div className={style.Card}>
         <button onClick={onClose} className={style.boton}>X</button>
         <h2 className={style.Text}>{name}</h2>
         <h2 className={style.Text}>{species}</h2>
         <h2 className={style.Text}>{gender}</h2>
         <h2 className={style.Text}>{status}</h2>
         <h2 className={style.Text}>{origin}</h2>
         <img src={image} alt='' className={style.Image} /> 
      </div>
   );
}
