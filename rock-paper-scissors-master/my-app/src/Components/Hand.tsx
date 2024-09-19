import { useEffect, useState } from 'react';

type Props = {
  className: string;
  type: string;
};
export function Hand({ className, type }: Props) {
  const [src, setSrc] = useState<string>();
  const [color, setColor] = useState('blank');

  useEffect(() => {
    switch (type) {
      case 'rock':
        setSrc('/images/icon-rock.svg');
        setColor('red');
        break;
      case 'paper':
        setSrc('/images/icon-paper.svg');
        setColor('dark-blue');
        break;
      case 'scissors':
        setSrc('/images/icon-scissors.svg');
        setColor('yellow');
        break;
      case 'lizard':
        setSrc('/images/icon-lizard.svg');
        setColor('purple');
        break;
      case 'spock':
        setSrc('/images/icon-spock.svg');
        setColor('light-blue');
        break;
      default:
        setSrc(undefined);
        setColor('blank');
        break;
    }
  }, [type]);

  return (
    <div className={`hand ${className} ${color} flex center-all`}>
      {src && <img src={src} />}
    </div>
  );
}
