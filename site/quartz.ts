import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import HomePresence from "./quartz/components/HomePresence"
import { componentRegistry } from "./quartz/components/registry"
import { PageTypeDispatcher } from "./quartz/plugins/pageTypes/dispatcher"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

componentRegistry.register("HomePresence", () => HomePresence, "nodebase")
const sidebars = new Set([
  layout.defaults.right,
  ...Object.values(layout.byPageType).map((page) => page.right),
])
for (const sidebar of sidebars) {
  if (sidebar?.length) sidebar.splice(1, 0, HomePresence)
}

const dispatcher = config.plugins.emitters.findIndex((emitter) => emitter.name === "PageTypeDispatcher")
config.plugins.emitters[dispatcher] = PageTypeDispatcher(layout)
