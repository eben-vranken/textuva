'use client'
import useGetAllcourses from "@/hooks/courses/useGetAllCourses";

export default function Courses() {
  const { folders, error } = useGetAllcourses();

  console.log(folders, error)

  return (
    <section>
      <h1 className="font-medium text-lg">
        Courses
      </h1>
    </section>
  );
}
