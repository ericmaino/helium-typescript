import { VersionUtilities } from "../utilities/versionUtilities";

export const keyVaultName = "KeyVaultName";
export const cosmosUrl = "CosmosUrl";
export const cosmosKey = "CosmosKey";
export const cosmosDatabase = "CosmosDatabase";
export const cosmosCollection = "CosmosCollection";
export const appInsightsKey = "AppInsightsKey";

export const portConstant = "4120";

export const webInstanceRole = "WEBSITE_ROLE_INSTANCE_ID";
export const authTypeEnv = "AUTH_TYPE";

export const version = VersionUtilities.getBuildVersion();

export const defaultPageSize = 100;
export const maxPageSize = 1000;

export const sqlGenres = "SELECT VALUE m.genre FROM m where m.type = 'Genre'";
