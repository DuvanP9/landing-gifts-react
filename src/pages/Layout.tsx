import React from 'react';
import Container from '@material-ui/core/Container';
import Header, {ISectionRoutes} from '../components/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './styles/Layout';
import Grid from '@material-ui/core/Grid';


interface ILayoutProps {
    children: React.ReactNode;
}

const sections: ISectionRoutes[] = [
    { title: 'Trending', url: '/trending' },
    { title: 'Categories', url: '/categories' },
    { title: 'Random', url: '/random' },
  ];

const Layout: React.FC<ILayoutProps> = ({children}) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Gifs" sections={sections} />
                <main>
                <Grid container spacing={5} className={classes.mainGrid}>
                    {children}
                </Grid>
                </main>
            </Container>
        </React.Fragment>
    )
}

export default Layout;

