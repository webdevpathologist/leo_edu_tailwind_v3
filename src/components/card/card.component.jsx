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

  return (
    <div className="transform overflow-hidden rounded-lg bg-green-100 hover:bg-green-300/50 shadow-md shadow-emerald-400/50 transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-emerald-400 hover:ring-4 dark:hover:bg-slate-700/50 hover:ring-emerald-300 dark:bg-slate-700/95  dark:shadow-sm text-gray-700 dark:text-green-300/75 dark:hover:text-green-300/95">
      {/* <img className={card_data.css} src={getImage(card_data.imageCode)} alt={card_data.imageInvalid}/> */}
      <div className="px-6 py-6">
        <div className="mb-2 flex justify-center text-2xl font-bold dark:text-green-400/95">
          {card_data.title}
        </div>
        <p className="sm:text-xs lg:text-base">
          {card_data.description}
        </p>
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
