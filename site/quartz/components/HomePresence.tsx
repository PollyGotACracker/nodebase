import { QuartzComponent } from "./types"
import { pathToRoot } from "../util/path"

const HomePresence: QuartzComponent = ({ fileData }) => {
  if (fileData.slug !== "index") return null

  return (
    <iframe
      class="home-presence"
      title="홈 방문자"
      src={`${pathToRoot(fileData.slug)}/static/home-presence.html`}
    />
  )
}

HomePresence.displayName = "HomePresence"
HomePresence.css = `
.home-presence {
  width: 100%;
  height: 240px;
  border: 0;
  flex-shrink: 0;
}
`

export default HomePresence
