import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <section>
      <Skeleton className='h-12 w-48' />
      <div className='mt-9'>
        <div className='flex flex-col gap-8 mb-4'>
          {[1, 2, 3, 4, 5].map((item) => (
            <Skeleton key={item} className='h-20 w-full' />
          ))}
        </div>
        <div className='w-full mt-10'>
          <Skeleton className='w-20 h-10 ml-auto' />
        </div>
      </div>
    </section>
  );
};

export default Loading;
