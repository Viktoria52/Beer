import { useEffect } from 'react';
import { useDispatch } from "react-redux"
import { v4 } from "uuid"
import { fetchBeer } from "../Redux/beer"
import TableBeer from '../Components/Table/TableBeer'
import { useAppSelector } from './../Redux/state';
import Preloader from '../Components/Preloader/Preloader';
import style from '../Components/Style/TableBeer.module.css'
import Description from './Description';

const Main = () => {
  const dispatch = useDispatch()
  const { loading, description } = useAppSelector((state) => state.BeerReducer)

  useEffect(() => {
    dispatch(fetchBeer())
  }, [])
console.log(description);

  return (<div key={v4()}>
    {loading &&
      < Preloader />
    }
    {description.length &&
     <div className={style.descriptionContainer}>
     <Description />
     </div>
    }
    
    <TableBeer />

  </div>
  )
}

export default Main