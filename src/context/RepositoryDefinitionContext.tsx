import { createContext, useContext } from "react";
import { RepositoryDefinition } from "../utils/types";

export type RepostiryDefinitionContextValueType = RepositoryDefinition & { toggleQueriesEnabled: () => void };
export const RepositoryDefinitionContext = createContext<RepostiryDefinitionContextValueType | null>(null);

export const useRepositoryDefinition = () => {
    const repositoryDefinition = useContext(RepositoryDefinitionContext) || {} as RepostiryDefinitionContextValueType;

    return repositoryDefinition;
};