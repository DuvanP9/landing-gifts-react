import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useHistory, Link as RouterLink} from "react-router-dom";
import useStyles from './styles/Header';

export interface ISectionRoutes {
  title: string;
  url: string;
};
  
export interface IHeaderProps {
  sections: ISectionRoutes[];
  title: string;
};

export default function Header(props: IHeaderProps) {
  const classes = useStyles();
  const history = useHistory();
  const { sections, title } = props;

  const handleLogout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
        >
          {title}
        </Typography>
        <Button variant="outlined" size="small" onClick={handleLogout}>
          Cerrar Sesion
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section: ISectionRoutes) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            component={RouterLink}
            to={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}