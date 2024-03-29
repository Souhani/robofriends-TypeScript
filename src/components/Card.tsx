import react from 'react';

type cardProps = {
     name: string,
     email: string,
     id: string,
}
const Card = ({name,email,id}: cardProps) => {

     return (
        <div className= 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>

             <img alt = 'robot' src = {`https://robohash.org/${id+name}?size=200x200`}/>
             <div>
	             <h2>{name}</h2>
	             <p>{email}</p>
             </div>
        </div>

     	)

}

export default Card