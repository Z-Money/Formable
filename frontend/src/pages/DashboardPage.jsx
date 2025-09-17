import { useEffect } from "react";
import { useNavigate } from "react-router"
export default function DashboardPage() {
    let navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem('id');
        if (!userId) {
            navigate("/auth?login");
        }
    }, [navigate]);
    return (
        <div className="container">
            <h1 className="title">Dashboard</h1>
            <p className="subtitle">Welcome back, you are logged in!</p>
            <div className="stats">
                <div className="stat">
                    <p className="stat-title">Total Forms</p>
                    <p className="stat-value">10</p>
                </div>
                <div className="stat">
                    <p className="stat-title">Total Submissions</p>
                    <p className="stat-value">100</p>
                </div>
            </div>
            <button className="btn btn-primary" onClick={() => {
                localStorage.removeItem('id');
                navigate("/auth?login");
            }}>Logout</button>
        </div>
    );
}
