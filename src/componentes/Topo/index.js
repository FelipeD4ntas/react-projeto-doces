import React from "react";

function Topo(props) {
  return (
    <header  className="topo">
      {props.children}
    </header> 
  );
};

export default Topo;