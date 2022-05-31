import fs from "fs";
import path from "path";
import getConfig from "next/config";

export default function handler(req, res) {
  const { serverRuntimeConfig } = getConfig();
  const ourPath = path.join(
    serverRuntimeConfig.PROJECT_ROOT,
    "./public/avatars2.json"
  );

  const json = fs.readFileSync(ourPath, "utf-8");
  const avatars = JSON.parse(json);
  console.log(avatars);

  const toPush = req.query.avatar;
  avatars.push(toPush);

  const stringified = JSON.stringify(avatars);

  fs.writeFileSync(ourPath, stringified, "utf-8");

  const json2 = fs.readFileSync(ourPath, "utf-8");
  res.status(200).json(json2);
}
