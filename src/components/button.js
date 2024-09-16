
const Button=(props)=>{
    const btnClass = props.btnClass;
    const opFunction = props.calculatorFunc;
    const operator = props.operator;
return(
    <div className={btnClass} onClick={()=> opFunction(operator)}>{operator}</div>
);
}
export default Button;