import {card_data} from './card.data';
import Card from './card.component';


export default function CardContainer(){
    return(
        <div className="md:container md:mx-auto px-25 py-7">
            <div className="px-10 py-5 sm:mx-auto md:mx-8 md:my-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12 ">
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
        </div>
    )
    
}