import { Selector, t } from 'testcafe';

class HotelDetails {
    constructor () {
        
        //Selectors:
        this.hotelDetailsLink   = Selector('a').withExactText('Hotel Details');
        this.bookNowButton      = Selector('.card > * button');

    }

    //Actions:
    async verifyHotelDetails () {
        await t
            .expect(this.hotelDetailsLink.exists).ok()
            .expect(this.bookNowButton.count).gt(0);
            //other assertions...
    }

    async bookHotel () {
        await t
            .expect(this.bookNowButton.nth(0).exists).ok()
            .scrollIntoView(this.bookNowButton.nth(0))
            .click(this.bookNowButton.nth(0));
    }

}

export default new HotelDetails();