import Card from './Card';

export default function Cards(props) {
   return (
   <div>
      {
         props.characters.map(({characters, onClose})  => {
            return (
               <Card
               key={characters.id}
               id = {characters.id}
               name={characters.name}
               status={characters.status}
               species={characters.species}
               gender={characters.gender}
               origin={characters.origin}
               image={characters.image}
               onClose={onClose}
               />
            )

         })
      }
   </div>
   );
}
