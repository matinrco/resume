import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { wrapper } from "src/services/store";
import { api } from "src/services/api";
import Home from "src/screens/Home";

const HomePage: NextPage = () => <Home />;

export default HomePage;

export const getStaticProps = wrapper.getStaticProps(
    (store) =>
        async ({ locale }) => {
            return {
                props: {
                    ...(await serverSideTranslations(locale || "", [
                        "common",
                        "home",
                    ])),
                },
            };
        },
);
