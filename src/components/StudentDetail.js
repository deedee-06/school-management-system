import React from 'react';
import StudentData from './StudentData';
import StudentList from './studentList';

const StudentDetail = ({ student }) => {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.picture} alt={student.name}</td>
      <td>{student.email}</td>
      <td>{student.taskScores}</td>
    </tr>
  );
};

export default StudentDetail;