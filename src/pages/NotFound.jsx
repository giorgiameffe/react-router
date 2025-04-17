import { Link } from "react-router-dom"
// Not found

export default function NotFound() {
    return (
        <div>
            <h1>Ops..Pagina non trovata!</h1>
            <Link to='/'>Torna alla home</Link>
        </div>
    )
}