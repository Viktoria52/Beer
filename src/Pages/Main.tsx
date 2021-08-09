import { useEffect } from 'react';
import { useDispatch } from "react-redux"
import { v4 } from "uuid"
import TableBeer from '../Components/Table/TableBeer'
import { useAppSelector } from './../Redux/state';
import Preloader from '../Components/Preloader/Preloader';
import style from '../Components/Table/TableBeer.module.css'
import Description from './Description';
import { fetchBeer } from '../Redux/thunk';

const Main = () => {
  const dispatch = useDispatch()
  const { loading, description } = useAppSelector((state) => state.BeerReducer)

  useEffect(() => {
    dispatch(fetchBeer())
  }, [])

  return (<div key={v4()}>
    {loading &&
      < Preloader />
    }
    {description.length ?
     <div className={style.descriptionContainer}>
     <Description />
     </div> : null
    }
    
    <TableBeer />

  </div>
  )
}

export default Main