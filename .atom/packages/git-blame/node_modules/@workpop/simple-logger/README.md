# @workpop/simple-logger

> Dead simple logging utility for node.

## Usage

### Basic

```js
import Logger from '@workpop/simple-logger';

// create a logger with a category
const logger = new Logger('MYAPP');

logger.info('important information', 'and more');
// to stdout
// 2018-02-08T15:47:45-08:00 INFO [MYAPP] important information and more

logger.warn('some warning occurred')
// to stdout
// 2018-02-08T15:47:45-08:00 WARN [MYAPP] some warning occurred

logger.trace('something not very significant occurred');
// to stdout
// 2018-02-08T15:47:45-08:00 INFO [MYAPP] something not very significant occurred

logger.error('oh no!', new Error());
// stderr
// 2018-02-08T15:56:30-08:00 ERROR [MYAPP] oh no! Error
//   at repl:1:19
//   at ContextifyScript.Script.runInThisContext (vm.js:50:33)
//   at REPLServer.defaultEval (repl.js:240:29)
//   at bound (domain.js:301:14)
//   at REPLServer.runBound [as eval] (domain.js:314:12)
//   at REPLServer.onLine (repl.js:468:10)
//   at emitOne (events.js:121:20)
//   at REPLServer.emit (events.js:211:7)
//   at REPLServer.Interface._onLine (readline.js:282:10)
//   at REPLServer.Interface._line (readline.js:631:8)

```

### Enable / Disable

You can globally enable / disable ALL logger instances as follows:

```js
import Logger from '@workpop/simple-logger';

const logger = new Logger('MYAPP');

Logger.disable();
logger.info('something');
// nothing logged to stdout

Logger.enable();
logger.info('something else');
// logged to stdout:
// 2018-02-08T15:47:45-08:00 INFO [MYAPP] something else
```
