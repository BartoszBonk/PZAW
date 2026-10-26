import { useState, type ReactNode } from "react";

interface SectionProps{
    
    Title : string
    children: ReactNode

}

function Section({Title, children}: SectionProps){
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div>
            <h2 onClick={() => setIsOpen(!isOpen)}>
                {Title} {isOpen ? "▾" : "▸"} 
            </h2>
            {isOpen && children}
        </div>
    )

}

export default Section