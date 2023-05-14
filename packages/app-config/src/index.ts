import cfg from "config";

interface ServerConfig {
    host: string;
    port: number;
    public_url: string;
}

interface ServersConfig {
    vietnam_community_league: ServerConfig,
}

export interface Config {
    servers: ServersConfig;
};

const serversConfig: ServersConfig = {
    vietnam_community_league: {
        host: cfg.get("servers.vietnam_community_league.host") || "",
        port: cfg.get("servers.vietnam_community_league.port") || 0,
        public_url: cfg.get("servers.vietnam_community_league.public_url") || "",
    }
};

export default {
    servers: serversConfig,
};
