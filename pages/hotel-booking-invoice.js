import { Selector, t } from 'testcafe';

class HotelBookingInvoice {
    constructor () {
        
        //Selectors:
        this.bookingInvoiceTitle        = Selector('.title').withText('Booking Invoice');
        this.reservationNumberLabel     = Selector('strong').withText('Reservation Number:');
        this.hotelNameLabel             = Selector('.card-title.m-0');

    }

    //Actions:
    async verifyBookingInvoice ({rooms, adults, childs}) {
        await t
            .expect(this.bookingInvoiceTitle.exists).ok()
            .expect(this.reservationNumberLabel.exists).ok()
            .expect(this.hotelNameLabel.exists).ok();
            //other data specific assertions...
    }

}

export default new HotelBookingInvoice();