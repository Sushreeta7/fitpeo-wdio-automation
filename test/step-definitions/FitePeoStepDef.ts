import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';
import page from '../pageobjects/page';
import revenuecalculatorPage from '../pageobjects/revenuecalculator.page';
import WebActions from '../utils/WebActions';

Given(/^User navigates to (.*) page$/, async (tab: string) => {
    await page.clickOnTab(tab);
    await browser.pause(2000);
    await revenuecalculatorPage.setSliderValue(820);
    const val = await revenuecalculatorPage.getPatientFieldValue();
    expect(val).toBeGreaterThan(820);
    await revenuecalculatorPage.selectCheckbox('CPT-99091');
    await revenuecalculatorPage.selectCheckbox('CPT-99453');
    await revenuecalculatorPage.selectCheckbox('CPT-99454');
    await revenuecalculatorPage.selectCheckbox('CPT-99474');
    await browser.pause(2000);

});













