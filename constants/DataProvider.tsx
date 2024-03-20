// DataContext.tsx
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { DataContextValue, DataProviderProps, User, Experience, NavLink, Project, Service, Technology } from '@/types/types';


// Create a context with initial values
const DataContext = createContext<DataContextValue>({
    user: null,
    navLinks: null,
    services: null,
    technologies: null,
    experiences: null,
    projects: null,
});

// Custom hook to access the context value
export const useData = () => useContext(DataContext);

// Data provider component
const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [navLinks, setNavLinks] = useState<NavLink[] | null>(null);
    const [services, setServices] = useState<Service[] | null>(null);
    const [technologies, setTechnologies] = useState<Technology[] | null>(null);
    const [experiences, setExperiences] = useState<Experience[] | null>(null);
    const [projects, setProjects] = useState<Project[] | null>(null);
    const url = process.env.API_BASE_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await axios.get<User>(url+'/user');
                setUser(userResponse.data);

                const navLinksResponse = await axios.get<NavLink[]>(url+'/navlinks');
                setNavLinks(navLinksResponse.data);

                const servicesResponse = await axios.get<Service[]>(url+'/services');
                setServices(servicesResponse.data);

                const technologiesResponse = await axios.get<Technology[]>(url+'/technologies');
                setTechnologies(technologiesResponse.data);

                const experienceResponse = await axios.get<Experience[]>(url+'/experiences');
                setExperiences(experienceResponse.data);

                const projectResponse = await axios.get<Project[]>(url+'/projects');
                setProjects(projectResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ user, navLinks, services, technologies, experiences, projects }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;