import { useEffect, useState } from 'react';
import { readDir, mkdir, exists, BaseDirectory } from '@tauri-apps/plugin-fs';

const useGetAllcourses = () => {
    const [courses, setCourses] = useState<any>()

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const coursesDirExists = await exists('courses', { baseDir: BaseDirectory.AppLocalData })

                // If courses folder is not made, create one.
                if (!coursesDirExists) {
                    await mkdir('courses', { baseDir: BaseDirectory.AppLocalData })
                }

                const courses = await readDir('courses', { baseDir: BaseDirectory.AppLocalData })

                if (courses) {
                    setCourses(courses);
                }

            } catch (err) {
                const coursesDirExists = await exists('courses', { baseDir: BaseDirectory.AppLocalData })

                if (!coursesDirExists) {
                    await mkdir('courses', { baseDir: BaseDirectory.AppLocalData })
                }

                console.error(err)
            }
        }

        fetchCourses();
    }, [])


    return courses
};

export default useGetAllcourses;
