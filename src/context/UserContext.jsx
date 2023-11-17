import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSingleHandler, getMeHandler } from "../utils/FetchHandlers";

const userContext = React.createContext();
const UserContext = ({ children }) => {
    const {
        isPending: userLoading,
        isError: userError,
        data: user,
        error: userErrorMessage,
    } = useQuery({
        queryKey: ["user"],
        queryFn: () => getMeHandler(`http://localhost:1111/api/v1/auth/me`),
    });

    const passing = { userLoading, userError, userErrorMessage, user };
    // const passing = {};
    return (
        <userContext.Provider value={passing}>{children}</userContext.Provider>
    );
};

const useUserContext = () => useContext(userContext);

export { useUserContext, UserContext };
