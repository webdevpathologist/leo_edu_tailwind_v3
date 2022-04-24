import RubiksCubeGif from '../../assets/images/RubikCube.gif';
import AbacusGif from '../../assets/images/Abacus.gif';
import Calligraphy from '../../assets/images/Calligraphy.jpeg';
import HandWriting from '../../assets/images/HandWriting.jpeg';
import VedicMaths from '../../assets/images/VedicMaths.jpg';

export default function Card(props) {

  const getImage=(imageNum)=>{
    switch (imageNum) {
      case 1:
        return AbacusGif;
      case 2:
        return RubiksCubeGif;
      case 3:
        return Calligraphy;
      case 4:
        return HandWriting;
      case 5:
        return VedicMaths;
      default:
        break;
    }
  }

  const card_data=props.data;

  return(
    <div className="rounded-lg overflow-hidden shadow-md shadow-emerald-400/50 hover:shadow-lg hover:shadow-emerald-400 transform transition duration-300 hover:scale-105 bg-green-50">
        {/* <img className={card_data.css} src={getImage(card_data.imageCode)} alt={card_data.imageInvalid}/> */}
        <div className="px-6 py-6">
            <div className="font-bold text-xl mb-2 flex justify-center">{card_data.title}</div>
            <p className="text-gray-700 lg:text-base sm:text-xs">
            {card_data.description}
            </p>
        </div>
        <div className="px-4 pt-2 pb-2 flex justify-center">
          {
            card_data.tags
            ?
            card_data.tags.map((ele,id)=>{
              return (<span key={id} className="inline-block bg-emerald-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ele}</span>)
            })
            :
            <></> 
          }
        </div>
    </div>
  )
}
