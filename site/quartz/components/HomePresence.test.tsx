import { test } from "node:test"
import assert from "node:assert/strict"
import HomePresence from "./HomePresence"
import { QuartzComponentProps } from "./types"

test("presence frame is rendered only on the homepage", () => {
  const props = (slug: string) => ({ fileData: { slug } }) as QuartzComponentProps
  const home = HomePresence(props("index"))
  assert.equal(home.type, "iframe")
  assert.equal(home.props.src, "./static/home-presence.html")
  assert.equal(HomePresence(props("raw/git-worktree")), null)
  assert.equal(HomePresence(props("wiki/index")), null)
})
