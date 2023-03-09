import React from "react";

const Footer = ({ height, width }) => {
	return (
		<div className="theFooter">
        <footer className="flex-none bg-gray-700" style={{ width, height }}>
			<h1 className="text-center text-sm text-gray-50 py-2 align-baseline">
				Proudly developed by:{" "}
				<a href="https://github.com/TunArt" className="font-bold">
					Arfolio Team
				</a>{" "}
				<span className="mx-6 text-sm">&copy; 2023</span>
                 <span className="mx-6 text-sm"><a href="/MainPage/contactUs" >Contact Us</a></span>
                <span><a href="/MainPage/aboutUs/" >About Us</a></span>
			</h1>
		</footer>
        </div>
	);
};

export default Footer;
