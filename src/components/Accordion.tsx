import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Image from "next/image";
import ecotrac from "./assets/Ecotrac.png";
import tourifyImage from './assets/tourify.png';
import zammyImage from './assets/zammy.png';
import portfolioImage from './assets/portfolio.png';
import multiplexImage from './assets/multiplex.png';

export default function App() {


    return (
        <Accordion className="text-[.8rem]" variant="bordered">

            <AccordionItem className="border-b-[1px] border-b-solid border-b-[rgba(255,255,255,.3)]" key="1" aria-label="Accordion 1" title="My Portfolio Next App">
                <Image
                    className="hidden sm:block md:w-64 md:h-64 lg:w-[20%] py-2 lg:h-auto object-cover "
                    src={portfolioImage}
                    alt="Portfolio image"
                    width={1050}
                    height={1050}
                />
                Engineered a portfolio app deployed on Vercel, leveraging Next.js
                15 for dynamic content, Next UI for design, and Acertainty UI for an
                engaging user experience. This app highlights personal projects and
                enables easy access to a downloadable resume, contact info, and
                social links.
            </AccordionItem>

            <AccordionItem className="border-b-[1px] border-b-solid border-b-[rgba(255,255,255,.3)]"
                key="2" aria-label="Accordion 2" title="Tourify">
                <Image
                    className="hidden sm:block md:w-64 md:h-64 lg:w-[20%] py-2 lg:h-auto object-cover "
                    src={tourifyImage}
                    alt="Portfolio image"
                    width={1050}
                    height={1050}
                />
                Developed a comprehensive tourism website offering features like hotel search, bookings, virtual tours, flight bookings, and
                user-submitted local stories with the help of the Google API.
            </AccordionItem>

            <AccordionItem className="border-b-[1px] border-b-solid border-b-[rgba(255,255,255,.3)]" key="3" aria-label="Accordion 1" title="Eco - Tracker React App">
                <Image
                    className="hidden sm:block md:w-64 md:h-64 lg:w-[20%] py-2 lg:h-auto object-cover "
                    src={ecotrac}
                    alt="Portfolio image"
                    width={1050}
                    height={1050}
                />
                Eco Tracker Web Application based on MERN stack: It basically calculates carbon emission of your daily activities and also
                provides suggestions to reduce CO2 footprint.
            </AccordionItem>


            <AccordionItem className="border-b-[1px] border-b-solid border-b-[rgba(255,255,255,.3)]" key="4" aria-label="Accordion 3" title="Zammy News">
                <Image
                    className="hidden sm:block md:w-64 md:h-64 lg:w-[20%] py-2 lg:h-auto object-cover "
                    src={zammyImage}
                    alt="Portfolio image"
                    width={1050}
                    height={1050}
                />
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Designed a website using the React Framework and Google's news API displaying current news on sub-topics listed in the nav-bar.
            </AccordionItem>

            <AccordionItem key="5" aria-label="Accordion 4" title="Multiplex Management System">
                <Image
                    className="hidden sm:block md:w-64 md:h-64 lg:w-[20%] py-2 lg:h-auto object-cover "
                    src={multiplexImage}
                    alt="Portfolio image"
                    width={1050}
                    height={1050}
                />
                Developed a project using .NET utilizing MySQL for data management. Specializes in developing efficient and user-friendly
                solutions with a focus on security and performance optimization.
            </AccordionItem>
        </Accordion>
    );
}
