import Elysia from "elysia";

 async function translate(text: string, target: string) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${target}&dt=t&q=${encodeURIComponent(
    text
  )}`;

  const response = await fetch(url);
  const data = await response.json();
  return data[0][0][0];
}

const translateRouter = new Elysia({prefix: "/translate"})
.get("/:text/:target", async ({params}) => {
    const {text, target} = params;
    return await translate(text, target);
}, {
    tags: ["Utility"]
})

export default translateRouter;