const TabButton = ({ children, onSelect }) => {
  console.log("Tab button component executed!");
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
};

export default TabButton;
