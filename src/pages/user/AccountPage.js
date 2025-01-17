import React from "react";
import AccountPageCard from "../../includes/cards/user/AccountPageCard";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import FooterSection from "../../includes/general/FooterSection";
import SideBar from "../../includes/navigation/SideBar";
import { NavLink } from "react-router-dom";

const AccountPage = (props) => (
    <div>
        <ExternalTopNav />
        <div className="main-inner" />
        <div className="container-fluid inner-bg">
            <div className="row">
                <SideBar />
                <div className="col-md-9 mx-auto">
                    <div className="inner-white-card">
                        <AccountPageCard data={props} />
                    </div>
                </div>
            </div>
        </div>
        <FooterSection />
    </div>
);

export default AccountPage;
