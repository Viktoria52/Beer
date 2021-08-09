import { Button } from 'antd';
import {BrowserRouter, NavLink, Router} from 'react-router-dom';
import style from './Navigation.module.css'
import {useAppSelector} from "../../Redux/state";

const Navigation = () => {
    const {page} = useAppSelector((state) => state.BeerReducer)
    return (
        <div className={style.navigation}>
            <BrowserRouter>
                <NavLink to='/main' activeClassName={style.active}>
                    <Button type="primary">Table</Button>
                </NavLink>
                <NavLink activeClassName={style.active}
                         to={`/barChart/page:`+ page}>
                    <Button type="primary">Bar graph</Button>
                </NavLink>
          </BrowserRouter>
      </div>
    )
}
export default Navigation
