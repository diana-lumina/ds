import React from 'react'
import { useLocation } from '@docusaurus/router'
import Link from '@docusaurus/Link'
import styles from './ComponentNav.module.css'

type Tab = {
  label: string
  path: string
}

type Props = {
  base: string
  tabs: Tab[]
}

export default function ComponentNav({ base, tabs }: Props) {
  const location = useLocation()

  return (
    <div className={styles.nav}>
      {tabs.map((tab) => {
        const href = `${base}${tab.path}`
        const isActive = location.pathname === href || 
          (tab.path === '' && location.pathname === base) ||
          (tab.path === '' && location.pathname === `${base}/`)

        return (
          <Link
            key={tab.path}
            to={href}
            className={`${styles.tab} ${isActive ? styles.active : ''}`}
          >
            {tab.label}
          </Link>
        )
      })}
    </div>
  )
}