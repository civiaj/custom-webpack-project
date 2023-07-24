import { classNames } from "shared/lib";
import cls from "./SuspenseLoader.module.scss";
import { Loader } from "shared/ui/Loader";

interface SuspenseLoaderProps {
    className?: string;
}

export function SuspenseLoader({ className }: SuspenseLoaderProps) {
    return (
        <div className={classNames(cls.SuspenseLoader, {}, [className])}>
            <Loader />
        </div>
    );
}
