import '../App.css';
const Display=(props)=>{
return(
    <div className="display">
        <div className ="top-display">{props.topDisplay}</div>
        <div className ="bottom-display">{props.bottomDisplay}</div>

    </div> 
);
};
export default Display;