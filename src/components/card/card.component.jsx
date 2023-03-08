// import RubiksCubeGif from "../../assets/images/RubikCube.gif";
// import AbacusGif from "../../assets/images/Abacus.gif";
// import Calligraphy from "../../assets/images/Calligraphy.jpeg";
// import HandWriting from "../../assets/images/HandWriting.jpeg";
// import VedicMaths from "../../assets/images/VedicMaths.jpg";

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

  const card_bg_dark = "bg-slate-700/95"
  const card_bg_dark_hover = "bg-slate-700/50"
  
  const card_head_text_dark = "text-emerald-300/75"
  const card_head_text_dark_hover = "text-green-400/95"
  const card_para_text_dark_hover = "text-green-300/95"

  return (
    <div className={`transform overflow-hidden rounded-lg ${card_bg} ${card_head_text} shadow-md shadow-indigo-300 dark:shadow-emerald-400/50 transition duration-300 hover:-translate-y-2 hover:${card_bg_hover} hover:shadow-lg dark:hover:shadow-emerald-400 dark:hover:ring-4 dark:hover:ring-emerald-300 hover:shadow-indigo-400 hover:ring-4 hover:ring-indigo-500 dark:${card_bg_dark} dark:${card_head_text_dark} dark:shadow-sm dark:hover:${card_bg_dark_hover} dark:hover:${card_head_text_dark_hover}`}>
      {/* <img className={card_data.css} src={getImage(card_data.imageCode)} alt={card_data.imageInvalid}/> */}
      <div className="px-6 py-6">
      <div className={`mb-2 flex justify-center text-2xl font-bold dark:${card_para_text_dark_hover}`}>
          {card_data.title}
        </div>
        <p className={`sm:text-xs lg:text-base dark:${card_para_text_dark_hover}`}>{card_data.description}</p>
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
  );
}
