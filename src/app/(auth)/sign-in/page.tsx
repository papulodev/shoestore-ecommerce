import AuthForm from '@/components/AuthForm';
import { signIn } from '@/lib/auth/actions';

function Page() {
  return <AuthForm mode="sign-in" onSubmit={signIn} />;
}

export default Page