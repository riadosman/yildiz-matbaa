import React from "react";
import Categorys from "./../components/Categorys/Categorys";
import styles from "./style.module.css";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdPrint } from "react-icons/io";
const Home = () => (
  <div>
    <Categorys />
    <div className={styles.advantages}>
      <div>
        <TbTruckDelivery />
        توصيل سريع اطلب الطلب الخاص بك وسوف نعمل على توصيله باسرع وقت
      </div>
      <div>
        <IoMdPrint />
        طباعة عالية الجودة نقوم باستخدام افضل الماكينات في الطباعة
      </div>
    </div>
    <h1 className={styles.title}>من اعمالنا السابقة</h1>
    <h1 className={styles.title}>يمكنك الطلب عن طريق قسم الاصناف</h1>
    <div className={styles.imgs}></div>
    <div className={styles.textContent}>
      <h3>Yıldız Matbaa -- افضل دار طباعة على الإنترنت في تركيا</h3>
      <p>أعمال الطباعة عبر الإنترنت</p>
      <p>كل ما تحتاجه موجود في دار الطباعة Yıldız Matbaa!</p>
      <p>أكثر من 100 منتج طباعة في انتظارك بأسعار مناسبة </p>
    </div>
  </div>
);

export default Home;
