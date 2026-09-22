import { PiFacebookLogo, PiInstagramLogoThin, PiLinkedinLogoLight, PiTwitterLogoThin} from "react-icons/pi";
import { SiDuckduckgo } from "react-icons/si";

export default function Footer() {
    return (
         <div className="w-full bg-[#f5f7f9]  pt-12 pb-14 text-[#747579]">
        <div className="max-w-[1272px] mx-auto">
            <div className="grid px-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                <div>
                    <h2 className="font-bold text-2xl flex mb-3 items-center gap-2 cursor-pointer">
                        <SiDuckduckgo className="text-black text-3xl"/>
                        <span className="text-black">Quik <span className="text-[#FDA32E]">Duck</span></span>
                    </h2>
                    <small className="my-4">Eduport education theme, built specifically for the education centers which is dedicated to teaching and involve learners.</small>
                    <div className="flex my-5 item-center gap-3">
                        <div className="w-[34px] h-[34px] roounde-md bg-[#ffffff] flex items-center justify-center">
                            <PiFacebookLogo className="text-xl"/>
                        </div>
                        <div className="w-[34px] h-[34px] roounde-md bg-[#ffffff] flex items-center justify-center">
                            <PiInstagramLogoThin className="text-xl"/>
                        </div>
                        <div className="w-[34px] h-[34px] roounde-md bg-[#ffffff] flex items-center justify-center">
                            <PiTwitterLogoThin className="text-xl"/>
                        </div>
                        <div className="w-[34px] h-[34px] roounde-md bg-[#ffffff] flex items-center justify-center">
                            <PiLinkedinLogoLight className="text-xl"/>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 className="text-xl text-black font-bold mb-2 md:mb-6">
                        Company
                    </h5>
                    <ul className="flex text-sm flex-col gap-y-2">
                        <li><a className="py1">About us</a></li>
                        <li><a className="py1">Contact us</a></li>
                        <li><a className="py1">Library</a></li>
                        <li><a className="py1">Career</a></li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-xl text-black font-bold mb-2 md:mb-6">
                        Community
                    </h5>
                    <ul className="flex text-sm flex-col gap-y-2">
                        <li><a className="py1">Documentation</a></li>
                        <li><a className="py1">FAQ</a></li>
                        <li><a className="py1">Forum</a></li>
                        <li><a className="py1">Sitemap</a></li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-xl text-black font-bold mb-2 md:mb-6">
                        Contact
                    </h5>
                    <ul className="flex text-sm flex-col gap-y-2">
                        <li><a className="py1">Toll free: <span className="text-black">+25410001000</span></a></li>
                        <li><a className="py1">(9:AM to 8:PM IST)</a></li>
                        <li><a className="py1">Email: <span className="text-black">test@mail.com</span></a></li>
                    </ul>
                    <div className="flex items-center my-4 gap-3">
                        <div>
                            {/* <img src={appStore} alt="app store icon" className="h-[30px] rounded-md" /> */}
                        </div>
                        <div>
                            {/* <img src={playStore} alt="play store icon" className="h-[30px] rounded-md" /> */}
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-5"/>
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                    <small>Copyrights ©2026 Eduport. Build by StackBros</small>
                </div>
                <div className="flex items-center gap-6">
                    <div>
                        <small>Terms of User</small>
                    </div>
                    <div>
                        <small>Terms of User</small>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    )
}