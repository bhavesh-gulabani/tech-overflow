import { SignIn } from '@clerk/nextjs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In | TechOverflow',
};

export default function Page() {
  return (
    <section className='flex min-h-screen w-full items-center justify-center bg-auth-light bg-cover bg-center bg-no-repeat dark:bg-auth-dark'>
      <SignIn path='/sign-in' />
    </section>
  );
}
