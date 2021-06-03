import React, { useMemo } from 'react';

import { useGetRepositoryCommmitStatistics } from '../../../../utils/queries/Github';

import { useRepositoryDefinition } from '../../../../context/RepositoryDefinitionContext';
import HeatMap, { HeatMapData } from '../../../HeatMap/HeatMap';
import { format } from 'date-fns';

const daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CommitStatistics = () => {
    const { owner, repository } = useRepositoryDefinition();

    const { data, isLoading } = useGetRepositoryCommmitStatistics(owner, repository);

    const heatmapData = useMemo<HeatMapData>(() => {
        console.log(data)
        const formattedData: HeatMapData = [];

        data?.forEach(d => {
            // const group = format(d.week, 'dd/MM');
            const group = d.week;
            console.log(group)
            d.days.forEach((dayValue, dayIdx) => {
                formattedData.push({
                    group: group as unknown as string,
                    value: daysArray[dayIdx],
                    data: dayValue,
                });
            });
        });

        return formattedData;
    }, [data]);
    console.log(heatmapData);
    return (
        <div>
            <HeatMap data={heatmapData} />
        </div>
    );
};

export default CommitStatistics;