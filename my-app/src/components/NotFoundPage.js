import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <div >
            <h2 className="text-danger" >Page not Found</h2>
            <p>
                <Link className='btn btn-primary ' to='/'>Back to Home</Link>
            </p>
        </div>
    )
}

export default NotFoundPage;