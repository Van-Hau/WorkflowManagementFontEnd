import SignUp_In from '@/components/home/SignUp_In';
import { useAuth } from '@/hooks/auth-hook';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface ILoginPageProps {
}

export default function LoginPage (props: ILoginPageProps) {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
    const {login} = useAuth();
    const router = useRouter();

    const handleLogin = async () => {
      console.log(username, password);
        const payLoad = {
            password: password,
            username: username
          }
        await login(payLoad);
    }
    React.useEffect(() => {
       
    }, []);
  return (
    <SignUp_In/>
  );
}
