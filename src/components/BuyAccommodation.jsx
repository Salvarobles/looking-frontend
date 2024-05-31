const BuyAccommodation = (props) => {
  const { maxCapacity } = props;
  return (
    <div>
      <h3 className="text-xl font-bold dark:text-white mb-3">Reservar:</h3>
      <select name="" id="">
        {[...Array(maxCapacity)].map((_, index) => (
          <option key={index} value={index + 1}>
            {index + 1} persona{index + 1 > 1 ? "s" : ""}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BuyAccommodation;