import "./App.css";

import { AuthProvider } from "./firebase/auth";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/authentication/signin";
import Signup from "./pages/authentication/signup";
import Dashboard from "./pages/dashboard";
import Home from './pages/home';

import { ProtectedRoute } from './helpers/routes';


function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path='/dashboard' element={<ProtectedRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;
