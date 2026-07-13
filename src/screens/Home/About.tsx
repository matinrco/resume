import React, { ReactElement } from "react";
import { Box, Text, Tooltip, Mark, Divider } from "@mantine/core";

const About = (): ReactElement => {
    return (
        <Box my="xl">
            <Divider
                my="xs"
                variant="dashed"
                label="About"
                labelProps={{ size: "md", fw: "normal", color: "gray.7" }}
            />
            <Text size="md">
                Senior Frontend Engineer with 8+ years of experience building
                large-scale React and Next.js applications. Experienced in
                frontend architecture, developer tooling, state management,
                testing, backend integration and technical leadership.
                Comfortable working across frontend, backend and infrastructure
                to deliver maintainable software.
            </Text>
        </Box>
    );
};

export default About;
