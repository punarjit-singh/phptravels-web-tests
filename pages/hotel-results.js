import { Selector, t } from 'testcafe';

class HotelResults {
    constructor () {
        
        //Selectors:

        this.searchHotels         = Selector('h2.sec__title_list');
        this.hotelListItems       = Selector('#data > * li.mix');
        this.moreDetailsButton    = Selector('#data > * li.mix > * a.more_details');
    }

    //Actions:

    async verifyHotelResults () {
        await t
            .expect(this.searchHotels.exists).ok()
            .expect(this.hotelListItems.count).gt(0);
    }

    async selectHotel() {
        await t
            .click(this.moreDetailsButton.nth(0));
    }

}

export default new HotelResults();