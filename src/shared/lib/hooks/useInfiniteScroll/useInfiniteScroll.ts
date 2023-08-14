import { MutableRefObject, useEffect } from "react";

interface UseInfiniteScrollProps {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = (props: UseInfiniteScrollProps) => {
    const { callback, triggerRef, wrapperRef } = props;

    useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;

        let observer: IntersectionObserver | undefined;
        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: "5px",
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) callback();
            }, options);
            observer.observe(triggerElement);
        }

        return () => {
            if (observer) observer.unobserve(triggerElement);
        };
    }, [triggerRef, wrapperRef, callback]);
};
