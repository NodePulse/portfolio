const Button = ({
    text,
    className,
    id,
}: {
    text: string;
    className: string;
    id: string;
}) => {
    return (
        <a
            className={`${className ?? ""} cta-wrapper`}
            onClick={(e) => {
                e.preventDefault();

                const target = document.getElementById("counter");

                if (target && id) {
                    const offset = window.innerHeight * 0.15;
                    const top =
                        target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top, behavior: "smooth" });
                }
            }}
        >
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
            </div>
        </a>
    );
};

export default Button;