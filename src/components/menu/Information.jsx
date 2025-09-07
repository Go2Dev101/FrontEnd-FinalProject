export const Information = ({ information }) => {
  return (
    <div className="max-w-125 w-full mx-auto">
      <p>{information.description}</p>
      {information.meals && (
        <>
          <h3 className="text-lg font-medium mt-3">
            {information.meals.length} Days - {information.meals.length * 3}{" "}
            Nutritious Meals Each day includes:
          </h3>

          <ul className="list-disc pl-5 max-h-101 overflow-y-scroll">
            {information.meals.map((meal,index) => (
              <li key={index}>
                <p className="font-medium">Day: {meal.day}</p>
                <p>- Breakfast: {meal.breakfast}</p>
                <p>- lunch: {meal.lunch}</p>
                <p>- dinner: {meal.dinner}</p>
              </li>
            ))}

            {/* <li>Breakfast – {information.meals.breakfast}</li>
          <li>Lunch – {information.meals.lunch}</li>
          <li>Dinner – {information.meals.dinner}</li> */}
          </ul>
        </>
      )}
    </div>
  );
};
