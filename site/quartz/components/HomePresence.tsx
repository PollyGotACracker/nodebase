import { QuartzComponent } from "./types"
import { pathToRoot } from "../util/path"

const HomePresence: QuartzComponent = ({ fileData }) => {
  if (fileData.slug !== "index") return null

  return (
    <div class="home-presence">
      <h3>Home Presence</h3>
      <iframe
        class="home-presence-iframe"
        title="홈 방문자"
        src={`${pathToRoot(fileData.slug)}/static/home-presence.html`}
      />
    </div>
  )
}

HomePresence.displayName = "HomePresence"
HomePresence.css = `
.home-presence>h3 {
  margin: 0;
  font-size: 1rem;
}
.home-presence>.home-presence-iframe {
  width: 100%;
  min-width: 254px;
  height: 240px;
  margin: .5em 0;
  border: 0;
  flex-shrink: 0;
}
`

export default HomePresence
