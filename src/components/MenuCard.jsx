import { Tag } from "./Tag"

export const MenuCard = () => {
  return (
    <div className="rounded-lg max-w-80 bg-white">
        <img src="" alt=""/>
        <div className="p-4">
            <p className="text-xl font-medium text-primary-900">c</p>
            <p className="text-sm text-secondary-400"></p>
        </div>
        <div>
            <Tag/>
            <Tag icon={true} text={"220kcal"}/>
        </div>
    </div>
  )
}
