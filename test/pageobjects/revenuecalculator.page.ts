import { Page } from "./page";

class RevenueCalculator extends Page {

    get sliderKnob() {
        return $('//input[@type="range"]');
    }

    get inputValueField() {
        return $('//input[@type="number"]');
    }

    get totalRecurringReimbursementValue() {
        return $('body > div.MuiBox-root.css-3f59le > div.MuiBox-root.css-rfiegf > header > div > p:nth-child(4) > p')
    }

    public async setSliderValue(targetValue: number) {

        await this.inputValueField.waitForDisplayed();
        let currentValue = parseInt(await this.inputValueField.getValue());

        while (true) {
            await this.sliderKnob.dragAndDrop({ x: 5, y: 0 });
            await browser.pause(500);
            currentValue = parseInt(await this.inputValueField.getValue());
            console.log(`Current value: ${currentValue}`);
            if (currentValue > targetValue) {
                break;
            }
        }
    }

    public async getPatientFieldValue() {
        await this.inputValueField.waitForDisplayed();
        const value = parseInt(await this.inputValueField.getAttribute('value'));
        return value;
    }

    public async getSliderKnobValue() {
        await this.sliderKnob.waitForDisplayed();
        const value = parseInt(await this.sliderKnob.getAttribute('value'));
        return value;
    }

    public async selectCheckbox(cptCodes?) {
        for (let i = 0; i < 4; i++) {
            console.log('test', cptCodes[i]);
            await $(`//p[text()="${cptCodes[i]}"]`).scrollIntoView();
            const ele = $(`(//p[text()="${cptCodes[i]}"]/following::input[@type="checkbox"])[1]`);
            await this.webActions.jsBasedClick(ele);
        }

    }

    public async getTotalRecurringValue() {
        await this.totalRecurringReimbursementValue.waitForDisplayed();
        const value = await this.totalRecurringReimbursementValue.getText();
        return value;
    }

    public async setInputFieldValue() {
        await this.webActions.jsBasedClick(this.inputValueField);
        await this.inputValueField.clearValue();
        await browser.pause(1000);
        await this.inputValueField.setValue(560)
      
        // await this.inputValueField.setValue(560);

        // await browser.execute(() => {
        //     const element = document.querySelector('input[type="number"]');
        //     if (element) {

        //         (element as HTMLInputElement).value = '560';

        //         element.dispatchEvent(new Event('input', { bubbles: true }));
        //         element.dispatchEvent(new Event('change', { bubbles: true }));

        //     } else {
        //         console.error('Element not found for the provided selector.');
        //     }
        // });
        // await browser.keys('Enter')
    }
}
export default new RevenueCalculator();