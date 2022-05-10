import { Link, Route, Routes } from 'react-router-dom';

import PetList from '../PetList'

const Dashboard = () => {
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>

            <PetList />

        </section>
    );
}

export default Dashboard;