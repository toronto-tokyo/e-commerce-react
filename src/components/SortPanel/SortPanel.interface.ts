interface ISortPanelProps {
  selectedValue: string;
  values: ISortValue[];
  handleChange: (value: string) => void;
}

interface ISortValue {
  value: string;
  label: string;
}

export default ISortPanelProps;
