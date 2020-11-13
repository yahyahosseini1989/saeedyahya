import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

interface IProps { }

const Layout: React.FunctionComponent<IProps> = (props) => {
    return (
        <>
            <header>
                <div className="container text-center">
                    <h5>
                        header
                    </h5>
                    <hr/>
                </div>
            </header>
            <div className="container-fluid">
                {props.children}
            </div>
            <footer>
                <div className="container text-center">
                    <hr/>
                    <h5>
                        footer
                    </h5>
                </div>
            </footer>
        </>
    )
};

export default Layout;