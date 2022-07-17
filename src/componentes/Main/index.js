import React from 'react';
import Topo from "../Topo";
import './style.css';

function Main(props) {
  return (
    <>
      <Topo>
        <div className="box-icone">
          <img src={props.img} alt="icone " className={props.topoIconeClass} onClick={props.functionTopo}/>
          <h1 className={props.topoIconeClass}>{props.titulo}</h1>
        </div>
      </Topo>
      <main className={props.classMain}>
        {props.children}
      </main>
    </>
  );
};

export default Main;