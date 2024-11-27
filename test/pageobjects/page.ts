
import { WebActions } from '../utils/WebActions';


export class Page {

    protected webActions: WebActions;

    constructor() {
        this.webActions = new WebActions();
    }

    public async clickOnTab(tab: string) {
        const ele = $(`//div[text()="${tab}"]`);
        await this.webActions.waitAndClick(ele);
    }

}
export default new Page();
