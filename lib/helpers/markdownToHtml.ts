import remark from "remark";
import html from "remark-html";
import prism from "remark-prism";

const markdownToHtml = async (markdown: string) => {
  const result = await remark().use(prism).use(html).process(markdown);
  return result.toString();
};

export default markdownToHtml;
