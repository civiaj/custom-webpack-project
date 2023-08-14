import { classNames, useInitialEffect } from "shared/lib";
import cls from "./Page.module.scss";
import { MutableRefObject, ReactNode, UIEventHandler, useRef } from "react";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useAppDispatch, useAppSelector } from "app/providers/StoreProvider";
import {
    getScrollResotrationByPath,
    scrollRestorationActions,
} from "features/ScrollRestoration";
import { useLocation } from "react-router-dom";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
    const { className, children, onScrollEnd } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const dispatch = useAppDispatch();
    const location = useLocation();
    const scrollPosition = useAppSelector((state) =>
        getScrollResotrationByPath(state, location.pathname)
    );

    const handleScroll: UIEventHandler<HTMLDivElement> = useThrottle((e) => {
        dispatch(
            scrollRestorationActions.setScrollPosition({
                path: location.pathname,
                scrollPosition: e.currentTarget.scrollTop,
            })
        );
    }, 500);

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.wrapper, {}, [className])}
            onScroll={handleScroll}
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
