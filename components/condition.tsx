interface IProps {
  condition: boolean;
  children: JSX.Element;
}

export function Condition({ condition, children }: IProps) {
  if (!condition) return null;

  return children;
}
