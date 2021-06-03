import React, { useRef } from 'react';

import * as d3 from 'd3';

export const useD3 = (renderChartFn: (element: d3.Selection<Element | null, any, null, undefined>) => void, dependencies: any[]) => {
    const ref = useRef<Element>(null);

    React.useEffect(() => {
        renderChartFn(d3.select(ref.current));
    }, [renderChartFn, ...dependencies]);

    return ref;
}