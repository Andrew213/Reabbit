import fs from 'fs';
import path from 'path';
const appDirectory = fs.realpathSync(process.cwd());

export const env = {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL_INTERNAL,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
};

const myAlias = {
    '@': path.resolve(appDirectory, './src'),
    '@hooks': path.resolve(appDirectory, './src/hooks'),
    '@store': path.resolve(appDirectory, './src/store'),
    '@icons': path.resolve(appDirectory, './src/icons'),
    '@img': path.resolve(appDirectory, './public/img'),
};

export function webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    config.resolve.alias = Object.assign({}, config.resolve.alias, myAlias);
    config.module.rules.push({
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    svgoConfig: { plugins: [{ removeViewBox: false }] },
                },
            },
        ],
    });
    return config;
}
// export const sassOptions = {
//   includePaths: ["./src"],
//   prependData: `@import "~@styles/variables.scss";`,
// };
