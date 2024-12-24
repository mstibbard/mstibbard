import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import typography from "npm:@tailwindcss/typography";

const site = lume({ src: "./src" });
site.use(tailwindcss({
  extensions: [".html", ".tsx"],
  options: {
    plugins: [typography],
  },
}));
site.use(postcss());

export default site;
