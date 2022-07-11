import './Pagination.css'
import { useSelector, useDispatch } from "react-redux";
import { setPage } from '../../Redux/Actions/index';

function Pagination(){
    
    const dispatch = useDispatch()
    const { videogames, page } = useSelector(state => state)

    const changePage = (page) => {
        dispatch(setPage(page))
    }

    return(

        <div className="pagination">
            <button disabled={page -1 === 0} onClick={()=> {changePage(page -1)}}>&laquo;</button>
                <label>{page}</label>
            <button 
                disabled={page >= Math.ceil(videogames.length / 15)} 
                onClick={()=>{changePage(page +1)}}
            >&raquo;</button>     
        </div>

    );

}

export default Pagination;


