import { useEffect } from "hoist-non-react-statics/node_modules/@types/react"
import { useDispatch } from "react-redux"
import { fetchBeer } from "../../Redux/beer"
import { useAppSelector } from "../../Redux/state"
import TableBeer from "./TableBeer"

const Main = () => {
    // const dispatch = useDispatch()
    // const {beers} = useAppSelector((state)=>state.BeerReducer)
    // useEffect(()=>{
    //     dispatch(fetchBeer())
    //   }, [dispatch])

    return (<div>

        <TableBeer />
        
    </div>
    )
}

export default Main