import { getTabProps } from '@pluralsight/headless-styles'
import {
  TabsProvider,
  useTabList,
  useTab,
  usePanelList,
  usePanel,
} from '@pluralsight/react-utils'

const tabStyles = getTabProps()

function TabsEl() {
  return (
    <div {...tabStyles.wrapper}>
      <TabList />
      <PanelList />
    </div>
  )
}

function TabList() {
  const { onKeyDown, tabList } = useTabList()

  return (
    <div {...tabStyles.tabList} onKeyDown={onKeyDown}>
      {tabList.map((tabId) => (
        <Tab id={tabId} key={tabId} />
      ))}
    </div>
  )
}

interface TabProps {
  id: string
}

function Tab(props: TabProps) {
  const { tabs, ...tab } = useTab()
  const data = tabs[props.id]

  return (
    <button {...tabStyles.tab} {...tab} {...data}>
      {data.label}
    </button>
  )
}

function PanelList() {
  const data = usePanelList()
  return (
    <div {...tabStyles.panelWrapper}>
      {data.panelList.map((panelId) => (
        <TabPanel id={panelId} key={panelId} />
      ))}
    </div>
  )
}

interface TabPanelProps {
  id: string
}

function TabPanel(props: TabPanelProps) {
  const { panels } = usePanel()
  const data = panels[props.id]

  return (
    <div {...tabStyles.tabPanel} {...data}>
      {/* TODO: Content missing in hook data */}
      {/* {data.content} */}
    </div>
  )
}

type TabData = {
  id: string
  label: string
  children: {
    id: string
  }
}

interface TabsProps {
  data: TabData[]
}

function Tabs(props: TabsProps) {
  return (
    <TabsProvider data={props.data}>
      <TabsEl />
    </TabsProvider>
  )
}

export default Tabs
