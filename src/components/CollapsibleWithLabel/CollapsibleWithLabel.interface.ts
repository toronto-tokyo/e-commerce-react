interface ICollapsibleWithLabelProps {
  label: string;
  children: React.ReactNode;
  maxHeight?: number;
  colorMode?: ColorMode;
}

export type ColorMode = 'blue' | 'gray';

export default ICollapsibleWithLabelProps;
