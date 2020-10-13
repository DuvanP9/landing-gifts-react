import React from 'react';
import Container from '@material-ui/core/Container';
import Header, {ISectionRoutes} from '../components/Header';

interface ILayoutProps {
    children: React.ReactNode;
}

const sections: ISectionRoutes[] = [
    { title: 'Trending', url: '/trending' },
    { title: 'Categories', url: '/categories' },
    { title: 'Random', url: '/random' },
  ];

const Layout: React.FC<ILayoutProps> = ({children}) => {

    return (

        <Container maxWidth="lg">
            <Header title="Blog" sections={sections} />
            <main>
                {children}
            </main>
        </Container>
    )
}

export default Layout;

