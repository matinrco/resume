import React, { ReactElement } from "react";
import { useTranslation } from "next-i18next";
import {} from "@mantine/core";

const Home = (): ReactElement => {
    const { t } = useTranslation(["common", "home"]);

    return <>this is home</>;
};

export default Home;
