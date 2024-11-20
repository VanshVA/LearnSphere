import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import Authentication from './Authentication/Authentication'
import PrivateRoute from './utils/Private/PrivateRoute/PrivateRoute';
import AdminDashboard from './components/Dashboards/Admin/AdminDashboard';
import StudentDashboard from './components/Dashboards/Student/StudentDashboard';
import TeacherDashboard from './components/Dashboards/Teacher/TeacherDashboard';
import Logo from './components/Logo/Logo';

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Homepage/>} path='/'/>
          <Route element={<Authentication/>} path='/login'/>
          <Route path="/admin-dashboard" element={<PrivateRoute requiredRole="admin" />}>
            <Route path="" element={<AdminDashboard />} />
          </Route>
          <Route path="/teacher-dashboard" element={<PrivateRoute requiredRole="teacher" />}>
            <Route path="" element={<TeacherDashboard />} />
          </Route>
          <Route path="/student-dashboard" element={<PrivateRoute requiredRole="student" />}>
            <Route path="" element={<StudentDashboard />} />
          </Route>
        </Routes>
      </Router>    
    </>
  )
}

export default App