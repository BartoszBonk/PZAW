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
            {isOpen && (
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-4">
                    {children}
                </div>
            )}
        </div>
    )

}

export default Section