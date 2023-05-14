const spawn = require("node:child_process").spawn;
const config = require("@vncommunityleague/app-config").default;

const PORT = process.env.PORT || config.servers.vietnam_community_league.port || 4000;

const startServer = (command) => {
    spawn("npx", ["next", command, "-p", PORT], {
        shell: true,
        stdio: "inherit",
    });
};

switch (process.env.NODE_ENV) {
    case "production":
        startServer("start");
        break;

    default:
        startServer("dev");
        break;
}
