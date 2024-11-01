'use client'
import useGetAllcourses from "@/hooks/courses/useGetAllCourses";
import { CircleNotch } from "@phosphor-icons/react";

export default function Courses() {
  const courses = useGetAllcourses();

  console.log(courses)

  return (
    <section className="h-full flex flex-col">
      {
        courses ? <section className="h-full">
          {courses[0] == null ?
            <span className="flex h-full items-center justify-center opacity-25">No courses yet!</span>
            :
            <section></section>
          }
        </section>
          :
          <section className="flex h-full items-center justify-center">
            <CircleNotch size={30} className="opacity-50 animate-spin" />
          </section>
      }
    </section>
  );
}
