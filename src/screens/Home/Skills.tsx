import React, { ReactElement } from "react";
import Link from "next/link";
import {
    Box,
    Divider,
    useMantineTheme,
    Button,
    Badge,
    Group,
    Stack,
    Text,
} from "@mantine/core";
import { HiOutlineExternalLink } from "react-icons/hi";

const Skills = (): ReactElement => {
    const theme = useMantineTheme();

    return (
        <Box my="xl">
            <Divider
                my="sm"
                variant="dashed"
                label="Skills"
                labelProps={{ size: "md", fw: "normal", color: "gray.7" }}
            />
            <Stack align="flex-start" spacing="sm">
                <Stack
                    align="flex-start"
                    spacing={`calc(${theme.spacing.xs} / 2)`}
                >
                    <Text size="md" fw="normal" color="gray.7">
                        Frontend Engineering
                    </Text>
                    <Group spacing={`calc(${theme.spacing.xs} / 2)`}>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            React
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Next.js
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            TypeScript
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            JavaScript (ES6+)
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Redux Toolkit / RTK Query
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            React Router
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Vite
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            HTML5 / CSS3 / Sass / Tailwind
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            i18n
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            TanStack (Query / Start)
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Zod
                        </Badge>
                    </Group>
                </Stack>
                <Stack
                    align="flex-start"
                    spacing={`calc(${theme.spacing.xs} / 2)`}
                >
                    <Text size="md" fw="normal" color="gray.7">
                        Backend & APIs
                    </Text>
                    <Group spacing={`calc(${theme.spacing.xs} / 2)`}>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Node.js
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            NestJS
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Express
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            REST APIs
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "blue", deg: 60 }}
                        >
                            GraphQL
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "blue", deg: 60 }}
                        >
                            tRPC
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            ORM (Prisma / TypeORM / MikroORM / Knex.js)
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Directus / Strapi
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "orange", to: "red" }}
                        >
                            Supabase
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "orange", to: "red" }}
                        >
                            Hasura
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Authentication
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            WebSocket
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Puppeteer
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Browser Automation
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Web Scraping
                        </Badge>
                    </Group>
                </Stack>
                <Stack
                    align="flex-start"
                    spacing={`calc(${theme.spacing.xs} / 2)`}
                >
                    <Text size="md" fw="normal" color="gray.7">
                        Architecture & Engineering
                    </Text>
                    <Group spacing={`calc(${theme.spacing.xs} / 2)`}>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Frontend Architecture
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Scalable UI Design
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Design Systems
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Component Libraries
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            State Management
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            API Integration
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Performance Optimization
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "blue", deg: 60 }}
                        >
                            Accessibility (WCAG)
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Responsive Design
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            SSR / CSR / SSG
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Code Review
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Technical Documentation
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "blue", deg: 60 }}
                        >
                            Micro Frontends
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Domain-driven Design (DDD) + (DI / IOC)
                        </Badge>
                    </Group>
                </Stack>
                <Stack
                    align="flex-start"
                    spacing={`calc(${theme.spacing.xs} / 2)`}
                >
                    <Text size="md" fw="normal" color="gray.7">
                        Testing & Quality
                    </Text>
                    <Group spacing={`calc(${theme.spacing.xs} / 2)`}>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Playwright
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Vitest
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Jest
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Integration Testing
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            End-to-End Testing
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            QA/QC Processes
                        </Badge>
                    </Group>
                </Stack>
                <Stack
                    align="flex-start"
                    spacing={`calc(${theme.spacing.xs} / 2)`}
                >
                    <Text size="md" fw="normal" color="gray.7">
                        DevOps & Infrastructure
                    </Text>
                    <Group spacing={`calc(${theme.spacing.xs} / 2)`}>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Linux
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Docker
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Docker Compose
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Nginx / Caddy
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            PM2
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            GitHub Actions
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            CI/CD
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            MinIO
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "orange", to: "red" }}
                        >
                            Terraform
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "orange", to: "red" }}
                        >
                            AWS
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "orange", to: "red" }}
                        >
                            Prometheus / Loki / Grafana
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "orange", to: "red" }}
                        >
                            Traefik
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "orange", to: "red" }}
                        >
                            Kafka
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "orange", to: "red" }}
                        >
                            Kubernetes
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "orange", to: "red" }}
                        >
                            ELK / APM
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "orange", to: "red" }}
                        >
                            Sentry
                        </Badge>
                    </Group>
                </Stack>
                <Stack
                    align="flex-start"
                    spacing={`calc(${theme.spacing.xs} / 2)`}
                >
                    <Text size="md" fw="normal" color="gray.7">
                        Databases & Storage
                    </Text>
                    <Group spacing={`calc(${theme.spacing.xs} / 2)`}>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            PostgreSQL
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            MySQL
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            MongoDB
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Redis
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            SQLite
                        </Badge>
                    </Group>
                </Stack>
                <Stack
                    align="flex-start"
                    spacing={`calc(${theme.spacing.xs} / 2)`}
                >
                    <Text size="md" fw="normal" color="gray.7">
                        AI-Assisted Development
                    </Text>
                    <Group spacing={`calc(${theme.spacing.xs} / 2)`}>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            GitHub Copilot
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            ChatGPT (Codex)
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Claude
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Cursor
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            kilo code
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            OpenCode
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Prompt Engineering
                        </Badge>
                    </Group>
                </Stack>
                <Stack
                    align="flex-start"
                    spacing={`calc(${theme.spacing.xs} / 2)`}
                >
                    <Text size="md" fw="normal" color="gray.7">
                        Tools & Workflow
                    </Text>
                    <Group spacing={`calc(${theme.spacing.xs} / 2)`}>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Git
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            GitHub
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            GitLab
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Figma
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Jira
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            Agile / Scrum
                        </Badge>
                        <Badge
                            size="lg"
                            sx={{ textTransform: "none" }}
                            variant="gradient"
                            gradient={{ from: "teal", to: "lime", deg: 105 }}
                        >
                            npm / pnpm / yarn
                        </Badge>
                    </Group>
                </Stack>
            </Stack>

            <Stack
                mt="xl"
                align="flex-start"
                spacing={`calc(${theme.spacing.xs} / 2)`}
            >
                <Group noWrap spacing="xs">
                    <Badge
                        variant="gradient"
                        gradient={{ from: "teal", to: "lime", deg: 105 }}
                        display="block"
                        p={0}
                        styles={() => ({ root: { width: 10, height: 10 } })}
                    ></Badge>
                    <Text size="xs" color="gray.6" sx={{ flex: 1 }}>
                        I’m happy with it & ready to use it in production
                        environment.
                    </Text>
                </Group>
                <Group noWrap spacing="xs">
                    <Badge
                        variant="gradient"
                        gradient={{ from: "teal", to: "blue", deg: 60 }}
                        display="block"
                        p={0}
                        styles={() => ({ root: { width: 10, height: 10 } })}
                    ></Badge>
                    <Text size="xs" color="gray.6" sx={{ flex: 1 }}>
                        I need to gain more experience.
                    </Text>
                </Group>
                <Group noWrap spacing="xs">
                    <Badge
                        variant="gradient"
                        gradient={{ from: "orange", to: "red" }}
                        display="block"
                        p={0}
                        styles={() => ({ root: { width: 10, height: 10 } })}
                    ></Badge>
                    <Text size="xs" color="gray.6" sx={{ flex: 1 }}>
                        I’m familiar with it and I know its importance and I’m
                        looking for opportunity to dive into it. Or maybe I need
                        to pass a learning stage before.
                    </Text>
                </Group>
            </Stack>
        </Box>
    );
};

export default Skills;
