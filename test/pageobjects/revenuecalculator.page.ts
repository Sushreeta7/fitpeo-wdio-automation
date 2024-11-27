import { Page } from "./page";

class RevenueCalculator extends Page {

    get sliderKnob() {
        return $('//input[@type="range"]');
    }

    get inputValueField() {
        return $('//input[@type="number"]');
    }

    public async setSliderValue(targetValue: number) {

        targetValue = 820;

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

    public async selectCheckbox(value: string) {
        await $(`//p[text()="${value}"]`).scrollIntoView();
        const ele = $(`(//p[text()="${value}"]/following::input[@type="checkbox"])[1]`);
        await this.webActions.waitAndClick(ele);
    }

}
export default new RevenueCalculator();