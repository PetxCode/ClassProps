import { createBrowserRouter } from "react-router-dom"
import AdminLayout from "../components/block/admin/AdminLayout"

import Display from "../pages/Display"
import ClassWork from "../pages/ClassWork"
import ContactPage from "../pages/ContactPage"
import AboutPage from "../pages/AboutPage"
import ChildrenState from "../components/reUse/ChildrenState"
import Register from "../pages/Register"
import SignUp from "../pages/Register/SignUp"
import Signin from "../pages/Register/Signin"

export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <ClassWork />
            },
            {
                path: "display",
                element: <Display />
            },
            {
                path: "about",
                element: <AboutPage />
            },
            {
                path: "register",
                element: <Register>
                    <SignUp />
                </Register>
            },
            {
                path: "sign-in",
                element: <Register>
                    <Signin />
                </Register>
            },

            {
                path: "contact",
                element: <ChildrenState>
                    <ContactPage />
                </ChildrenState>
            }
        ]

    }
]) 