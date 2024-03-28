import React from 'react';
import StudentDetail from './studentDetail';



const StudentList = ({ students }) => {
    return (
        <div>
            <h2>Student List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Picture</th>
                        <th>Email</th>
                        <th>Task Scores</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <StudentDetail key={student.id} student={student} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;