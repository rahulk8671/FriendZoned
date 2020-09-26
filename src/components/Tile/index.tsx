import * as React from 'react';
import { Avatar } from '../resusable/Avatar';
import styles from './Tile.module.scss';

export interface ITileProps {
}

export function Tile (props: ITileProps) {

  return (
    <div className={styles.tile}>
      <div className={styles.avatarContainer}>
        <Avatar imgUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
        <Avatar className={styles.avatar2} imgUrl="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=wavatar&f=y" />
      </div>

      <div className={styles.tileDesc}>
        <div className="flex justify-between">
          <span className="font-semibold">Harsh, Rahul</span>
          <span>Tuesday</span>
        </div>
        <p className={styles.message}>Some very very loooooooooooong text</p>
      </div>
    </div>
  );
}
