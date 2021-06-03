import React, { useState } from 'react';

import LandingPage from '../LandingPage/LandingPage';
import RepositoryPage from '../RepositoryPage/RepositoryPage';

import { RepositoryDefinitionContext, RepostiryDefinitionContextValueType } from '../../context/RepositoryDefinitionContext';

const MainContainer = () => {
    const [owner, setOwner] = useState('');
    const [repository, setRepository] = useState('');
    const [branch, setBranch] = useState('');

    const [queriesEnabled, setQueriesEnbaled] = useState(false);

    const toggleQueriesEnabled = () => {
        setQueriesEnbaled(!queriesEnabled);
    };

    const repositoryDefinition: RepostiryDefinitionContextValueType = {
        owner,
        repository,
        branch,
        toggleQueriesEnabled,
    };

    return (
        <RepositoryDefinitionContext.Provider value={repositoryDefinition}>
            {
                queriesEnabled ?
                    (
                        <RepositoryPage />
                    )
                    :
                    (
                        <LandingPage setOwner={setOwner} setRepository={setRepository} setBranch={setBranch} />
                    )

            }
        </RepositoryDefinitionContext.Provider>
    );
};

export default MainContainer;