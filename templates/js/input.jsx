const Input = ({type,id,name,placeholder}) => {
  return (
    <div>
      <input type={type} id={id} name={name} placeholder={placeholder} />
    </div>
  );
};

export default Input;
