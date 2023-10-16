import Fastify from "fastify";
import Static from "@fastify/static";
import path from "path";
import { fileURLToPath } from "url";
import Proxy from "@fastify/http-proxy";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BACKEND_PORT = 3000;
const LOGIN_PORT = 3001;
const TASKS_PORT = 3002;

const LOGIN_FRONT_URL = path.join(__dirname, "..", "frontend-login", "dist");
const TASKS_FRONT_URL = path.join(__dirname, "..", "frontend-tasks", "dist");
const BACKEND_FRONT_URL = __dirname;

// FRONTEND BASE

const baseServer = Fastify({
  logger: true,
});

baseServer.register(Proxy, {
  upstream: `http://localhost:${LOGIN_PORT}`,
  prefix: "/login",
});

baseServer.register(Proxy, {
  upstream: `http://localhost:${TASKS_PORT}`,
  prefix: "/tasks",
});

try {
  await baseServer.listen({ port: BACKEND_PORT });
} catch (err) {
  baseServer.log.error(err);
  process.exit(1);
}

// FRONTEND LOGIN

const loginServer = Fastify({
  logger: true,
});

loginServer.register(Static, {
  root: LOGIN_FRONT_URL,
});

loginServer.get("/", async function (req, reply) {
  return reply.sendFile("/");
});

try {
  await loginServer.listen({ port: LOGIN_PORT });
} catch (err) {
  loginServer.log.error(err);
  process.exit(1);
}

// FRONTEND TASKS

const tasksServer = Fastify({
  logger: true,
});

tasksServer.register(Static, {
  root: TASKS_FRONT_URL,
});

tasksServer.get("/", async function (req, reply) {
  return reply.sendFile("/");
});

try {
  await tasksServer.listen({ port: TASKS_PORT });
} catch (err) {
  tasksServer.log.error(err);
  process.exit(1);
}
