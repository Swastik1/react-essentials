import "./TabButton.css";

const TabButton = ({ children, onSelect, isSelected }) => {
  console.log("Tab button component executed!");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
