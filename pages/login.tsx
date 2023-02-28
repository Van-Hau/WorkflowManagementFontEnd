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
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />


        <button onClick={handleLogin}>Login</button>
        <button onClick={()=> router.push("/signup")}>signup</button>
      
    </div>
  );
}
