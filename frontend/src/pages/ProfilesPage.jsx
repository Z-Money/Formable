import { NavLink, Outlet} from 'react-router'

export default function ProfilesPage() {
    const profiles = [1, 2, 3, 4, 5];
    return (
        <div>
            {profiles.map((profile) => (
                <div key={profile}>
                    <NavLink key={profile} to={`/profiles/${profile}`} style={({ isActive }) => (isActive ? { color: 'red' } : { color: 'black' })}>
                        Profile {profile}
                    </NavLink>
                </div>
            ))}
            <Outlet />
        </div>
    );
}