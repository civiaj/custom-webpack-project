import { classNames } from "shared/lib/";
import cls from "./Loader.module.scss";

interface LoaderProps {
    className?: string;
}

export function Loader({ className }: LoaderProps) {
    return (
        <div className={cls.container}>
            <span className={classNames(cls.loader, {}, [className])}></span>
        </div>
    );
}
