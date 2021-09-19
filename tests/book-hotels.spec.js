import { userVariables } from 'testcafe';
import Home from '../pages/home';
import HotelResults from '../pages/hotel-results'
import HotelDetails from '../pages/hotel-details'
import HotelBooking from '../pages/hotel-booking'
import HotelBookingInvoice from '../pages/hotel-booking-invoice'

fixture 
    .meta({suite: 'regression'})       //meta data on fixture level and run suite as a whole
    `I want to be able to`
    .page(userVariables.baseUrl);

test
    .meta({suite: 'smoke'})            //meta data on test level and run a filtered smoke suite as required
    ('book hotels from app home', async t => {
        await Home
            .selectHotelsTab();
        
        await Home
            .selectCity({city: "Singapore"});
        
        await Home
            .selectCheckinCheckout({daysFromToday: 5, checkoutAfter: 4});
        
        await Home
            .selectTravellers({rooms: "1", adults: "2", childs: "0", nationality: "Australia"});

        await Home
            .submitSearch();

        await HotelResults
            .verifyHotelResults();

        await HotelResults
            .selectHotel();

        await HotelDetails
            .verifyHotelDetails();

        await HotelDetails
            .bookHotel();

        await HotelBooking
            .verifyHotelBooking();

        await HotelBooking
            .confirmHotelBooking();

        await HotelBookingInvoice
            .verifyBookingInvoice({rooms: "1", adults: "2", childs: "0"});
    });

//more tests here...

/*
test
    .meta({suite: 'smoke'})
    ('book hotels from hotels page', async t => {
    });
*/