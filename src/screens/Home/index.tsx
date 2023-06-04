import React, { ReactElement } from "react";
import { useTranslation } from "next-i18next";
import {
    Box,
    Container,
    Paper,
    MediaQuery,
    Space,
    useMantineTheme,
} from "@mantine/core";
import Heading from "./Heading";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Volunteer from "./Volunteer";
import Books from "./Books";
import Education from "./Education";
import Footer from "./Footer";

const Home = (): ReactElement => {
    const { t } = useTranslation(["common", "home"]);
    const theme = useMantineTheme();

    return (
        <Box
            sx={(theme) => ({
                backgroundColor: theme.colors.gray[0],
                minHeight: "100vh",
            })}
        >
            <Space h={`calc(${theme.spacing.xl} * 3)`} />
            <Container pos="relative">
                <MediaQuery smallerThan="lg" styles={{ display: "none" }}>
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
                        sx={() => ({ transform: "rotate(3deg)", zIndex: 0 })}
                    ></Paper>
                </MediaQuery>
                <MediaQuery smallerThan="lg" styles={{ display: "none" }}>
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
                        sx={() => ({ transform: "rotate(-5deg)", zIndex: 1 })}
                    ></Paper>
                </MediaQuery>
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
                    <Books />
                    <Education />
                    <Footer />
                </Paper>
            </Container>
            <Space h={`calc(${theme.spacing.xl} * 5)`} />
        </Box>
    );
};

export default Home;
