const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-r from-purple-700 to-blue-700 text-white p-5">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <h1 className="text-3xl font-bold italic mb-4 md:mb-0">Portfolio</h1>
                <p className="text-sm text-center md:text-left">
                    2023 &copy; All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;