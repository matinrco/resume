import React, { ReactElement } from "react";
import Head from "next/head";
import {
    Box,
    Container,
    Paper,
    MediaQuery,
    Space,
    useMantineTheme,
    Global,
} from "@mantine/core";
import Heading from "./Heading";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Volunteer from "./Volunteer";
import Education from "./Education";
import Footer from "./Footer";

const Home = (): ReactElement => {
    const theme = useMantineTheme();

    return (
        <>
            <Head>
                <title>Matin Rezaei Resume</title>
                <meta
                    name="description"
                    content="Senior Software Engineer (Frontend)"
                />
            </Head>
            <Global
                styles={() => ({
                    "@media print": {
                        "@page": {
                            size: "A4",
                            margin: "5mm",
                        },
                    },
                    html: {
                        body: {
                            WebkitPrintColorAdjust: "exact",
                        },
                    },
                })}
            />
            <MediaQuery
                query="screen"
                styles={(theme) => ({
                    backgroundColor: theme.colors.gray[0],
                })}
            >
                <Box
                    sx={() => ({
                        minHeight: "100vh",
                    })}
                >
                    <MediaQuery
                        query="print"
                        styles={() => ({ display: "none" })}
                    >
                        <Space h={`calc(${theme.spacing.xl} * 3)`} />
                    </MediaQuery>
                    <Container pos="relative">
                        <MediaQuery
                            smallerThan="lg"
                            styles={{ display: "none" }}
                        >
                            <Paper
                                withBorder
                                radius="sm"
                                p="md"
                                pos="absolute"
                                w="100%"
                                h="100%"
                                mah={1500}
                                shadow="sm"
                                bg="gray.0"
                                sx={() => ({
                                    transform: "rotate(3deg)",
                                    zIndex: 0,
                                })}
                            ></Paper>
                        </MediaQuery>
                        <MediaQuery
                            smallerThan="lg"
                            styles={{ display: "none" }}
                        >
                            <Paper
                                withBorder
                                radius="sm"
                                p="md"
                                pos="absolute"
                                w="100%"
                                h="100%"
                                mah={1500}
                                shadow="sm"
                                bg="gray.0"
                                sx={() => ({
                                    transform: "rotate(-5deg)",
                                    zIndex: 1,
                                })}
                            ></Paper>
                        </MediaQuery>
                        <MediaQuery
                            query="print"
                            styles={() => ({ boxShadow: "none" })}
                        >
                            <Paper
                                radius="sm"
                                p="xl"
                                shadow="sm"
                                pos="relative"
                                sx={() => ({ zIndex: 2 })}
                                mih={1500}
                            >
                                <Heading />
                                <About />
                                <Skills />
                                <Experience />
                                <Volunteer />
                                <Education />
                                <Footer />
                            </Paper>
                        </MediaQuery>
                    </Container>
                    <Space h={`calc(${theme.spacing.xl} * 5)`} />
                </Box>
            </MediaQuery>
        </>
    );
};

export default Home;
