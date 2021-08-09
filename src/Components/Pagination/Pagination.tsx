import {useDispatch} from 'react-redux';
import {BeerActionTypes} from '../../Redux/types';
import {Pagination} from 'antd';
import {useAppSelector} from './../../Redux/state';
import {fetchBeer} from '../../Redux/thunk';

const PaginationBeer = () => {
    const dispatch = useDispatch()
    const {page} = useAppSelector((state) => state.BeerReducer)
    const onChangePagination = (event: any) => {
        dispatch({
            type: BeerActionTypes.SET_BEER_PAGE,
            payload: event
        })
        dispatch(fetchBeer(event))
    }
    return (<>
        <Pagination onChange={onChangePagination}
                    defaultCurrent={page}
                    total={10 + (page*10)}
        />

    </>)
}

export default PaginationBeer