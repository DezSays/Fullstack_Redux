import React, {useState, useEffect} from "react";

const App = () => {

  const [studentData, setStudentData] = useState([])

  useEffect(() => {

    const getData = async() => {

      let result = await fetch('/api')
      let data = await result.json();

      console.log(data);
      setStudentData(data) //this takes the data pulled from the api and makes it part of our state so we can map through it 
    }
    getData();

  }, [])


  return (
    
      <>
  <h1>Howdy</h1>

  <ul>
    {studentData.map(student=>{
     return <li key={student.id}>{student.name}</li>
    })}
  </ul>
      </>
    
  )
}

export default App;
