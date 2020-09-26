import * as React from 'react';

export interface IAvatarProps {
  imgUrl: string,
  className?: string
}

export function Avatar ({ imgUrl, className }: IAvatarProps) {

  const style: React.CSSProperties = {
    backgroundImage: `url('${imgUrl}')`
  }

  let localClassName = "w-10 h-10 rounded-full bg-cover border-2 border-white";
  
  if (className) {
    localClassName = `${localClassName} ${className}`;
  }

  return (
    <div className={localClassName} style={style}>
      
    </div>
  );
}
