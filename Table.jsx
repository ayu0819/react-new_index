import React,{useState,useCallback} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit,faTrashAlt,faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';

const Contents = styled.div`
 width: 1100px;
 padding: 0 1em;
 margin: 0 auto;
 padding: 7em 0;
`;

const Inputs = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 input {
     width: 25em;
     padding: 1em;
     border-radius: 20em;
     border: solid 2px #FF385C;
     color: #FF385C;
 }
`;

const Spacer = styled.div`
 width: 5em;
`;

const Circle = styled.div`
font-size: 1.5em;
margin: 1em;
color: #FF385C;
`;

const Table = (props) => {
const [index, setIndex] = useState(0),
      [color, setColor] = useState(""),
      [quantity, setQuantity] = useState(0);

const inputColor = useCallback((event) => {
      setColor(event.target.value)
 },[setColor])

const inputQuantity = useCallback((event) => {
      setQuantity(event.target.value)
 },[setQuantity])

 const addColor = (index,color,quantity) => {
     if(color === "" || quantity === "") {
         return false
     } else {
       props.setColors(prevState => [...prevState, {color: color, quantity:quantity}])
       setIndex(index + 1)
       setColor("")
       setQuantity(0)
     }
 }

return(
 <Contents>
  <table>
     <thead>
         <tr>
             <th>色</th>
             <th>在庫</th>
             <th></th>
             <th></th>
         </tr>
     </thead>
     <tbody>
         {props.colors.length > 0 && (
             props.colors.map((item, index) => (
                 <tr key={item.color}>
                   <td>{item.color}</td>
                   <td>{item.quantity}</td>
                   <td><FontAwesomeIcon  icon={faEdit} /></td>
                   <td><FontAwesomeIcon  icon={faTrashAlt} /></td>
                 </tr>
             ))
         )}
     </tbody>
  </table>
  <Inputs>
   <input
     type="text"
     placeholder="color"
     value={color}
     name="color"
     onChange={inputColor}
     label={"カラー"}
   />
   <Spacer />
   <input
     type="number"
     placeholder="quantity"
     value={quantity}
     name="quantity"
     onChange={inputQuantity}
     label={"在庫"}
   />
   <div>
   <Circle onClick={() => addColor(index,color,quantity)}><FontAwesomeIcon  icon={faCheckCircle} /></Circle>
   </div>
  </Inputs>
 </Contents>
  )
}

export default Table;