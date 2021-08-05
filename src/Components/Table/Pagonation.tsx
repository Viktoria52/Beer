import { Pagination } from 'antd';

function PaginationAntd() {
    return (<>
        <Pagination defaultCurrent={1} total={50} /> 
    </>
    )
}

export default PaginationAntd