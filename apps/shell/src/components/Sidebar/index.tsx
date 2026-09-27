import { Link } from '@tanstack/react-router';

import styles from './Sidebar.module.scss';
import { INavigationSection } from '../../app/navigation';

interface ISidebarProps {
  sections: INavigationSection[];
}

export function Sidebar({ sections }: ISidebarProps) {
  return (
    <aside className={styles.sidebar}>
      {sections.map((section) => (
        <section key={section.id} className={styles.section}>
          {section.label && (
            <div className={styles.sectionLabel}>{section.label}</div>
          )}

          <nav>
            {section.items.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.id}
                  to={item.to}
                  activeProps={{
                    className: styles.active,
                  }}
                  className={styles.item}
                >
                  {Icon && <Icon size={18} />}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </section>
      ))}
    </aside>
  );
}
