
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {  HomeLayout, Home } from './pages'


// creons les routes pour la navigation 

const router = createBrowserRouter (
  [{path:"/", element : <HomeLayout/>,
    children:[
      {index : true , element: < Home />}
      
    ],
    
   }],
   {
    basename: import.meta.env.BASE_URL
  }
)

createRoot(document.getElementById("root")!).render(<RouterProvider router ={router}/>)




