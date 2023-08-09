import { classNames } from "shared/lib";
import cls from "./Skeleton.module.scss";
import { CSSProperties } from "react";

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = (props: SkeletonProps) => {
    const { className, border, height, width } = props;
    const styles: CSSProperties = { width, borderRadius: border, height };

    return (
        <div
            style={styles}
            className={classNames(cls.Skeleton, {}, [className])}
        ></div>
    );
};
