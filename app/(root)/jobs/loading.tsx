import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <section>
      <div className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
        <Skeleton className='w-48 h-12' />
      </div>

      <div className='mt-10 flex w-full flex-col gap-6'>
        <div className='mt-10 flex w-full flex-col items-center justify-center'>
          <Skeleton className='h-40 w-44' />
          <Skeleton className='w-44 h-10 mt-8' />
          <Skeleton className='w-80 h-12 my-3.5' />
          <Skeleton className='w-36 h-12 my-4' />
        </div>
      </div>
    </section>
  );
};

export default Loading;
