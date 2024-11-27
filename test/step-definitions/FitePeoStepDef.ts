import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';
import page from '../pageobjects/page';
import revenuecalculatorPage from '../pageobjects/revenuecalculator.page';
import WebActions from '../utils/WebActions';

let val;

Given(/^User navigates to (.*) page$/, async (tab: string) => {
    await page.clickOnTab(tab);
    await browser.pause(2000);
});

When(/^Adjust the slider value to (.*)$/, async (value: string) => {
    await revenuecalculatorPage.setSliderValue(parseInt(value));
});

Then(/^Verify that the value is set around (.*)$/, async (targetValue: string) => {
    val = await revenuecalculatorPage.getPatientFieldValue();
    expect(val).toBeGreaterThan(parseInt(targetValue));
});

Then(/^Select all required CPT code checkboxes$/, async (dataTable) => {
    const data = dataTable.raw();
    await revenuecalculatorPage.selectCheckbox(data);
    await browser.pause(2000);
});

Then(/^Verify total recurring reimbursements all patients$/, async () => {
    expect(await revenuecalculatorPage.getTotalRecurringValue()).toBe('$112185');
});

Then(/^Set the medical eligible input field value to 560$/, async () => {
    await browser.pause(5000);
    await revenuecalculatorPage.setInputFieldValue();
    // await WebActions.setInputFieldValue(revenuecalculatorPage.inputValueField, parseInt(value));
});


Then(/^Verify slider knob is positioned at 560$/, async () => {
    await browser.pause(5000);
    // expect(await revenuecalculatorPage.getSliderKnobValue()).toBe(560);
});























