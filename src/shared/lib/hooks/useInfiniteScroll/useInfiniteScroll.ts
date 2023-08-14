import { MutableRefObject, useEffect } from "react";

interface UseInfiniteScrollProps {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = (props: UseInfiniteScrollProps) => {
    const { callback, triggerRef, wrapperRef } = props;

    useEffect(() => {
        let observer: IntersectionObserver | undefined;
        if (callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: "5px",
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) callback();
            }, options);
            observer.observe(triggerRef.current);
        }

        return () => {
            // ref will never change
            // eslint-disable-next-line
            if (observer) observer.unobserve(triggerRef.current);
        };
    }, [triggerRef, wrapperRef, callback]);
};
