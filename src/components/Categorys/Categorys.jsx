import React from "react";
import style from "./categorys.module.css";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import img9 from "../../assets/9.jpg";
import img10 from "../../assets/10.jpg";

const Categorys = () => {
  return (
    <div className={style.imgs}>
      <div>
        <img src={img2} alt="" />
        <p>Ajanda</p>
      </div>
      <div>
        <img src={img3} alt="" />
        <p>Box</p>
      </div>
      <div>
        <img src={img4} alt="" />
        <p>Catalog</p>
      </div>
      <div>
        <img src={img5} alt="" />
        <p>Folder</p>
      </div>
      <div>
        <img src={img6} alt="" />
        <p>Notebook</p>
      </div>
      <div>
        <img src={img7} alt="" />
        <p>Paper DI Envelope</p>
      </div>
      <div>
        <img src={img8} alt="" />
        <p>6</p>
      </div>
      <div>
        <img src={img9} alt="" />
        <p>7</p>
      </div>
      <div>
        <img src={img10} alt="" />
        <p>Spiral Notebook</p>
      </div>
    </div>
  );
};

export default Categorys;
