import { PropsWithChildren } from 'react'
import {
  getGridProps,
  getIconProps,
  getTabProps,
} from '@pluralsight/headless-styles'
import {
  TabsProvider,
  useTabList,
  useTab,
  usePanelList,
  usePanel,
} from '@pluralsight/react-utils'
import { PlaceholderIcon } from '@pluralsight/icons'
import Skill from '../../components/Skill'
import { tabData } from './tabData'

export default function SkillIqContent(props: PropsWithChildren) {
  return (
    <div style={{ paddingRight: '1rem' }}>
      <h1>Skill Assessments</h1>
      <hr />
      <strong>Retakes available: 4</strong>
      <p>
        <b>It's been a while!</b>
        Take these assessments again to update your Skill IQ
      </p>
      {/* expand section */}

      {/* tabs */}
      <Tabs data={tabData} />
    </div>
  )
}

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
      <PanelContent data={panelContent[data.id]} />
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

const panelData = [
  'Active Directory Administration',
  'Administer and Monitor Couchbase',
  'Administering a Cisco Collaboration Deployment from the Ground Up',
  'Administering Microsoft 365 Security',
  'Adobe Experience Manager for Developers',
  'Adobe Target for Developers',
  'Agile Analysis - IIBA®-AAC',
  'Agile Practitioner',
  'Analyzing Network Traffic with Wireshark',
  'Android',
  'Android Foundations',
  'Android: Implementing Navigation',
  'Android Interactivity',
  'Android: Notifications',
  'Android Security',
  'Android Testing',
  'Android Tooling',
  'Android UI',
  'Android: Working with Data',
  'Angular 13',
  'Angular 14',
  'AngularJS',
  'Apache Spark on Databricks',
  'Application Development on Microsoft Azure',
  'Application Security on Microsoft Azure',
  'Applied Data Mining with Python',
  'Architecting in AWS',
  'Architecting with Google Cloud Platform Infrastructures',
  'Architecting with the Google Kubernetes Engine',
  'ASP.NET Core',
  'ASP.NET Core 6',
  'ASP.NET MVC5',
  'Automate Infrastructure on AWS with CloudFormation',
  'Automating UI Testing with Appium',
  'AWS - Application Development',
  'AWS - Big Data',
  'AWS Cloud Compute',
  'AWS Cloud Security',
  'AWS Databases',
  'AWS Identity and Access Management',
  'AWS - IoT',
  'AWS Machine Learning / AI',
  'AWS - Media Services',
]

const panelContent: Record<string, string[]> = tabData.reduce(
  (prev, current) => {
    const id = current.children.id
    const length =
      id === 'skilliq-all:panel'
        ? panelData.length
        : panelData.length * Math.random()

    return {
      ...prev,
      [current.children.id]: shuffle(panelData).slice(0, length),
    }
  },
  {}
)

function shuffle(array: string[]) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

function PanelContent(props: { data: string[] }) {
  const colLength = Math.ceil(props.data.length / 2)
  const col1 = props.data.slice(0, colLength)
  const col2 = props.data.slice(colLength, colLength * 2)

  const Icon = (
    <PlaceholderIcon {...getIconProps({ size: 'l', ariaHidden: true })} />
  )

  return (
    <div {...getGridProps({ cols: 2, gap: 32 })}>
      <ul style={{ minWidth: 0 }}>
        {col1.map((label) => (
          <Skill
            key={label}
            id={label.replace(/\s/, '-')}
            icon={Icon}
            label={label}
            buttonLabel="Measure now"
          />
        ))}
      </ul>
      <ul style={{ minWidth: 0 }}>
        {col2.map((label) => (
          <Skill
            key={label}
            id={label.replace(/\s/, '-')}
            icon={Icon}
            label={label}
            buttonLabel="Measure now"
          />
        ))}
      </ul>
    </div>
  )
}
