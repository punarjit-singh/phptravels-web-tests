import { Selector, t } from 'testcafe';

class HotelBooking {
    constructor () {
        
        //Selectors:
        this.hotelBookingHeadingLabel   = Selector('.section-heading').withExactText('Hotel Booking');
        this.bookNowButton              = Selector('.card > * button');
        this.payLaterRadioButton        = Selector('#gateway_pay-later');
        this.confirmBookingButton       = Selector('#booking');

    }

    //Actions:
    async verifyHotelBooking () {
        await t
            .expect(this.hotelBookingHeadingLabel.exists).ok();
            //other assertions...
    }

    async confirmHotelBooking() {
        await t
            //using pre filled payment form for demo
            .click(this.payLaterRadioButton)
            .expect(this.confirmBookingButton.exists).ok()
            .click(this.confirmBookingButton);
    }

}

export default new HotelBooking();