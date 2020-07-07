import React from 'react';
import psIcon from '../../assets/photoshop_icon.png'
import adIcon from '../../assets/affinity_designer_icon.png'

export const Tools = () => {
  return (
    <section className="tools">
      <h2>NARZĘDZIA</h2>
      <div>
        <div>
          <img src={psIcon}></img>
          <h4>Adobe Photoshop</h4>
        </div>
        <div>
          <img src={adIcon}></img>
          <h4>Affinity Designer</h4>
        </div>
      </div>
    </section>
  )
}