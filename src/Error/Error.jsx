import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
           <Helmet>
                
                <title>Error</title>
                
            </Helmet>
             <div className="text-center mx-auto">
           <h2>404 Not Found!! You come to an Invalid Page. Please go Back.</h2> 
          <Link to={'/'}>Go Back</Link>
        </div> 
        </div>
    );
};

export default Error;