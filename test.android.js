const { remote } = require('webdriverio');
const { expect } = require('chai');

const capabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android',
    'appium:appPackage': 'com.android.settings',
    'appium:appActivity': '.Settings',
};

const wdOpts = {
    hostname: process.env.APPIUM_HOST || 'localhost',
    port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
    logLevel: 'info',
    capabilities,
}
let driver = null

describe('Battery', function() {
    before(async function() {
        // runs once before the first test in this block
        driver = await remote(wdOpts);
    });
    describe('battery entrance', async function() {
        it('should go to battery page', async function() {
            const batteryItem = await driver.$('//*[@text="Battery"]');
            await batteryItem.click();

            expect(batteryItem).to.not.be.null
        });
    });

    after(async function() {

        await driver.pause(1000);
        await driver.deleteSession();

    })
});

