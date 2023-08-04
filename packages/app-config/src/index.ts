import cfg from "config";
import { Config, ServersConfig } from "./interfaces";

const serversConfig: ServersConfig = {
    vietnam_community_league: {
        host: cfg.get("servers.vietnam_community_league.host") || "",
        port: cfg.get("servers.vietnam_community_league.port") || 0,
        public_url: cfg.get("servers.vietnam_community_league.public_url") || "",
    },
};

const config: Config = {
    servers: serversConfig,
};

export default config;
