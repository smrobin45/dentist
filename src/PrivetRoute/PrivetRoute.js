import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth'

const PrivetRoute = ({ children, ...rest }) =>
{
    const {user} = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? (children) : (<Redirect
                to={{
                    pathname: './login',
                    state:{from:location}
                }}
            />
            )
            }
        />
    )
};

// Default export
export default PrivetRoute;