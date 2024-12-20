import { ReactNode } from "react";

const SectionTitle = ({title, children}: {title:string, children: ReactNode}) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-sm w-72 text-center">
        {children}
        {/* The place where I seek knowledge and skills, both formal and informal
        education. */}
      </p>
    </div>
  );
}

export default SectionTitle