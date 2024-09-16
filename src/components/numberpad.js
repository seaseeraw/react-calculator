import Button from './button';
import "../App.css";
const NumberPad =(props)=>{
    let calculatorFunc = props.calculatorFunc;
return(
<div className="numberpad">
   
    <Button
                calculatorFunc={calculatorFunc}
                btnClass="btn grey"
                operator="C"
            />
            <Button
                calculatorFunc={calculatorFunc}
                btnClass="btn grey"
                operator="DEL"
            />
            <Button
                calculatorFunc={calculatorFunc}
                btnClass="btn grey"
                operator="%"
            />
            <Button
                calculatorFunc={calculatorFunc}
                btnClass="btn orange"
                operator="/"
            />
            <Button
                calculatorFunc={calculatorFunc}
                btnClass="btn "
                operator="7"
            />
            <Button
                calculatorFunc={calculatorFunc}
                btnClass="btn "
                operator="8"
            />
            <Button
                calculatorFunc={calculatorFunc}
                btnClass="btn "
                operator="9"
            />
            <Button
                calculatorFunc={calculatorFunc}
                btnClass="btn orange"
                operator="x"
            />
            <Button
                calculatorFunc={calculatorFunc}
                btnClass="btn "
                operator="4"
            />
            <Button
                calculatorFunc={calculatorFunc}
                btnClass="btn "
                operator="5"
            />
            <Button
                calculatorFunc={calculatorFunc}
                btnClass="btn "
                operator="6"
            />
            <Button
                calculatorFunc={calculatorFunc}
                btnClass="btn orange"
                operator="-"
            />
            <Button
                calculatorFunc={calculatorFunc}
                btnClass="btn "
                operator="1"
            />
            <Button
                calculatorFunc={calculatorFunc}
                btnClass="btn "
                operator="2"
            />
            <Button
                calculatorFunc={calculatorFunc}
                btnClass="btn "
                operator="3"
            />
            <Button
                calculatorFunc={calculatorFunc}
                btnClass="btn orange"
                operator="+"
            />
            <Button
                calculatorFunc={calculatorFunc}
                btnClass="btn span2"
                operator="0"
            />
            <Button
                calculatorFunc={calculatorFunc}
                btnClass="btn"
                operator="."
            />
            <Button
                calculatorFunc={calculatorFunc}
                btnClass="btn orange"
                operator="="
            />

</div>
);
};
export default NumberPad;