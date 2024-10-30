import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import { ThreeDot } from "react-loading-indicators";


const PrivateRoute = ({children}) => {
    const {currentUser, loading} = useAuth()
    if(loading) {
        return (
          <div>
            <ThreeDot
              variant="bounce"
              color="#32cd32"
              size="medium"
              text=""
              textColor=""
            />
          </div>
        );
    }
    if(currentUser) {
        return children
    }
  return <Navigate to="/login" replace />
}

export default PrivateRoute