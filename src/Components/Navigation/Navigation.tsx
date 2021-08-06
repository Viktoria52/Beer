import { Button } from 'antd';
import style from '../Style/Navigation.module.css'

const Navigation = () => {
    return (
        <div className={style.navigation}>
        <Button type="primary">Table</Button> 
        <Button type="primary">Bar graph</Button>
      </div>
    )
} 
 //primary
export default Navigation
