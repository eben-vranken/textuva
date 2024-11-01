'use client'
import useGetAllcourses from "@/hooks/courses/useGetAllCourses";

export default function Courses() {
  const courses = useGetAllcourses();

  console.log(courses)

  return (
    <section>
      <h1 className="font-medium text-lg">
        Courses
      </h1>

      {
        courses.length > 0 ?
          <section></section>
          :
          <span>No courses yet!</span>
      }
    </section>
  );
}
