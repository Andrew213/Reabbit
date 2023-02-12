import HtmlWebpackPlugin from "html-webpack-plugin";
import path, {
  basename,
  dirname,
  relative,
  resolve as pathResolve,
} from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const entry = "./src/index.js";
export const output = {
  path: pathResolve(__dirname, "dist"),
  filename: "index_bundle.js",
};

export const plugins = [
  new HtmlWebpackPlugin({
    template: pathResolve(__dirname, "public", "index.html"),
  }),
];

export const resolve = {
  extensions: [".ts", ".tsx", ".js"],
  extensionAlias: {
    ".js": [".js", ".ts"],
    ".cjs": [".cjs", ".cts"],
    ".mjs": [".mjs", ".mts"],
  },
};

export const module = {
  rules: [{ test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" }],
};
