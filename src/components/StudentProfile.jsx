import { useEffect } from "react";

function StudentProfile({ name, department, year, count }) {
  
  useEffect(() => {
    const previousTitle = document.title;

    document.title = `Practice Sessions: ${count}`;

    return () => {
      document.title = previousTitle;
    };
  }, [count]);

  return (
    <div className="profile">
      <h2>Student Profile</h2>

      <p>Name: {name}</p>
      <p>Department: {department}</p>
      <p>Year: {year}</p>

      <h3>Practice Sessions: {count}</h3>
    </div>
  );
}

export default StudentProfile;