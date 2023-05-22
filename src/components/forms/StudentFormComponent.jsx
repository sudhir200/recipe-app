import React from "react";
import "./form.css";
function StudentFormComponent(props) {
  const [student, setStudent] = React.useState({
    name: "",
    rollNo: "",
    class: "",
    gender: "",
  });

  return (
    <div className={"student-form"}>
      <h3>Student Form</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(student);
        }}
        style={{ display: "grid", gap: "1rem" }}
      >
        <input
          onChange={(e) => {
            student.name = e.target.value;
            setStudent({ ...student });
          }}
          required
          value={student.name}
          placeholder={"name"}
        />
        <input
          onChange={(e) => {
            student.rollNo = e.target.value;
            setStudent({ ...student });
          }}
          required
          value={student.rollNo}
          placeholder={"rollNo"}
        />
        <input
          onChange={(e) => {
            student.class = e.target.value;
            setStudent({ ...student });
          }}
          required
          value={student.class}
          placeholder={"class"}
        />
        <select
          onChange={(e) => {
            student.gender = e.target.value;
            setStudent({ ...student });
          }}
          required
          value={student.gender}
          placeholder={"gender"}
        >
          <option value={"MALE"}>MALE</option>
          <option value={"FEMALE"}>FEMALE</option>
          <option value={"OTHERS"}>OTHERS</option>
        </select>
        <button type={"submit"}>submit</button>
      </form>
    </div>
  );
}

export default StudentFormComponent;
