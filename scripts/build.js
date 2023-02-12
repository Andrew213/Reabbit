import webpack from "webpack";
import * as configFactory from "../webpack.config.js";

webpack(configFactory).run((err, stats) => {
  //   console.log(`err `, err);
  //   console.log(`stats `, stats);
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }
  const info = stats.toJson();
  if (stats.hasErrors()) {
    console.error(info.errors);
  }
  //   if (stats.hasWarnings()) {
  //     console.warn(info.warnings);
  //   }
  console.log(
    stats.toString({
      colors: true,
    })
  );
});
