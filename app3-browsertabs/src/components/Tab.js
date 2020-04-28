import React, { useState } from "react";

export default function Tab({ children }) {
  const [hightlightStyle, setHighlightStyle] = useState({
    left: 0,
    opacity: 0,
  });

  function moveHighlight(e) {
    //update highlight style to move the highlight
    setHighlightStyle({
      left: -e.nativeEvent.layerX - 150,
    });
  }

  function hideHighlight(e) {
    setHighlightStyle({
      opacity: 0,
      left: -e.nativeEvent.layerX - 150,
    });
  }
  return (
    <div className="tab" onMouseOut={hideHighlight} onMouseMove={moveHighlight}>
      <div className="highlight" style={hightlightStyle} />
      {children}
    </div>
  );
}
