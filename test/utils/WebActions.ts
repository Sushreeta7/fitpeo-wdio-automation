export class WebActions {

    public async waitAndClick(element?) {
        try {
            await (await element).waitForDisplayed();
            await (await element).click();
        }
        catch (e) {
            console.log(e);
            await browser.execute('arguments[0].click();', await element)
        }
    }

    public async jsBasedClick(element?) {
        await browser.execute('arguments[0].click();', await element)
    }


}
export default new WebActions();
