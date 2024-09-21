import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <div>
      <Skeleton className='w-48 h-12' />
      <div className='mt-9 flex flex-col gap-8'>
        <Skeleton className='w-full h-16' />
        <Skeleton className='w-full h-80' />
        <Skeleton className='w-full h-16' />
        <Skeleton className='w-32 h-10' />
      </div>
    </div>
  );
};

export default Loading;
