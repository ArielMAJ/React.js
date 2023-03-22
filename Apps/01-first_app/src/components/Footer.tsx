import React from "react";

function Footer() {
  const developer_gh_name: string = "@ArielMAJ";
  const current_year: string = new Date().getFullYear().toString();

  return (
    <div>
      <hr />
      <p className="heading2">Created by {developer_gh_name}</p>
      <p>Copyright {current_year}</p>
    </div>
  );
}

export default Footer;
