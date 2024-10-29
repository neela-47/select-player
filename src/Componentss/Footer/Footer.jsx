
import './Footer.css'
const Footer = () => {
    return (
        <div>
           <div className="w-11/12 mx-auto bg-[#06091A] text-white ">
            <img className='pl-[500px] mt-10 mb-10 pt-10' src="./src/assets/asset/logo-footer.png" alt="" />
            <div className='flex justify-around'>
                <div>
                    <h3>About Us</h3>
                    <p>We are a passionate team dedicated to providing <br /> the best  services to our customers.</p>
                </div>
                <div>
                    <h3>Quick links</h3>
                    <ul className='list-disc'>
                        <li>Home</li>
                        <li>Service</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h3>Subscribe</h3>
                    <p>Subscribe to our newsletter for the latest updates.</p>
                    <div className=''>
                        <input type="text" placeholder="Enter Your Email" />
                        <button className='footer-btn'>Subscribe</button>
                    </div>
                </div>
            </div>
           </div>
           <div className='w-2/5 mx-auto bg-orange-200'>
           <h1>Subscribe to Our Newinstaller</h1>
            <h3>Get the latest updates and news right in your inbox!</h3>
           </div>
        </div>
    );
};

export default Footer;