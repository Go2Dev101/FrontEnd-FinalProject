export const Information = ({ information }) => {
  return (
    <div className="max-w-125 w-full mx-auto">
      <p>{information.description}</p>

      <h3 className="text-lg font-medium mt-3">
        {information.meals.day} Days - {information.meals.day*3} Nutritious Meals Each day includes:
      </h3>
      <ul className="list-disc pl-5">
        <li>Breakfast – {information.meals.breakfast}</li>
        <li>Lunch – {information.meals.lunch}</li>
        <li>Dinner – {information.meals.dinner}</li>
      </ul>
    </div>
  );
};
