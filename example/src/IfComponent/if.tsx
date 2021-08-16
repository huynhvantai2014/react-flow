import React from "react";
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';
import  "./if.css";
const kaiyo="変数ｎが0なら変数ｍに";


const IfComponent = () =>{
    const [id, setId] = React.useState(uuidv4());
    const editOnclickHandler=() =>{
      // alert("da click");
      setId(uuidv4());
    }
    return(
      
        <table style={{width:"70%"}}>
          <thead>
            <tr>
              <th colSpan={2}>
                {id}
                <div style={{float: "right",width:150}}>
                  <button onClick={editOnclickHandler}>E</button>
                  <button>↑</button>
                  <button>↓</button>
                  <button>×</button>
                  <button>-</button>
                  <button>A</button>
                </div>
                
                </th>
              <th style={{border:"0"}}></th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>概要</td>
            <td>
              {kaiyo}
            </td>
            <td>
              <input type="hidden" name="cartitem" value="55" />
            </td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
          </tbody>
          
        </table>
    
    )
}

export default IfComponent;