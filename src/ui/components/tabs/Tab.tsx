import { Category } from '../../../types';

type Props = {
  category: Category;
  isSelected: boolean;
  onCategoryClick: (category: Category | null) => void;
};

export const Tab = ({ category, onCategoryClick, isSelected }: Props) => {
  return (
    <div
      onClick={() => onCategoryClick(category)}
      className={`tab${isSelected ? ' tab-selected' : ''}`}
    >
      {category.name}
    </div>
  );
};
