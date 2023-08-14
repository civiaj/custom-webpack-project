import { classNames } from "shared/lib";
import cls from "./Page.module.scss";
import { MutableRefObject, ReactNode, useRef } from "react";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
    const { className, children, onScrollEnd } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.wrapper, {}, [className])}
        >
            <div className={cls.page}>
                {children}
                <div
                    style={{ height: "5px", backgroundColor: "red" }}
                    ref={triggerRef}
                />
            </div>
        </main>
    );
};
