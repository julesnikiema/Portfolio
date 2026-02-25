
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Contact, Expertise, HomeLayout, Landing, Realisation, } from './pages'


// creons les routes pour la navigation 

const router = createBrowserRouter (
  [{path:"/", element : <HomeLayout/>,
    children:[
      {index : true , element: < Landing />},
      {path : "Expertise" , element:< Expertise />},
      {path : "Realisation" , element:< Realisation/>},
      {path:"Contact", element : < Contact />},
    ]
   }]
)

createRoot(document.getElementById("root")!).render(<RouterProvider router ={router}/>)




