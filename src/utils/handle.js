export const handleCounter = (setCount,count,mode) => {
    {mode==="plus" && setCount(count+1)}
    {mode==="minus" && setCount(count-1)}
}