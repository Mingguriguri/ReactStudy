import React from "react";
// student 배열
const student = [
    {id: 1, name: "choi", email: "choi@naver.com"},
    {id: 2, name: "kim", email: "kim@naver.com"},
    {id: 3, name: "park", email: "park@naver.com"},  
];

// student 컴포넌트
const StudentItem = ({ student }) => (
    <div>
        <b> [{student.id}] </b>
        <span>
            {student.name}'s email {student.email} {" "}
        </span>
    </div>
);


const Student = () => {
    return (
        <div>
            <h2>Student List</h2>
            {
                student.map((std) => (
                    <StudentItem student={std} />
                ))
            }
        </div>
    );
};

// 내보내기
export default Student;