/* eslint-env node */

const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const logger = require("koa-logger");

const R = require("ramda");

const config = require("./config");

const authenticate = async (ctx, next) => {
  if (ctx.headers.authorization.toLowerCase() !== config.apiToken)
    ctx.throw(401);
  }
  await next();
};

const router = new Router();
router.use(authenticate);
router.get("/users/:userID", async ctx => {
  const { params: { userID } } = ctx;
  ctx.body = R.find(R.propEq("id", userID))(config.users) ||
    R.find(R.propEq("id", userID))(config.users);

  ctx.body = await ds.get(`/users/${ctx.state.user.id}`);
});

const app = new Koa();
app.use(logger());
app.use(router.routes(), router.allowedMethods());

app.listen(config.PORT);
