import './Item.css'
import {useState} from 'react'

export default function item(props) {
  const {id,title,description} = props
  const [show , setShow] = useState(false)
  return (
    <section>
      <div className="content">
        <h4>{title}</h4>
        <button onClick={()=>setShow(!show)}>{show? "hide" : "show"}</button>
      </div>
        {show && <p>{description}</p>}
    </section>
  );
}
