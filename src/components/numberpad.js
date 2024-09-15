import Button from './button';
import './calculator.css';
const NumberPad =()=>{
return(
<div className="numberpad">
    <Button btnClass="btn grey" operator="c"/>
    <Button btnClass="btn grey" operator="Del"/>
    <Button btnClass="btn grey" operator="%"/>
    <Button btnClass="btn orange" operator="/"/>
    <Button btnClass="btn " operator="7"/>
    <Button btnClass="btn " operator="8"/>
    <Button btnClass="btn " operator="9"/>
    <Button btnClass="btn orange" operator="x"/>
    <Button btnClass="btn " operator="4"/>
    <Button btnClass="btn " operator="5"/>
    <Button btnClass="btn " operator="6"/>
    <Button btnClass="btn orange" operator="-"/>




    {/* <div class="btn grey">C</div>
                    <div class="btn grey">DEL</div>
                    <div class="btn grey">%</div>
                    <div class="btn orange">/</div>
                    <div class="btn">7</div>
                    <div class="btn">8</div>
                    <div class="btn">9</div>
                    <div class="btn orange">x</div>
                    <div class="btn">4</div>
                    <div class="btn">5</div>
                    <div class="btn">6</div>
                    <div class="btn orange">-</div>
                    <div class="btn">1</div>
                    <div class="btn">2</div>
                    <div class="btn">3</div>
                    <div class="btn orange">+</div>
                    <div class="btn span2">0</div>
                    <div class="btn">.</div>
                    <div class="btn orange">=</div> */}


</div>
);
};
export default NumberPad;