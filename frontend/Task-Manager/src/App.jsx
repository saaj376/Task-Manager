import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from "./pages/User/Dashboard";
import SignUp from "./pages/Auth/SignUp";
import login from "./pages/Auth/Login";
import ManageTasks from "./pages/Admin/ManageTasks";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<login/>} />
          <Route path="/signUp" element={<SignUp/>} />

          {/* Admin Routes */}
          <Route element ={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/Dashboard" element={<Dashboard />} />
            <Route path="/admin/tasks" element={<ManageTasks />} />
            </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;