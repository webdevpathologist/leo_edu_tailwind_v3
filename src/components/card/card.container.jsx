import {card_data} from './card.data';
import Card from './card.component';


export default function CardContainer(){
    return(
            <div className="md:px-5 md:py-5 px-1 py-2 sm:mx-auto md:mx-4 md:my-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12 ">
            {
                card_data
                ?
                (
                    card_data.map((ele,id)=>{

                        return(
                            <Card key={id} data={ele}/>
                        )

                    })
                )
                :
                <></>
            }
            </div>
    )
    
}