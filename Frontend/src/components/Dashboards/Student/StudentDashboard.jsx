import React, { useState } from 'react';
import '../Dashboard.css';

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="dashboard-home-content">
            <h2 className="dashboard-active-section">Home</h2>
            <section className="dashboard-welcome">
              <h3>Welcome, Jane Pearson!</h3>
              <p>Check out your courses, assignments, and more.</p>
            </section>
            <section className="dashboard-stats">
              <div className="dashboard-stat">
                <h3>3</h3>
                <p>Courses Enrolled</p>
              </div>
              <div className="dashboard-stat">
                <h3>5</h3>
                <p>Assignments Pending</p>
              </div>
              <div className="dashboard-stat">
                <h3>95%</h3>
                <p>Attendance</p>
              </div>
            </section>
          </div>
        );
      case 'mycourses':
        return (
          <div className="dashboard-courses-content">
            <h2 className="dashboard-active-section">My Courses</h2>
            <div className="dashboard-course">
              <h4>React Development</h4>
              <p>Progress: 70%</p>
              <div className="dashboard-progress-bar">
                <div className="dashboard-progress" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="dashboard-course">
              <h4>Data Science with Python</h4>
              <p>Progress: 45%</p>
              <div className="dashboard-progress-bar">
                <div className="dashboard-progress" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div className="dashboard-course">
              <h4>Machine Learning Basics</h4>
              <p>Progress: 85%</p>
              <div className="dashboard-progress-bar">
                <div className="dashboard-progress" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        );
      case 'attendance':
        return (
          <div className="dashboard-attendance-content">
            <h2 className="dashboard-active-section">Attendance</h2>
            <p>Mark your attendance below:</p>
            <div className="dashboard-calendar">
              {/* Placeholder for a calendar component */}
              <div className="dashboard-calendar-day">
                <span>1</span>
                <button>Mark Present</button>
              </div>
              <div className="dashboard-calendar-day">
                <span>2</span>
                <button>Mark Present</button>
              </div>
              {/* Add more calendar days as needed */}
            </div>
          </div>
        );
      case 'assignments':
        return (
          <div className="dashboard-assignments-content">
            <h2 className="dashboard-active-section">Assignments</h2>
            <div className="dashboard-assignment">
              <h4>Assignment 1: React Basics</h4>
              <p>Due Date: 10th Dec 2024</p>
              <p>Status: Pending</p>
            </div>
            <div className="dashboard-assignment">
              <h4>Assignment 2: Data Science Project</h4>
              <p>Due Date: 15th Dec 2024</p>
              <p>Status: Completed</p>
            </div>
            {/* Add more assignments as needed */}
          </div>
        );
      case 'results':
        return (
          <div className="dashboard-results-content">
            <h2 className="dashboard-active-section">Results</h2>
            <div className="dashboard-result">
              <h4>React Basics</h4>
              <p>Score: 85%</p>
            </div>
            <div className="dashboard-result">
              <h4>Data Science Project</h4>
              <p>Score: 90%</p>
            </div>
            {/* Add more results as needed */}
          </div>
        );
      case 'profile':
        return (
          <div className="dashboard-profile-content">
            <h2 className="dashboard-active-section">Profile</h2>
            <div className="dashboard-profile-details">
              <p><strong>Name:</strong> Jane Pearson</p>
              <p><strong>Email:</strong> jane.pearson@example.com</p>
              <p><strong>Phone Number:</strong> 123-456-7890</p>
              <p><strong>Age:</strong> 28</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>Bio:</strong> A passionate learner and coder.</p>
              <button>Edit Profile</button>
            </div>
          </div>
        );
      default:
        return <div>Home Content</div>;
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="dashboard-logo">tabler</div>
        <div className="dashboard-user-info">
          <span className="dashboard-user-name">Jane Pearson</span>
          <span className="dashboard-user-role">Administrator</span>
        </div>
      </header>
      <nav className="dashboard-nav">
        <ul>
          <li 
            className={activeSection === 'home' ? 'active' : ''} 
            onClick={() => setActiveSection('home')}
          >
            Home
          </li>
          <li 
            className={activeSection === 'mycourses' ? 'active' : ''} 
            onClick={() => setActiveSection('mycourses')}
          >
            My Courses
          </li>
          <li 
            className={activeSection === 'attendance' ? 'active' : ''} 
            onClick={() => setActiveSection('attendance')}
          >
            Attendance
          </li>
          <li 
            className={activeSection === 'assignments' ? 'active' : ''} 
            onClick={() => setActiveSection('assignments')}
          >
            Assignments
          </li>
          <li 
            className={activeSection === 'results' ? 'active' : ''} 
            onClick={() => setActiveSection('results')}
          >
            Results
          </li>
          <li 
            className={activeSection === 'profile' ? 'active' : ''} 
            onClick={() => setActiveSection('profile')}
          >
            Profile
          </li>
        </ul>
      </nav>
      <main className="dashboard-main">
        {renderContent()}
      </main>
    </div>
  );
};

export default StudentDashboard;
