// mostly code from reactjs.org/docs/error-boundaries.html

import React from 'react';
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError () {
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info); 
    }
    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>
                        There was an error with this listing. <Link to="/">Click here</Link> to go back to the home page or wait five seconds.
                    </h1>
                </div>
            )
        }

        return  this.props.children;
    }
}

export default ErrorBoundary;