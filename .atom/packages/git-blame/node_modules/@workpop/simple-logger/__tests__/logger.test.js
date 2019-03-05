import sinon from 'sinon';
import { expect } from 'chai';
import Logger from '../src';

const simpleLogging = new Logger('SIMPLE');
const requestIdLogger = new Logger('SIMPLE', '234923423');

describe('Logger', function () {

  describe('simple logging', function () {

    let sandbox;

    beforeEach(function () {
      sandbox = sinon.sandbox.create();
      Logger.enable();  // ensure logger is enabled at the start of each test
    });

    afterEach(function () {
      sandbox.restore();
    });

    it('logs errors', function () {
      simpleLogging.error('SUP');
      requestIdLogger.error('SUP');
    });

    it('logs only one line when request ID is included', function () {
      const logSpy = sandbox.spy(console, 'log');
      requestIdLogger.info('log line text');
      expect(logSpy.callCount).to.equal(1);
    });

    it('should NOT log anything regardless of instance when Logger.disable() called', function () {
      const logSpy = sandbox.spy(console, 'log');
      Logger.disable();
      simpleLogging.info('SUP');
      requestIdLogger.info('log line text');
      expect(logSpy.callCount).to.equal(0);
    });

    it('should log when Logger.disable() called followed by Logger.enable()', function () {
      const logSpy = sandbox.spy(console, 'log');
      Logger.disable();
      Logger.enable();
      simpleLogging.info('SUP');
      requestIdLogger.info('log line text');
      expect(logSpy.callCount).to.equal(2);
    });

  });

});
