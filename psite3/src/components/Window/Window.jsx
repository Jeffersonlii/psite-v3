import React from 'react';
import Draggable from 'react-draggable';
import './Window.scss';



export default function Window(props) {

    let onStart = (e) => {
        let elems = document.getElementsByClassName('window');
        for(let i = 0; i < elems.length; i++) {
          elems[i].style.zIndex = 1;
          e.currentTarget.style.zIndex = 9;
        }
      }
    let onCloseWindow = ()=>{
        props.onCloseWindow(props.windowID)
    }

    let randomPos = Math.floor(Math.random() * (40)) -20;
    return (
    <Draggable 
    handle=".header" 
    onMouseDown={onStart} 
    bounds="parent"
    defaultPosition= {{x: randomPos, y: randomPos}}
    >
        <div className="window" style={{width: props?.width ?? '30rem', height: props?.height ?? '15rem'}}>
            <div className="header">
                <HeaderLines></HeaderLines>
                <div className="title">
                {props?.header ?? 'UNDEFINED_HEADER'}
                </div>
                <div className="close" onClick={onCloseWindow}></div>
                <HeaderLines></HeaderLines>
            </div>
            <div className="infoHeader"></div>
            <div className="contents">{props.children}</div>
        </div>
    </Draggable>);
    
}
function HeaderLines(){
    let numLines = 6;
    return <div className="lineWrap">{Array(numLines).fill(<div className="line"></div>)}</div>
}