import { ReactNode } from "react";

export type User = {
    first_name: string;
    last_name: string;
}

export type NavLink = {
id: string;
title: string;
}

export type Service = {
title: string;
icon: string; 
}

export type Technology = {
name: string;
icon: string; 
isMobile: string;
}

export type Experience = {
title: string;
company_name: string;
icon: string; 
iconBg: string;
date: string;
points: string[];
}

export type Project = {
name: string;
description: string;
tags: { name: string; color: string }[];
image: string;
source_code_link: string;
}

export type DataContextValue = {
    user: User | null;
    navLinks: NavLink[] | null;
    services: Service[] | null;
    technologies: Technology[] | null;
    experiences: Experience[] | null;
    projects: Project[] | null;
}

export type DataProviderProps = {
    children: ReactNode;
} 

export type BallType = {
    imgUrl:string;
}
  
export type BallCanvasType = {
    icon:string;
}

export type ComputersType ={
    isMobile: boolean;
}

export type ProjectCardType = {
    index:number,
    name:string,
    description:string,
    tags:{name:string,color:string}[],
    image:string,
    source_code_link:string, 
}

export type ServiceCardType = {
    index:number,
    title:string,
    icon:string
}
  
export type OptionType = {
    max: number,
    scale: number,
    speed: number,
}
  
export type ServiceType = {
    title: string,
    icon: string,
}
  
export type NavType = {
    id:string,
    title:string
}

export type ExperienceCardType = { 
    key: number; 
    experience: {
        title: string;
        company_name:string; 
        icon:string;
        iconBg: string;
        date:string;
        points: string[];
    };
}

export type TextVariantType = (delay: number) => { 
    hidden: { 
        y: number;
        opacity: number;
    }; 
    show: { 
        y: number;
        opacity: number;
        transition: {
            type: string;
            duration: number;
            delay: number;
        };
    };
};

export type FadeInType =  (direction:string, type: string, delay:number, duration:number) => {
    hidden: {
        x: number,
        y: number,
        opacity: number,
    },
    show: {
        x: number,
        y: number,
        opacity: number,
        transition: {
        type: string,
        delay: number,
        duration: number,
        ease: string,
        },
    },
};

export type ZoomInType = (delay: number, duration: number) => { 
    hidden: { scale: number; opacity: number; }; 
    show: { scale: number; opacity: number; 
        transition: { 
            type: string;
            delay: number;
            duration: number;
            ease: string;
        };
    };
};

export type SlideInType = (direction: string, type: string, delay: number, duration: number) => {
    hidden: { x: string | number; y: string | number; };
    show: { 
        x: number; 
        y: number; 
        transition: 
        {
            type: string;
            delay: number;
            duration: number;
            ease: string;
        };
    };
};

export type StaggerContainerType = (staggerChildren: any, delayChildren: any) => {
    hidden: {};
    show: { 
        transition: {
            staggerChildren: any;
            delayChildren: any;
        };
    };
};
