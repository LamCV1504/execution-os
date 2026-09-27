import { useState, type ReactNode } from 'react';

import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

import styles from './Shell.module.scss';
import { INavigationSection } from '@execution-os/contracts';

interface IAppShellProps {
  title: string;
  navigation: INavigationSection[];
  children: ReactNode;
}

export function AppShell({ title, navigation, children }: IAppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={styles.shell}>
      <Header
        title={title}
        onMenuClick={() => setSidebarOpen((open) => !open)}
      />

      <div className={styles.body}>
        {sidebarOpen && <Sidebar sections={navigation} />}

        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
