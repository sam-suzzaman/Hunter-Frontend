import React from "react";

import { IoIosStats } from "react-icons/io";
import { RiMenuSearchLine } from "react-icons/ri";
import { RiMenuAddFill } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { FaUserShield } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";

const links = [
    {
        text: "add job",
        path: ".",
        icon: <RiMenuAddFill />,
    },
    {
        text: "all jobs",
        path: "all-jobs",
        icon: <RiMenuSearchLine />,
    },
    {
        text: "manage jobs",
        path: "manage-jobs",
        icon: <MdManageAccounts />,
    },
    {
        text: "stats",
        path: "stats",
        icon: <IoIosStats />,
    },
    {
        text: "profile",
        path: "profile",
        icon: <FiUser />,
    },
    {
        text: "admin",
        path: "admin",
        icon: <FaUserShield />,
    },
];

export default links;
