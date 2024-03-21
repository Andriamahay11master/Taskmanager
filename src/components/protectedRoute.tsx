import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({ children, user }: any) => {
    return user && localStorage.getItem('isLoggedIn') === 'true' ? children : <Navigate to="/signin" replace/>
}