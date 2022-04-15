import React from 'react'

import bienestar from "../../images/bienestar80x80.png"

const News = () => {
  return (
    <aside className="section">
      <div>
        <h4>Bienestar estudiantil</h4>
        <p>
          Recuerda que si presentas cualquier problema que presentes en la
          institucion, por favor dirigite a nuestras oficinas.
        </p>
        <img src={bienestar} alt="" />
      </div>
    </aside>
  );
}

export default News