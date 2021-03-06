/**
 * Utilities for determining build version.
 */
import * as fs from "fs";

export class VersionUtilities {

    // build and return the version string based on last build date time
    // build time based on dist/server.js file
    public static getBuildVersion(): string {
        const lastBuildTime = fs.statSync("./dist/server.js").mtime.toISOString();

        // remove trailing "0" from package.json version
        let version = process.env.npm_package_version.substring(0, 4);

        // add "MMdd.HHmm"
        version = version + lastBuildTime.substring(5, 7) + lastBuildTime.substring(8, 10)
                  + "." + lastBuildTime.substring(11, 13) + lastBuildTime.substring(14, 16);

        return version;
    }
}
