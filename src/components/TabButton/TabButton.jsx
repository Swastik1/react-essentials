import "./TabButton.css";

const TabButton = ({ children, isSelected, ...props }) => {
  console.log("Tab button component executed!");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
