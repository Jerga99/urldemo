

import fs from "fs";

export function setParamsData(data) {
  const hash = "items";
  const tmpFile = `/tmp/${hash}.json`

  fs.writeFileSync(tmpFile, JSON.stringify(data))
}

export function getParamsData () {
  const hash = "items";
  const tmpFile = `/tmp/${hash}.json`

  return JSON.parse(fs.readFileSync(tmpFile))
}
