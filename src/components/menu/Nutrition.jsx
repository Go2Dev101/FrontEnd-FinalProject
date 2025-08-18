export const Nutrition = ({nutritionFacts}) => {
  return (
    <div className="border-1 border-secondary-400 rounded-3xl max-w-100 w-full text-primary-900 bg-white mx-auto">
        <div className="px-4 py-3 border-b-1 border-secondary-400">
            <div className="flex justify-between">
                <p>Calories</p>
                <p>{nutritionFacts.kcal} kcal</p>
            </div>
        </div>
        <div className="px-4 py-3 border-b-1 border-secondary-400 flex flex-col gap-2">
            <div className="flex justify-between">
                <p>Total fat</p>
                <p>{nutritionFacts.gTotalFat} g</p>
            </div>
            <div className="flex justify-between">
                <p>Saturates fat</p>
                <p>{nutritionFacts.gSaturatesFat} g</p>
            </div>
            <div className="flex justify-between">
                <p>Trans fat</p>
                <p>{nutritionFacts.gTransFat} g</p>
            </div>
        </div>
        <div className="px-4 py-3 border-b-1 border-secondary-400 flex flex-col gap-2">
            <div className="flex justify-between">
                <p>Cholesterol</p>
                <p>{nutritionFacts.mgCholesterol} mg</p>
            </div>
            <div className="flex justify-between">
                <p>Sodium</p>
                <p>{nutritionFacts.mgSodium} mg</p>
            </div>
        </div>
        <div className="px-4 py-3 border-b-1 border-secondary-400 flex flex-col gap-2">
            <div className="flex justify-between">
                <p>Total  carbohydrates</p>
                <p>{nutritionFacts.gTotalCarb} g</p>
            </div>
            <div className="flex justify-between">
                <p>Dietary Fiber</p>
                <p>{nutritionFacts.gFiber} g</p>
            </div>
            <div className="flex justify-between">
                <p>Sugars</p>
                <p>{nutritionFacts.gSugar} g</p>
            </div>
        </div>
        <div className="px-4 py-3">
            <div className="flex justify-between">
                <p>Protein</p>
                <p>{nutritionFacts.gProtein} g</p>
            </div>
        </div>

    </div>
  )
}
