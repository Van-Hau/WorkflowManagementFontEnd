import { useRouter } from 'next/router';
import * as React from 'react';

export interface ISignUpPageProps {
}

export default function SignUpPage (props: ISignUpPageProps) {
    const router = useRouter();
  return (
    <div>
        <button onClick={()=> router.push("/login")}>login</button>
      
    </div>
  );
}
