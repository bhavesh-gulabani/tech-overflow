import { SignIn } from '@clerk/nextjs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In | TechOverflow',
};

export default function Page() {
  return <SignIn path='/sign-in' />;
}
