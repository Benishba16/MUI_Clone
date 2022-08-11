import React from "react";
import {history} from "./history";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import FourNotFour from "./components/FourNotFour";
import Layout from "./components/Layout";
import Deals from "./components/Deals";
import Contacts from "./components/Contacts";
import Companies from "./components/Companies";
import Products from "./components/Products";
import Settings from "./components/Settings";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();

export default function Alecmo(props) {
    return (
        <QueryClientProvider client={queryClient}>
            <React.Fragment>
                <Routes history={history}>
                    <Route path="/" element={<Layout {...props} history={history}/>}>
                        <Route index element={<Home />} />
                        <Route path="deals" element={<Deals />} />
                        <Route path="contacts" element={<Contacts />} />
                        <Route path="companies" element={<Companies />} />
                        <Route path="products" element={<Products />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="*" element={<FourNotFour />} />
                    </Route>
                </Routes>
            </React.Fragment>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
