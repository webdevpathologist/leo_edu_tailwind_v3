// import RubiksCubeGif from "../../assets/images/RubikCube.gif";
// import AbacusGif from "../../assets/images/Abacus.gif";
// import Calligraphy from "../../assets/images/Calligraphy.jpeg";
// import HandWriting from "../../assets/images/HandWriting.jpeg";
// import VedicMaths from "../../assets/images/VedicMaths.jpg";
import {FaChild,FaRegStar} from 'react-icons/fa';
import {GiGraduateCap} from 'react-icons/gi'

export default function Card(props) {
  // const getImage = (imageNum) => {
  //   switch (imageNum) {
  //     case 1:
  //       return AbacusGif;
  //     case 2:
  //       return RubiksCubeGif;
  //     case 3:
  //       return Calligraphy;
  //     case 4:
  //       return HandWriting;
  //     case 5:
  //       return VedicMaths;
  //     default:
  //       break;
  //   }
  // };

  const card_data = props.data;
  // dark:bg-slate-700/95 dark:text-green-400/95
  // dark:text-green-300/95

  const card_bg = "bg-indigo-200"
  const card_bg_hover = "bg-indigo-400"
  const card_head_text = "text-gray-700"
  const card_para_text = "text-zinc-900"

  const card_bg_dark = "bg-slate-700/95"
  const card_bg_dark_hover = "bg-slate-700/50"
  
  const card_head_text_dark_hover = "text-green-400/95"
  const card_para_text_dark_hover = "text-green-300/95"

  return (
    <div className={`py-2 transform transition duration-300 overflow-hidden rounded-lg ${card_bg} ${card_head_text} shadow-md shadow-indigo-300 dark:shadow-emerald-400/50  hover:-translate-y-2 hover:${card_bg_hover} hover:shadow-lg dark:hover:shadow-emerald-400 dark:hover:ring-4 dark:hover:ring-emerald-300 hover:shadow-indigo-400 hover:ring-4 hover:ring-indigo-500 dark:${card_bg_dark} dark:shadow-sm dark:hover:${card_bg_dark_hover} dark:hover:${card_head_text_dark_hover} ${card_para_text} transform ease-in-out duration-300`}>
      {/* <img className={card_data.css} src={getImage(card_data.imageCode)} alt={card_data.imageInvalid}/> */}
      <div className="py-3 px-3 relative flex flex-row items-end justify-items-end h-full transform transition-transform duration-100 group-hover:-translate-x-2 group-hover:-translate-y-2 group">
        <div className="visible group-hover:hidden ">
          <div className={`mb-2 flex flex-col justify-evenly text-3xl font-bold dark:${card_para_text_dark_hover}`}>
            <h1 className={`${card_head_text} dark:${card_para_text_dark_hover} px-0.5`}>{card_data.title}</h1>
            <div className='text-sm px-0.5 pt-8 flex flex-row items-center justify-items-end '>
            {
              card_data.headCount 
              ? 
              <p className='flex flex-row mr-2'><FaChild size={21} className="p-1"/> {card_data.headCount ? card_data.headCount : ""}</p>
              : 
              null 
            }
            {
              card_data.gradCount 
              ? 
              <p className='flex flex-row mx-2'><GiGraduateCap size={25} className="p-1"/><span className='p-1'> {card_data.gradCount ? card_data.gradCount : ""}</span></p>
              : 
              null 
            }
            {
              card_data.rating 
              ? 
              <p className='flex flex-row mx-2'><FaRegStar size={20} className="p-1"/> {card_data.rating ? card_data.rating : ""}</p>
              : 
              null
            }
            </div>
          </div>
        </div>
        <div className="hidden group-hover:inline-block ">
          <p className={`sm:text-sm lg:text-base dark:${card_para_text_dark_hover}`}>
            {card_data.description}
          </p>
          <div className='px-0.5 pt-4 flex flex-row items-start justify-between'>
          {
          card_data.headCount 
          ? 
          <p className={`text-xs font-thin dark:${card_para_text_dark_hover}`}>
            Children Enrolled: {card_data.headCount }
          </p>
          : 
          <></> }
          {
          card_data.gradCount 
          ? 
          <p className={`text-xs font-thin dark:${card_para_text_dark_hover}`}>
            Children Graduated: {card_data.gradCount }
          </p>
          : 
          <></> }
          </div>
        </div>
          {card_data.tags ? (
            card_data.tags.map((ele, id) => {
              return (
                <div className="flex justify-center px-4 pt-2 pb-2">
                  <div className="flex justify-center px-4 pt-2 pb-2">
                    <span
                      key={id}
                      className="mr-2 mb-2 inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-gray-700"
                    >
                      {ele}
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
      </div>
    </div>
  );
}
