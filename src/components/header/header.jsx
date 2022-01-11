import {GiLion} from 'react-icons/gi';


export default function Header(props) {


    return(
    <nav className="bg-gradient-to-br from-green-400 to-cyan-500 flex justify-center px-2 py-5 sticky top-0 z-50">
        <h2 className="md:text-5xl sm:text-4xl px-3 dark:text-white" style={{transform:"scaleX(-1)",verticalAlign:"Bottom"}}><GiLion/> </h2>
        <h1 className="font-mono lg:text-5xl md:text-4xl flex text-opacity-80 uppercase dark:text-white">The Leo's Educational Academy</h1>
        <h2 className="md:text-5xl sm:text-4xl px-3 dark:text-white" ><GiLion/> </h2>
    </nav>
    )
    
}