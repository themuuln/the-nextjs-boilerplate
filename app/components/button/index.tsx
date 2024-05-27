import { ReactNode } from 'react';

export default ({ children, ...props }: { children: ReactNode } & JSX.IntrinsicElements['button']) => {
  return <button {...props}>{children}</button>;
};
