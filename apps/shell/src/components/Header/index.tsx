import { Button } from '@execution-os/design-system';

import styles from './Header.module.scss';

interface IHeaderProps {
  title: string;
  onMenuClick?: () => void;
}

export function Header({ title, onMenuClick }: IHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {onMenuClick && (
          <Button
            variant="ghost"
            size="sm"
            aria-label="Toggle navigation"
            onClick={onMenuClick}
          >
            <Menu size={18} />
          </Button>
        )}

        <span className={styles.title}>{title}</span>
      </div>
    </header>
  );
}
