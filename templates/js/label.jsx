
const Label = ({ labelName,id }) => {
  return (
    <div>
      <label htmlFor={id}>{labelName}</label>
    </div>
  );
};

export default Label;
