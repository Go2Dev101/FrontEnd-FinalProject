import { Dumbbell } from 'lucide-react';
export const Tag = ({ img, icon,text }) => {
  return (
    <div className='flex items-center gap-1 rounded bg-secondary-200 px-1 text-secondary-500'>
      {img && <img src={img.url} alt={img.alt} />}
      {icon && <Dumbbell size={16} />}
      <p>{text}</p>
    </div>
  );
};
