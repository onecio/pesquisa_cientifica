const esbuild = require("esbuild");

async function build() {
    await esbuild.build({
        entryPoints: ["styles.css"],
        outfile: "styles.min.css",
        minify: true,
        bundle: false,
        logLevel: "info"
    });

    await esbuild.build({
        entryPoints: ["main.js"],
        outfile: "main.min.js",
        minify: true,
        bundle: false,
        target: ["es2020"],
        logLevel: "info"
    });
}

build().catch((error) => {
    console.error(error);
    process.exit(1);
});
