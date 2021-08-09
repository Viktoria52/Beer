import {Bar} from "react-chartjs-2";
import {useAppDispatch, useAppSelector} from "../Redux/state";
import {useEffect} from "react";
import {fetchBeer} from "../Redux/thunk";
import style from './ColumnChart.module.css'
import {log} from "util";

// const testData: any = {
//     labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"], //x
//     datasets: [{
//         label: "Alco",
//         data: [0, 59, 75, 20, 20, 55, 40], // ??? y
//     }]
// }

const ColumnChart = () => {
    const dispatch = useAppDispatch()
    const {currentBeers} = useAppSelector((state) => state.BeerReducer)

    useEffect(() => {
        dispatch(fetchBeer(1, 20))
    }, [])

    function chartBerShow() {  //формирование нужного объекта для chart
        let abvArr: any = [];
        let arrName: any = []
        currentBeers.map((value, index) => {
                if (value.name) {
                    arrName.push(value.name)
                }
                if (value.abv) {
                    abvArr.push(value.abv)
                }

            }
        )
        return {labels: arrName, datasets: [{label: 'abv', data: abvArr}]}
    }

    console.log(chartBerShow())
    return (
        <>
            <Bar
                className={style.bar}
                getElementAtEvent={(element, event) => element.map((value)=> console.log(value))}
                // getDatasetAtEvent={(dataset, event)=>console.log('dataset:',dataset, 'event:', event)}
                data={chartBerShow()}
            />
        </>
    )
}
export default ColumnChart