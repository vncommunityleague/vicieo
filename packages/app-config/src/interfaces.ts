interface ServerConfig {
    host: string;
    port: number;
    public_url: string;
}

export interface ServersConfig {
    vietnam_community_league: ServerConfig;
}

export interface Config {
    servers: ServersConfig;
}
