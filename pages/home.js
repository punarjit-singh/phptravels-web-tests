import { Selector, ClientFunction, t } from 'testcafe';

class Home {
    constructor () {
        
        //Selectors:

        this.hotelsTab                  = Selector('button').withAttribute('data-bs-target', '#hotels');
        this.hotelsActive               = Selector('button.active').withAttribute('data-bs-target', '#hotels');

        this.cityInputContainer         = Selector('span#select2-hotels_city-container');
        this.cityInput                  = Selector('input.select2-search__field');
        this.searchResultsListItem      = Selector('li.select2-results__option');

        this.checkinInput               = Selector('#checkin');
        this.checkinLabel               = Selector('span').withExactText('Checkin');

        this.datePicker                 = Selector('.datepicker[style*="display: block;"]');
        this.dataPickerDayCell          = Selector('.datepicker[style*="display: block;"] > * td.day');

        this.checkoutInput              = Selector('#checkout');
        
        this.travellersInput            = Selector('#hotels > * .travellers');
        this.roomsInput                 = Selector('#rooms');
        this.adultsInput                = Selector('#adults');
        this.childsInput                = Selector('#childs');
        this.nationalitySelect          = Selector('select#nationality');
        this.nationalitySelectOption    = this.nationalitySelect.find('option');

        this.searchButton               = Selector('#submit.btn');

        //homepage - flights
        //homepage - tours
        //and other parts of homepage goes here...

        /*
            Note: we can go one step deeper and work on component level rather than page level
            
            e.g. #hotels-search form is a component and selectors, client functions, actions etc. 
                can be isolated in a HotelsSearch class 
                which will promote the use of single responsibility principle
                and becomes easier to manage in long run
        */

       
       
        //Client functions:

        /*
            hotels - travellers dropdown has a default href # that takes the test to a page not found
            this client function prevents the default event
            this is not in use, but keeping it as it was tried and event is prevented
        */
        this.preventDefaultEvent = ClientFunction(() => 
        document.querySelector('a.travellers').addEventListener('click', e => {
            e.preventDefault();
        }));

        /*
            Due to the default href # on travellers dropdown
            Using client function to open the dropdown-menu-wrap 
        */
        this.showHotelTravellersWrapMenu = ClientFunction(() => {
            var element = document.querySelector('#hotels > * .dropdown-menu-wrap');
            element.setAttribute('style', 'display: block;');
        });
    }

    //Actions:

    async selectHotelsTab () {
        await t
            .click(this.hotelsTab)
            .expect(this.hotelsActive.exists).ok();
    }

    async selectCity ({city}) {
        await t
            .click(this.cityInputContainer)
            .typeText(this.cityInput, city)
            .expect(this.searchResultsListItem.exists).ok()
            .click(this.searchResultsListItem)
            .expect(this.cityInputContainer.withText(city).exists).ok();
    }

    async selectCheckinCheckout ({ daysFromToday, checkoutAfter })  {
        
        //Get dates to select based on daysFromToday and checkoutAfter
        //Todo: Move to a reusable function
        var date = new Date();
        date.setDate(date.getDate() + daysFromToday);
        const checkInDay = date.getDate().toString();
        const checkOutDay = (date.getDate() + checkoutAfter).toString();

        await t
            .click(this.checkinInput)
            .expect(this.datePicker.exists).ok()
            .click(this.dataPickerDayCell.withExactText(checkInDay))
            .click(this.checkinLabel);

        await t
            .expect(this.checkoutInput.exists).ok()
            .click(this.checkoutInput)
            .expect(this.datePicker.exists).ok()
            .click(this.dataPickerDayCell.withExactText(checkOutDay));
    }

    async selectTravellers ({rooms, adults, childs, nationality}) {
        //Using client function because a.travellers has a default href event which takes the test to # not found
        await this.showHotelTravellersWrapMenu();

        await t
            .selectText(this.roomsInput).pressKey("delete")
            .typeText(this.roomsInput, rooms)
            .selectText(this.adultsInput).pressKey("delete")
            .typeText(this.adultsInput, adults)
            .selectText(this.childsInput).pressKey("delete")
            .typeText(this.childsInput, childs)
            .click(this.nationalitySelect)
            .click(this.nationalitySelectOption.withText(nationality))
            .expect(this.nationalitySelect.withText(nationality).exists).ok();
    }

    async submitSearch () {
        await t
            .click(this.searchButton)
    }

}

export default new Home();