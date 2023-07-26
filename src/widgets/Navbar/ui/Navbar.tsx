import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}
export function Navbar({ className }: NavbarProps) {
    return (
        <nav className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.Navbar__container}></div>
        </nav>
    );
}
