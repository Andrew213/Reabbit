import { NextPage } from 'next';
import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';

const basicAuth = Buffer.from(`${process.env.APP_ONLY_ID}:`).toString('base64');
const MainPage: NextPage<{ foo: number }> = ({ foo }) => {
    const data = useSession();
    useEffect(() => {
        console.log(`data `, data);
    }, [data]);
    return (
        <h1>
            <button
                onClick={() => {
                    signIn('reddit', { redirect: false });
                }}
            >
                Войти
            </button>
        </h1>
    );
};

export default MainPage;
