import { SignUp } from '@clerk/nextjs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up | TechOverflow',
};

export default function Page() {
  return <SignUp path='/sign-up' />;
}
