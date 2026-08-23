import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-slate-900/80 bg-white border border-slate-200 dark:border-slate-800/80 justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-slate-900 dark:text-neutral-100 mb-1 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-slate-600 text-xs dark:text-neutral-400">
          {description}
        </div>
      </div>
    </div>
  );
};
