import React, { ReactElement } from "react";
import { Box, Divider, Text, List, Space } from "@mantine/core";

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
                    Projects
                    <List c="gray.7" icon="•">
                        <List.Item>
                            main:
                            <List c="gray.7" icon="•">
                                <List.Item>shop</List.Item>
                                <List.Item>mshop</List.Item>
                                <List.Item>marketplace</List.Item>
                                <List.Item>document generator</List.Item>
                            </List>
                        </List.Item>
                        <List.Item>
                            other:
                            <List c="gray.7" icon="•">
                                <List.Item>marketplace admin panel</List.Item>
                                <List.Item>marketplace seller panel</List.Item>
                                <List.Item>sul</List.Item>
                                <List.Item>esourcing</List.Item>
                                <List.Item>salesforce</List.Item>
                                <List.Item>sim management</List.Item>
                                <List.Item>dpos</List.Item>
                            </List>
                        </List.Item>
                    </List>
                </List.Item>
                <List.Item>
                    Team building, review, training, solution providing, tooling
                    & structure.
                </List.Item>
                <List.Item>7 years of experience</List.Item>
                <List.Item>Irancell partner</List.Item>
            </List>
            <Space h="md" />
            <Text size="md" color="gray.7">
                Senior front-end dev and QA/QC @Karen
            </Text>
            <List pl="xs" mt="xs" c="gray.7" icon="•">
                <List.Item>
                    Project name : torch (data-driven - nextjs app router - i18n
                    - mantine - react query)
                </List.Item>
                <List.Item>
                    QA engineer. collaborate in architecture and challenge it in
                    every aspect.
                </List.Item>
                <List.Item>
                    QC engineer. Implement cross service test project
                    (Playwright)(planned)
                </List.Item>
            </List>
        </Box>
    );
};

export default Experience;
