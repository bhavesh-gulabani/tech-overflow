import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <section>
      <Skeleton className='h-12 w-48' />
      <div className='mt-9'>
        <div className='flex flex-col gap-8 mb-4'>
          <Skeleton className='h-20 w-full' />
          <Skeleton className='h-80 w-full' />
          <Skeleton className='h-20 w-full' />
        </div>

        <Skeleton className='w-28 h-10 mt-10' />
      </div>
    </section>
  );
};

export default Loading;
