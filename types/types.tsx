import { fadeIn } from "@/utils/motion"
import { StaticImageData } from "next/image"


export type BallType = {
    imgUrl:StaticImageData;
}
  
export type BallCanvasType = {
    icon:StaticImageData;
}

export type ComputersType ={
    isMobile: boolean;
}

export type ProjectCardType = {
    index:number,
    name:string,
    description:string,
    tags:{name:string,color:string}[],
    image:StaticImageData,
    source_code_link:string, 
}

export type ServiceCardType = {
    index:number,
    title:string,
    icon:StaticImageData
}
  
export type OptionType = {
    max: number,
    scale: number,
    speed: number,
}
  
export type ServiceType = {
    title: string,
    icon: StaticImageData,
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
        icon:StaticImageData;
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
