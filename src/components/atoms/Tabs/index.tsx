import React, { ReactNode } from 'react'
import {
  Tabs as BootstrapTabs,
  Tab,
  TabsProps as BootstrapTabsProps,
  TabProps
} from 'react-bootstrap'

import styles from './styles.module.css'

export type TabArrayProps = {
  tab: TabProps
  content: ReactNode
}[]

export type TabsProps = BootstrapTabsProps & {
  tabArray: TabArrayProps
}

const Tabs: React.FC<TabsProps> = ({ tabArray, ...rest }) => {
  return (
    <BootstrapTabs className={styles.tabs} {...rest}>
      {tabArray.map(({ tab, content }, index) => (
        <Tab className={styles.tab} key={`tab-${index}`} {...tab}>
          <div className={styles.contentContainer}>{content}</div>
        </Tab>
      ))}
    </BootstrapTabs>
  )
}

export default Tabs
