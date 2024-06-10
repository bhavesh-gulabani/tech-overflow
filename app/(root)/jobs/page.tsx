import NoResult from '@/components/shared/NoResult';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Find jobs | TechOverflow',
};

const Page = () => {
  return (
    <section>
      <div className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
        <h1 className='h1-bold text-dark100_light900'>Find Jobs</h1>
      </div>

      <div className='mt-10 flex w-full flex-col gap-6'>
        <NoResult
          title='Coming soon...'
          description='In the meanwhile, 🚀 Ask a Question and kickstart the
          discussion. Our query could be the next big thing others learn from. Get
          involved! 💡'
          link='/ask-question'
          linkTitle='Ask a Question'
        />
      </div>
    </section>
  );
};
export default Page;
