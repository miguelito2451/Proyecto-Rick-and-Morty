import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards({characters}) {
   return (
   <div className={style.Cards}>
      {
         characters.map(({id, name, status, species, gender, origin,
            image, onClose}) => {
               return  (
                  <Card
                     key={id}
                     id={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     image={image}
                     origin={origin.name}           
                  
                  />
               )
            }
         )
      }
   </div>
   );
}
