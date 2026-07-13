import React, { ReactElement } from "react";
import { Box, Divider, List, Stack, Text } from "@mantine/core";

const Volunteer = (): ReactElement => {
    return (
        <Stack spacing="sm" my="xl">
            <Divider
                variant="dashed"
                label="Volunteer experience"
                labelProps={{ size: "md", fw: "normal", color: "gray.7" }}
            />
            <Text size="md" weight="bold" color="gray.7">
                Technical Mentor & Community Contributor
            </Text>
            <List c="gray.7" icon="•">
                <List.Item>
                    Mentored developers transitioning into frontend and backend
                    engineering through technical guidance, code reviews, and
                    career advice.
                </List.Item>
                <List.Item>
                    Supported newcomers in adopting Linux and open-source
                    technologies through community discussions and educational
                    groups.
                </List.Item>
            </List>

            <Text size="md" weight="bold" color="gray.7">
                Private Distributed VPN Project
            </Text>
            <Text c="gray.7">
                Designed and operated a distributed VPN platform in response to
                the internet restrictions and censorship situation in Iran, with
                a focus on reliability, scalability, and ease of deployment.
            </Text>
            <List c="gray.7" icon="•">
                <List.Item>
                    Built containerized runner nodes using Xray/V2Ray, NestJS,
                    OpenAPI, and SQLite.
                </List.Item>
                <List.Item>
                    Developed a central management platform with NestJS and
                    Next.js for configuration, monitoring, and statistics.
                </List.Item>
                <List.Item>
                    Helped operate and maintain the infrastructure for hundreds
                    of users.
                </List.Item>
                <List.Item>
                    Designed the system to be modular, maintainable, and easy to
                    extend.
                </List.Item>
            </List>
        </Stack>
    );
};

export default Volunteer;
