import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import style from './Preloader.module.css'

const antIcon = <LoadingOutlined style={{ fontSize: 60 }} spin />;

const Preloader=()=>{
    return(
        <Spin className={style.spin} indicator={antIcon} />
    )
}

export default Preloader