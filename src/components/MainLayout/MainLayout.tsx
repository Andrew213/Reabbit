import { ReactElement } from 'react';
import { Layout } from 'antd';

interface Props {
    children: ReactElement;
    foo: ReactElement<HTMLInputElement>;
}

const MainLayout: React.FC<Props> = ({ children }) => {
    return <h1 title="asd"> {children} </h1>;
};

export default MainLayout;
