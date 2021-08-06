import { useDispatch } from 'react-redux';
import { fetchBeer } from '../../Redux/beer';
import { BeerActionTypes } from '../../Redux/types';
import { Pagination } from 'antd';
import { useAppSelector } from './../../Redux/state';

const PaginationBeer = () => {
    const dispatch = useDispatch()
    const {page,beers} = useAppSelector((state) => state.BeerReducer)
    
      const onChangePagination = (event:any) => {
    dispatch({
      type: BeerActionTypes.SET_BEER_PAGE,
      payload: event
    })
    dispatch(fetchBeer(event))
  }
    return(<>
<Pagination onChange={onChangePagination}
 defaultCurrent={page} 
 total={10 + beers.length} />
    </>)
}

export default PaginationBeer