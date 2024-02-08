interface ICollapsibleProps {
  isOpen: boolean;
  maxHeight: number | undefined;
  colorMode?: ColorMode;
  children: React.ReactNode;
}

export type ColorMode = 'blue' | 'gray';

export default ICollapsibleProps;
