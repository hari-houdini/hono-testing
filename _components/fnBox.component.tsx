import type { FC } from 'hono/jsx';

export const FnBox: FC<{ fnString?: string }> = ({
  fnString = 'Empty Fn',
}) => {
  return <>{fnString}</>;
};
