import React, { ReactElement } from "react";
import { Box, Divider, Text, List, Space, Stack } from "@mantine/core";

const Experience = (): ReactElement => {
    return (
        <Stack spacing="sm" my="xl">
            <Divider
                variant="dashed"
                label="Notable Recent Experience"
                labelProps={{ size: "md", fw: "normal", color: "gray.7" }}
            />
            <Stack spacing={0}>
                <Text size="md" weight="bold" color="gray.7">
                    Senior Frontend Engineer / Frontend Team Lead — ParsTasmim
                </Text>
                <Text size="sm" color="gray.7">
                    Partner company of Irancell
                </Text>
            </Stack>
            <List pl="xs" c="gray.7" icon="•">
                <List.Item>
                    Led a team of 7 frontend developers across multiple
                    enterprise-scale applications, including:
                    <List c="gray.7" icon="•">
                        <List.Item>E-commerce platform</List.Item>
                        <List.Item>Marketplace platform</List.Item>
                        <List.Item>Mobile commerce application</List.Item>
                        <List.Item>Document generation system</List.Item>
                        <List.Item>FTTH CRM system</List.Item>
                        <List.Item>
                            Marketplace admin and seller portals
                        </List.Item>
                        <List.Item>DPOS applications</List.Item>
                        <List.Item>
                            Planned OMS (Order Management System)
                        </List.Item>
                        <List.Item>
                            ESB Billing system for generating subscriber bills
                            and itemized bills, with Kubernetes-based scaling
                            for handling very large document sizes
                        </List.Item>
                    </List>
                </List.Item>
                <List.Item>
                    Took part in solution design for every feature from early
                    project stages through implementation, release, and
                    maintenance, working closely with product, backend, and QA
                    teams.
                </List.Item>
                <List.Item>
                    Designed and maintained scalable frontend architecture using
                    React, Next.js, TypeScript, and modern state management
                    patterns.
                </List.Item>
                <List.Item>
                    Established frontend engineering practices including code
                    review standards, project structure, development workflows,
                    tooling, and team collaboration processes.
                </List.Item>
                <List.Item>
                    Mentored frontend developers through technical guidance,
                    architecture discussions, code reviews, and knowledge
                    sharing.
                </List.Item>
                <List.Item>
                    Participated in architectural decisions with a focus on
                    maintainability, scalability, and developer experience.
                </List.Item>
            </List>
            <Stack spacing={0}>
                <Text size="md" color="gray.7" weight="bold">
                    Senior Frontend Engineer / QA Engineer — Karen
                </Text>
                <Text size="sm" color="gray.7">
                    Project: Torch
                </Text>
            </Stack>
            <List pl="xs" c="gray.7" icon="•">
                <List.Item>
                    Developed a data-driven web application using Next.js App
                    Router, TypeScript, Mantine UI, React Query, and
                    internationalization (i18n).
                </List.Item>
                <List.Item>
                    Worked across frontend development and quality engineering
                    responsibilities, contributing to architecture reviews and
                    challenging technical decisions.
                </List.Item>
                <List.Item>
                    Designed and planned cross-service testing strategies using
                    Playwright to improve system reliability and regression
                    coverage.
                </List.Item>
                <List.Item>
                    Collaborated with development teams to identify quality
                    risks, improve workflows, and strengthen delivery processes.
                </List.Item>
            </List>
        </Stack>
    );
};

export default Experience;
