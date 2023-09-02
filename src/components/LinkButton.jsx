import { Link } from 'react-router-dom';

export default function LinkButton({path, children}) {
    return <Link to={path}>
        <button>
            {children}
        </button>
    </Link>
}