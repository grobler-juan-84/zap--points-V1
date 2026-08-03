import { ClassCard } from "./ClassCard";
import { tempClassCardContent } from "../content/tempClassCardContent";

export function CardsGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
            {tempClassCardContent.map((item) => (
                <ClassCard
                    key={item.className}
                    icon={item.icon}
                    className={item.className}
                    students={item.students} />
            ))}
        </div>
    )
}