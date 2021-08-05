import 'antd/dist/antd.css';
import style from '../Style/TableBeer.module.css'
import { Table, Tag, Space, Image } from 'antd';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../Redux/state';
import { useEffect } from 'react';
import { fetchBeer } from '../../Redux/beer';
import { v4 as uuid, v4 } from 'uuid';
const { Column, ColumnGroup } = Table;


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
      photo:[ 'https://i.pinimg.com/564x/1d/60/3e/1d603edca1bcd5e37f8707cecb9b885b.jpg'],
      ABV: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
   
  ];
function TableBeer () {
  const dispatch = useDispatch()
  const {beers} = useAppSelector((state)=>state.BeerReducer)
  // console.log(beers);
  
  useEffect(()=>{
    dispatch(fetchBeer())
  }, [dispatch])
  // const elements = beers.map((beerImage)=> {
  //   return beerImage.image_url
  //  })
//встроенная пагинация max = 10
    return(
    <Table className={style.MainTable} dataSource={beers}>
      {/* <ColumnGroup title="Name"> */}
        <Column  title="Name" dataIndex="name" key={v4()} />
        <Column title="Tagline" dataIndex="tagline" key={v4()} />
      {/* </ColumnGroup> */}
      <Column title="Photo" dataIndex="image_url" key={v4()}
       render={photo => (
       <>
  
        {/* {beers.map(beer=>(
          <img
          width={60}
          className={style.img} 
          key={v4()}                                           //fix key
          src={beer.image_url} 
          alt="" 
          />  
        ))} */}

        </>
        )} 
     
        />

      <Column title="ABV" dataIndex="abv" key={v4()} 
     
      />
    
      
    </Table>
  )}
//  <Column
//         title="Tags"
//         dataIndex="tags"
//         key="tags"
//         render={tags => (
//           <>
//             {tags.map(tag => (
//               <Tag color="blue" key={tag}>
//                 {tag}
//               </Tag>
//             ))}
//           </>
//         )}
//       /> 
export default TableBeer