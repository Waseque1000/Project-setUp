// ?যে কোন প্রোজেক্ট  set up  করের জন্য ফাইল stracture  অনেক গুরুত্বপূর্ণ ...
// !src => Routes folder
// !       => Routes.jsx

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router; // ! file obossoi export korte hbe

// ? main.jsx er vitore
<RouterProvider router={router} />;

// ! Layout file er vitore main.jsx 
 // ? file er vitore 
         

 import { Outlet } from "react-router-dom";

 const Main = () => {
   return (
     <div>
       <Outlet></Outlet>
     </div>
   );
 };
 
 export default Main;
 
