import React from "react";
import styled from "styled-components";

const Admin = () => {
    return (
        <Wrapper>
            <div class="card-container">
                {/* Members */}
                <div class="relative p-5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-md overflow-hidden">
                    <div class="relative z-10 mb-4 text-white text-4xl leading-none font-semibold">
                        110
                    </div>
                    <div class="relative z-10 text-blue-100 leading-none font-semibold">
                        Members
                    </div>
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="absolute right-0 bottom-0 h-32 w-32 -mr-8 -mb-8 text-blue-700 opacity-50"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                </div>

                <div class="relative p-5 bg-gradient-to-r from-red-400 to-red-600 rounded-md overflow-hidden">
                    <div class="relative z-10 mb-4 text-white text-4xl leading-none font-semibold">
                        3
                    </div>
                    <div class="relative z-10 text-red-100 leading-none font-semibold">
                        Total Jobs
                    </div>
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="absolute right-0 bottom-0 h-32 w-32 -mr-8 -mb-8 text-red-700 opacity-50"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .card-container {
        display: grid;
        grid-template-columns: repeat(2, minmax(auto, 300px));
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    @media screen and (max-width: 450px) {
        .card-container {
            grid-template-columns: 1fr;
        }
    }
`;

export default Admin;
