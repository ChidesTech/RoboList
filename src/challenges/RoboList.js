import { useState } from "react";

function RoboList() {
    const [text, setText] = useState("");
    const [texts, setTexts] = useState([]);
    const submitText = (e) => {
        e.preventDefault()
        setTexts(prev => [...prev, text]);
        setText("");
    }


    const removeRobot = (text) =>{
        setTexts(texts.filter(x => x !== text));
    }
    return <div className="robolist">
        <h1 style={{textAlign : "center"}} className="mt-5">ROBOLIST</h1>
        <form className="robolist-form" action="" onSubmit={submitText}>
            <input  type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Enter Word For Robot" />
            <button type="submit">Submit</button>
        </form>
        <div className="robot-images">
            {texts.map((text, i) => {
                return <div key={i} onClick={removeRobot.bind(this, text)}>
                <img src={`https://robohash.org/${text}`} alt="" />
                <p>{text}</p>
                </div> 
            })}
        </div>


    </div>
}


export default RoboList;