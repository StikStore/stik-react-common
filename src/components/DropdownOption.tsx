import styles from "./dropdown.module.css";

type DropdownOptionProps = {
  value: string;
  label: string;
  onClick: () => void;
  isSelected: boolean;
};

export const DropdownOption = ({
  value,
  label,
  onClick,
  isSelected,
}: DropdownOptionProps) => {
  return (
    <button
      key={value}
      type="button"
      role="option"
      className={`${styles["dropdown-option"]}${
        isSelected ? ` ${styles["selected"]}` : ""
      }`}
      aria-selected={isSelected}
      onClick={() => {
        onClick();
      }}
    >
      <span>{label}</span>
      {isSelected && (
        <span className="checkmark" aria-hidden="true">
          ✓
        </span>
      )}
    </button>
  );
};
