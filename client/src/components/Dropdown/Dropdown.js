import './Dropdown.css';
import { useDispatch } from "react-redux";




function Dropdown(props){

    const dispatch = useDispatch();

    async function handleClick(e, element) {
        e.preventDefault();

        dispatch(props.action(element))
    }

    let options = []
    props.content.forEach(element => {
        options.push(<a href="#" onClick={(e) => handleClick(e, element)}>{element}</a>)
    });

    return (
        <div className="dropdown">
            <button className="dropbtn">{props.name}
                <i className="fa fa-caret-down" style={{paddingLeft:"10px"}}></i>
            </button>
            <div className="dropdown-content">
                {options}
            </div>
        </div>
    );
 

}

export default Dropdown;
