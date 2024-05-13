import React, { ReactElement } from "react";
import { Box, Divider, List, Text } from "@mantine/core";

const Volunteer = (): ReactElement => {
    return (
        <Box my="xl">
            <Divider
                my="xs"
                variant="dashed"
                label="Volunteer experience"
                labelProps={{ size: "md", fw: "normal", color: "gray.7" }}
            />
            <List c="gray.7" icon="•">
                <List.Item>
                    Mentoring people to become front-end/back-end engineer or
                    general advising to newcomers in IT world.
                </List.Item>
                <List.Item>
                    Guide newcomers to Linux world in small group of people.
                    Mostly in telegram groups.
                </List.Item>
                <List.Item>
                    <Text>
                        Due to complex situation in my country & social
                        responsibility, I made a vpn stack based on xray/v2ray
                        to circumvent internet censorship & provide easy &
                        reliable access for people for free or less than a
                        dollar.
                    </Text>
                    <Text>Consist of:</Text>
                    <List c="gray.7" icon="•">
                        <List.Item>
                            Multiple&nbsp;
                            <Text span italic>
                                runners
                            </Text>
                            &nbsp;which can deployed on many servers. (Xray -
                            Nestjs - Openapi - Sqlite - Containerized)
                        </List.Item>
                        <List.Item>
                            A&nbsp;
                            <Text span italic>
                                manager
                            </Text>
                            . Aggregate data & statistics from runners &
                            provides configuration & status to users. (Nestjs -
                            MVC - Sqlite - Openapi - Nextjs)
                        </List.Item>
                        <List.Item>
                            Future feature: Add swarm like feature to&nbsp;
                            <Text span italic>
                                manager
                            </Text>
                            &nbsp;node to scale up number of users.
                        </List.Item>
                    </List>
                </List.Item>
                <List.Item>
                    Counseling people for free who wants to provide vpn/proxies
                    to others. I did this for +5 people which each of them had
                    +500 users.
                </List.Item>
            </List>
        </Box>
    );
};

export default Volunteer;
