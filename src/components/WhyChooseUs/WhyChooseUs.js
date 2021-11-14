import './WhyChooseUs.css';
import why from '../../Images/why.jpg';
import delivery from '../../Images/delivery.png';
import always from '../../Images/always.png';
import gift from '../../Images/gift.png';
import order from '../../Images/order.png';

function WhyChooseUs() {

	return (
	<div className="container pt-5">
    <div className="row align-items-center">
        <div className="col-sm-6 col-lg-4 mb-2-9 mb-sm-0">
            <div className="pr-md-3">
                <div className="text-center text-sm-right mb-2-9">
                    <div className="mb-4">
                        <img src={delivery} alt="..." className="rounded-circle why"/>
                    </div>
                    <p class="display-30 mb-0">FAST & FREE SHIPPING WORLDWIDE</p>
                </div>
                <div className="text-center text-sm-right pt-5">
                    <div className="mb-4">
                        <img src={always} alt="..." className="rounded-circle why"/>
                    </div>
                    <p class="display-30 mb-0">24/7 ONLINE CUSTOMER SUPPORT</p>
                </div>
            </div>
        </div>
        <div className="col-lg-4 d-none d-lg-block">
            <div className="why-choose-center-image">
                <img src={why} alt="..." className="rounded-circle"/>
            </div>
        </div>
        <div className="col-sm-6 col-lg-4">
            <div className="pl-md-3">
                <div className="text-center text-sm-left mb-2-9">
                    <div className="mb-4">
                        <img src={gift} alt="..." className="rounded-circle why"/>
                    </div>
                    <p class="display-30 mb-0">ORDER RETURN WITHIN 30 DAYS</p>
                </div>

                <div className="text-center text-sm-left pt-5">
                    <div className="mb-4">
                        <img src={order} alt="..." className="rounded-circle why"/>
                    </div>
                    <p class="display-30 mb-0">GIFT VOUCHER ON YOUR FIRST ORDER</p>
                </div>
            </div>
        </div>
    </div>
</div>
	);
}

export default WhyChooseUs;