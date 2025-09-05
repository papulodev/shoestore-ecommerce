import AuthForm from '@/components/AuthForm';
import { signUp } from '@/lib/auth/actions';

function Page() {
  return <AuthForm mode="sign-up" onSubmit={signUp} />;
}

export default Page