import 'antd/dist/antd.css';
import style from '../Style/TableBeer.module.css'
import { Collapse, Table, } from 'antd';
import { useAppSelector } from '../../Redux/state';
import { v4 as uuid, v4 } from 'uuid';
import CollapsePanel from 'antd/lib/collapse/CollapsePanel';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BeerActionTypes } from '../../Redux/types';
import Description from '../../Pages/Description';
const { Column } = Table;


const data = [ // test array
  {
    key: '1',
    Name: 'John',
    Tagline: 'Brown',
    photo: ["https://i.pinimg.com/564x/b8/ca/91/b8ca91bccd1a65e836df6d27aec2bc5f.jpg"],
    ABV: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    Name: 'Jim',
    Tagline: 'Green',
    photo: ['https://i.pinimg.com/564x/d0/8d/4e/d08d4e12e439b4390d0ec527ff6fcf05.jpg'],
    ABV: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    Name: 'Joe',
    Tagline: 'Black',
    photo: ['https://i.pinimg.com/564x/1d/60/3e/1d603edca1bcd5e37f8707cecb9b885b.jpg'],
    ABV: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },

];
function TableBeer() {
  const { currentBeers, description } = useAppSelector((state) => state.BeerReducer)
  const dispatch = useDispatch()
 
  const onClickImage = (event: any) => {
    // console.log(event.id) 
    dispatch({
      type: BeerActionTypes.SET_DESCRIPTION,
      payload: event.id // надо id
    })

  }
 
  return (<>
      <Table key={v4()} pagination={false} className={style.MainTable} dataSource={currentBeers} >
      <Column title="Name"
        dataIndex="name"
        key={v4()}                                      //must fix key !
        render={i => (
          <p key={v4()}>{i} </p>
        )
        }
      />
      <Column title="Tagline"
        dataIndex="tagline"
        key='tagline'
        render={i => (
          <p key={v4()}>{i}</p>
        )}
      />
      <Column title="Photo" dataIndex='image_url' key='image_url'
      onCell={(record, rowIndex)=>({
        onClick: () => {
          onClickImage(record)
          }
      })}
        render={someData => (
          // currentBeers.map((value)=><p key={value.id}>{value.id}</p>)
            <img
              className={style.img}
              src={someData}
              key={v4()}
              alt=''
              // onClick={() => onClickImage(someData)}
            />
        )}
      />
      <Column
        title="ABV"
        dataIndex="abv"
        key='abv'
        render={i => (
          <p key={v4()}>{i}</p>
        )}
      />

    </Table>
  </>
   
  )
}

export default TableBeer