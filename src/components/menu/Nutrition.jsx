export const Nutrition = () => {
  return (
    <div className="border-1 border-secondary-400 rounded-3xl max-w-100 w-full text-primary-900 bg-white mx-auto">
        <div className="px-4 py-3 border-b-1 border-secondary-400">
            <div className="flex justify-between">
                <p>Calories</p>
                <p>500kcal</p>
            </div>
        </div>
        <div className="px-4 py-3 border-b-1 border-secondary-400 flex flex-col gap-2">
            <div className="flex justify-between">
                <p>Total fat</p>
                <p>21 G</p>
            </div>
            <div className="flex justify-between">
                <p>Saturates fat</p>
                <p>4 G</p>
            </div>
            <div className="flex justify-between">
                <p>Trans fat</p>
                <p>0 G</p>
            </div>
        </div>
        <div className="px-4 py-3 border-b-1 border-secondary-400 flex flex-col gap-2">
            <div className="flex justify-between">
                <p>Cholesterol</p>
                <p>0 Mg</p>
            </div>
            <div className="flex justify-between">
                <p>Sodium</p>
                <p>120 Mg</p>
            </div>
        </div>
        <div className="px-4 py-3 border-b-1 border-secondary-400 flex flex-col gap-2">
            <div className="flex justify-between">
                <p>Total  carbohydrates</p>
                <p>14 G</p>
            </div>
            <div className="flex justify-between">
                <p>Dietary Fiber</p>
                <p>9 G</p>
            </div>
            <div className="flex justify-between">
                <p>Sugars</p>
                <p>6 G</p>
            </div>
        </div>
        <div className="px-4 py-3">
            <div className="flex justify-between">
                <p>Protein</p>
                <p>36 G</p>
            </div>
        </div>

    </div>
  )
}
