import { useMemo } from "react";
import { InfiniteData } from "react-query";

export const useMergeInfiniteQueryData = <T extends any[]>(data: InfiniteData<T> | undefined): T => {
    const mergedData = useMemo(() => {
        if (!data)
            return [] as unknown as T;

        const mergedData: T = [] as unknown as T;
        data?.pages.forEach((p) => {
            mergedData.push(...p);
        });

        return mergedData;
    }, [data]);

    return mergedData;
};