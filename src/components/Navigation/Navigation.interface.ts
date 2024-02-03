interface INavigationProps {
  items: NavItem[];
}

interface NavItem {
  key: string;
  element: React.ReactNode;
}

export default INavigationProps;
