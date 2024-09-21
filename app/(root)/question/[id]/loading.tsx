import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <section>
      <div className='flex-start w-full flex-col'>
        <div className='flex w-full flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2'>
          <div className='flex items-center justify-start gap-1'>
            <Skeleton className='w-10 h-10 rounded-full' />
            <Skeleton className='h-5 w-24' />
          </div>
          <div className='flex justify-end'>
            <Skeleton className='w-36 h-5' />
          </div>
        </div>
        <Skeleton className='w-full h-14 mt-3.5' />
      </div>

      <div className='mb-8 mt-5 flex flex-wrap gap-4'>
        {[1, 2, 3].map((item) => (
          <Skeleton key={item} className='h-5 w-20' />
        ))}
      </div>

      <Skeleton className='w-full h-72' />

      <div className='my-8 flex flex-wrap gap-2'>
        {[1, 2, 3].map((item) => (
          <Skeleton key={item} className='h-6 w-14' />
        ))}
      </div>

      <div className='flex flex-col gap-4 mb-4'>
        {[1, 2, 3].map((item) => (
          <Skeleton key={item} className='h-24 w-full' />
        ))}
      </div>

      <Skeleton className='w-full h-72' />
    </section>
  );
};

export default Loading;
