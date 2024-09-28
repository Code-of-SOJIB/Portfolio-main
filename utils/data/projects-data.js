import Image from "next/image";
import Ecommerce from "../../public/image/Ecommerce.jpg";
import Natto from "../../public/image/Natto.jpg";

import Gymnasium from "../../public/image/Gymnasium.jpg";
import Proffiesional from "../../public/image/Proffiesional.jpg";
import Innovate from "../../public/image/Innovate.jpg";



export const projectsData = [
    {
        id: 1,
        name: 'Ecommerce Website ',
        description: "I used react js in fronend and banckend node js",
        image: <Image src={Ecommerce} alt="secondimage"/>,
    },
    {
        id: 2,
        name: 'Gymnasium',
        description: "Landing page Design",
        image: <Image src={Gymnasium} alt="secondimage"/>,
    },
    {
        id: 3,
        name: 'Professional Homepage',
        description: "webpage using bootstrap and responsive design",
        image: <Image src={Proffiesional} alt="secondimage"/>,
    },
    {
        id: 4,
        name: 'Natto',
        description: "Landing page using Next.js",
        image: <Image src={Natto} alt="secondimage"/>,
    },
    {
        id: 5,
        name: 'Innovate ',
        description: "Innovate website design",
        image: <Image src={Innovate} alt="secondimage"/>,
    },
    
]