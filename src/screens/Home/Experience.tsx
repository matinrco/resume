import React, { ReactElement } from "react";
import { Box, Divider, Text, List } from "@mantine/core";

const Experience = (): ReactElement => {
    return (
        <Box my="xl">
            <Divider
                my="xs"
                variant="dashed"
                label="Notable Experience"
                labelProps={{ size: "md", fw: "normal", color: "gray.7" }}
            />
            <Text size="md" color="gray.7">
                Senior front-end dev @ParsTasmim
            </Text>
            <List pl="xs" mt="xs" c="gray.7" icon="•">
                <List.Item>
                    My main projects: marketplace, shop, e-shop light
                </List.Item>
                <List.Item>
                    Team building, review, training, solution providing, tooling
                    & structure.
                </List.Item>
                <List.Item>+6 years of experience</List.Item>
                <List.Item>Irancell partner</List.Item>
            </List>
        </Box>
    );
};

export default Experience;
