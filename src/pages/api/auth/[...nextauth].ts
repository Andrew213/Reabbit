import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { Account, Awaitable, Profile, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import RedditProvider from 'next-auth/providers/reddit';
import { signIn } from 'next-auth/react';
const Auth = (req: NextApiRequest, res: NextApiResponse) => {
    return NextAuth(req, res, {
        providers: [
            RedditProvider({
                id: 'reddit',
                name: 'Reddit',
                type: 'oauth',
                version: '2.0',
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                accessTokenUrl: 'https://www.reddit.com/api/v1/access_token',
                profileUrl: 'https://oauth.reddit.com/api/v1/me',
                httpOptions: {
                    timeout: 10000,
                },
                authorization: {
                    url: 'https://www.reddit.com/api/v1/authorize',
                    params: {
                        response_type: 'code',
                        scope: 'read submit identity',
                        state: 'RANDOM_STRING',
                        duration: 'permanent',
                        redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/callback/reddit`,
                    },
                },
                profile: profile => {
                    console.log(`profile рук `, profile);
                    return { id: profile?.id, image: profile.icon_img, name: profile.name, foo: 1 };
                },
            }),
        ],
        debug: true,
        pages: {
            error: `/`,
        },
        callbacks: {
            async session({ session, token, user }) {
                return session;
            },
            async jwt(jwt) {
                return jwt.token;
            },
        },
        secret: process.env.CLIENT_SECRET,
    });
};

export default Auth;
