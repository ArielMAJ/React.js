import React from "react";

function SimpleImage(params) {
  return (
    <div className="center_imgs">
      <img className="max_width_100px" src={params.src} />
    </div>
  );
}

export default SimpleImage;
