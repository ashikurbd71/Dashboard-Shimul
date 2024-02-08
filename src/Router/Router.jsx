
import { createBrowserRouter } from 'react-router-dom';
import DBlayout from '../Layout/DBlayout';

const router = createBrowserRouter([

    {
        path:"/",
        element:<DBlayout/>
    }
])

export default router