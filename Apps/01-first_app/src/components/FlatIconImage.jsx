import React from "react";

function FlatIconImage(params) {
  return (
    <div className="center_imgs">
      <img className="max_width_100px" src={params.src} />
      <br />
      <a className="small_font" href={params.href} title={params.title}>
        {params.author}
      </a>
      <br />
    </div>
  );
}

export default FlatIconImage;
