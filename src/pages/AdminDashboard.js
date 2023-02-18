import React from "react";
import { AdminDashboardTable, CreateNews, NavigationBar,FooterBar } from "../components/index.component";

function AdminDashboard() {
    return (
        <div>
        <div class="">
            <NavigationBar />
            <CreateNews/>
            <AdminDashboardTable/>
            <FooterBar/>
        </div>
        </div>
    );
}

export default AdminDashboard;
