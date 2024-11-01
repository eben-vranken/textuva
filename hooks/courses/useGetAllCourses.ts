import { useEffect, useState } from 'react';
import { readDir, BaseDirectory, DirEntry } from '@tauri-apps/plugin-fs';

interface DirectoryEntry extends DirEntry {
    children: DirEntry[];
}


const useGetAllcourses = () => {
    const [folders, setFolders] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFolders = async () => {
            try {
                // Read the directory contents
                const entries: DirEntry[] = await readDir('courses', {
                    baseDir: BaseDirectory.Home,
                });

                // Filter for directories and get their names
                const folderNames = entries
                    .filter((entry): entry is DirectoryEntry => 'children' in entry)
                    .map(entry => entry.name);

                setFolders(folderNames);
            } catch (err) {
                setError(`Failed to read folders: ${err}`);
            }
        };

        fetchFolders();
    }, []);

    return { folders, error };
};

export default useGetAllcourses;
