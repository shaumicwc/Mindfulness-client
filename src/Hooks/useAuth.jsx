import { useContext } from "react"
import { AuthContext, a } from '../Providers/AuthProvider'

export const useAuth = () => {
    const { user, setUser, loading, setLoading, createUser, signInUser, googleSignInUser, signOutUser } = useContext(AuthContext)
}
