import React from 'react';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import CssBaseline from '@material-ui/core/CssBaseline';

export interface ISectionRoutes {
    title: string;
    url: string;
};

export interface ILayoutProps {
    children: React.ReactNode;
}

const sections: ISectionRoutes[] = [
    { title: 'Trending', url: '/trending' },
    { title: 'Categories', url: '/categories' },
    { title: 'Random', url: '/random' },
  ];

const Layout: React.FC<ILayoutProps> = ({children}) => {

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Gifs" sections={sections} />
                <main>
                    {children}
                </main>
            </Container>
        </React.Fragment>
    )
}

export default Layout;

