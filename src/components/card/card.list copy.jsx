import RubiksCube from '../../assets/images/Rubik_cube.gif';

export default function Cards() {

  const getImage=(imageURL)=>{
    import(`../../assets/images/${imageURL}`).then((image)=>{return image})
  }


  return(
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-16 ">
          
          <div className="rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
              <img className="w-full" src={getImage("Rubik_cube.gif")} alt="rubic_cube"/>
              <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Rubik's Cubes</div>
                  <p className="text-gray-700 text-base">
                  Learn to solve different types of Rubick's Cubes in simpler way which sharpen your mind.
                  </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Rubik's Cube</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Memory Span</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mind Power</span>
              </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
            {/* <img className="w-full" src="src\images\Calligraphy.jpeg" alt="calligraphy"/> */}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Calligraphy</div>
              <p className="text-gray-700 text-base">
                Learn Calligraphy online from one of our many classes, both hand drawn and digital.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Calligraphy</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Hand Lettering</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Brush Art</span>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
            {/* <img className="w-full" src="src\images\Abacus.gif" alt="abacus"/> */}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Abacus</div>
              <p className="text-gray-700 text-base">
                Abacus course aims to develop brain by helping you improve your calculations, abilities, number sense, and mental arithmetic.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
            {/* <img className="w-full h-72" src="src\images\Vedic-Maths.jpg" alt="vedic_math"/> */}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Vedic Math</div>
              <p className="text-gray-700 text-base">
                Vedic Maths Will Enable You To Calculate Much Faster Compared To Conventional System.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Vedic Math</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Speed Math</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Computation</span>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
            {/* <img className="w-full h-72" src="src\images\HandWriting.jpeg" alt="handwriting"/> */}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Hand Writing</div>
              <p className="text-gray-700 text-base">
                Learn how to improve your handwriting with fauxligraphy tools, water brush essentials, or pen and ink.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Hand Writing</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Ink</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Better Script</span>
            </div>
          </div>




      </div>


  )
}