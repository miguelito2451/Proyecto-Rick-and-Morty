export default function Card({characters , onClose}) {
   return (
      <div>
         <button onClick={() => onClose(characters.id)}>X</button>
         <h2>{characters.name}</h2>
         <h2>{characters.status}</h2>
         <h2>{characters.species}</h2>
         <h2>{characters.gender}</h2>
         <h2>{characters.origin}</h2>
         <img src={characters.image} alt='' />
      </div>
   );
}
