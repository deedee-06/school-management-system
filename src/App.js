import React from 'react';
import StudentList from './StudentList';
import StudentData from './StudentData'; 
import StudentDetail from './StudentDetail';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
     
      <StudentDetail student={studentData[0]} />
      <StudentData picture={studentData[0].picture} alt={studentData[0].name} />
      <TaskScore taskScores={studentData[0].taskScores} />

      <StudentList students={studentData} />
    </div>
  );
};

export default App;