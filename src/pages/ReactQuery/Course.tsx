import React from 'react'
import { useParams } from 'react-router-dom';

function CoursePage() {
    const { courseId }   = useParams();
    const id = courseId || "0"
  return (
    <>
        <div>CoursePage</div>
    

    </>
  )
}

export default CoursePage