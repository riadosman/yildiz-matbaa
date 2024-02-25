f02362cb97d9544217822a3fe71257125a5ee3ae49eb673f08a4f165b1ffbc5444d7946aef3faa31eb63621e6867a1c02df4e062293beada42e615122ce833548ec4bcb78ec7837608fa510b35424fa7271cf783e482de8d7e07d4b8a641253fc57dd614cce21a4d6733a832fc7b34750c6247abcb63fff3f8fff0217aca40e9

<!-- 
// import React, { useState,useEffect } from "react";
// import styles from "./style.module.css";
// import productStyle from "../components/Products/products.module.css";
// import { Link } from "react-router-dom";
// import { AllproductsData } from "./../data";
// import { FaCartShopping } from "react-icons/fa6";
// const AllProducts = () => {
//   let data = [];
//   useEffect(() => {
//     handleData()
//   }, [data]);
//   const handleData = (e = "") => {
//     AllproductsData.then((res) => {
//       if (e) {
//         data = res;
//       } else {
//         data = res.filter((product) => product.attributes.category === e);
//       }
//     });
//     return data;
//   };
//   handleData()
//   const categorys = [
//     "بزنس كارت ",
//     "بروشور",
//     "فلاير",
//     "فورما",
//     "ستيكر",
//     "أكياس كرتون ",
//     "أكياس ورقية ",
//     "أكياس نايلون ",
//     "منيو مطاعم ",
//     "علب هدايا ",
//     "علب لوكس ",
//     "علب حلويات",
//     "دفتر ملاحظات",
//     "دفتر هارد كفر",
//     "دفتر جلد",
//     "أجندة",
//     " رزنامة",
//     "ظرف كرتون ",
//     " ظرف ورقي ",
//     "فولدر",
//     "كاتلوج",
//     "أعلام",
//   ];
//   return (
//     <div>
//       <ul className={`${styles.dropdown_menu}`}>
//         {categorys.map((e, i) => (
//           <li key={i} className={styles.dropdown_item}>
//             <p
//               className="dropdown-item"
//               onClick={() => {
//                 handleData(e);
//               }}
//             >
//               {e}
//             </p>
//           </li>
//         ))}
//       </ul>
//       <div className={productStyle.cards}>
//         {data.map((e, i) => (
//           <Link
//             key={i}
//             className={productStyle.card}
//             to={`/info/${i}?current=${e.id}`}
//           >
//             <img
//               src={`http://localhost:1337${e.attributes.img.data.attributes.url}`}
//               alt="img"
//             />
//             <p>{e.attributes.title}</p>
//             <p>{e.attributes.price}</p>
//             <Link
//               className="btn btn-info text-light"
//               to="/cart"
//               // onClick={() => {
//               //   setState((prevState) => [...prevState, { title: e.title,price: e.price,img:e.img }]);
//               // }}
//             >
//               <FaCartShopping /> Add To Card
//             </Link>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllProducts;
 -->
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
