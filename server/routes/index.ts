import { Readable } from "readable-stream"

export default eventHandler((event) => {
  const stream = Readable.from(["hello", "world"])
  return stream
})
