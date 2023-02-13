import { ReactElement } from 'react';
import '@styles/global.scss';
import { Session } from 'next-auth';
import App, { AppContext, AppProps } from 'next/app';
import { getSession, GetSessionParams, SessionProvider } from 'next-auth/react';

interface AppType extends AppProps {
    session: Session;
}

const Root = ({ Component, pageProps: { session, ...pageProps } }: AppType): ReactElement => {
    console.log(`session`, session);
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
};

export default Root;
