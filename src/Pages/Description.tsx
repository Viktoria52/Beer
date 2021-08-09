import {useAppSelector} from "../Redux/state"
import style from './Description.module.css'
import {Button} from "antd/lib/radio";
import {CloseSquareOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {BeerActionTypes} from "../Redux/types";

const Description = (props?: any) => {
    console.log('here!');

    const dispatch = useDispatch()
    const { description} = useAppSelector((state) => state.BeerReducer)

    let element = description.map((value) => (
        <div key={value.id} className={style.wrapper}>
            <p className={style.descriptionP}>{value.description}</p>
            <p className={style.name}>{value.name}</p>
            <p className={style.tagline}>{value.tagline}</p>
            <p className={style.abv}>Abv:{value.abv}</p>
            <p className={style.brewedFirst}>Date first brewed: {value.first_brewed}</p>
            <p className={style.brewTip}>{value.brewers_tips}</p>
            <img className={style.image} src={value.image_url} alt=""/>
        </div>
    ))
    const onClickClose = () => {
        dispatch({
            type: BeerActionTypes.SET_DESCRIPTION,
            payload: []
        })
    }
    console.log(element)
    return (<div className={style.description}>
            <div className={style.closeDescription}>
                <CloseSquareOutlined onClick={onClickClose} className={style.icon}/>
            </div>
            {element}
        </div>
    )
}

export default Description